const path = require('path');
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const socketio = require('socket.io');
const sqlite3 = require('sqlite3');

class GridTest {
  static start() {
    const mode = process.env.NODE_ENV;
    const port = process.env.PORT || 8080;
    const app = express();

    app
      .set('port', port)
      .use(cookieParser('54E37CD6DC2941789041935750D33E48'))
      .use(bodyParser.urlencoded({ extended: false }))
      .use(bodyParser.json())
      .use(methodOverride())
      .use(morgan('combined'));

    if (mode == 'production') {
      app.use(express.static(path.join(__dirname, 'public')));
    }

    const db = new sqlite3.Database('/Users/bjlee/Documents/dumm_data.sqlite3');
    const server = http.createServer(app);
    const io = socketio(server);
    const router = express.Router();

    router
      .get('/exit/asdfasdf', (req, res) => {
        res.send('Server will closed, ...\n');

        setTimeout(() => {
          db.close();
          server.close();
        }, 2000);
      });

    app.use(router);

    io.on('connection', (socket) => {
      console.log(`Connected, socket`);
      socket.emit('connected');

      socket.on('fetch', (rowCount) => {
        const bulkSize = Math.pow(2, 13);
        let current = 0;
        let limit = 0;

        console.log(`recv fetch -> ${rowCount}`);

        const handleInterval = setInterval(() => {
          console.log('current -> ', current, '/ ', rowCount);

          limit = bulkSize;

          if (current + limit > rowCount) {
            limit = limit - ((current + bulkSize) - rowCount);
          }

          if (current < rowCount) {
            db.all('SELECT * FROM dummy_data LIMIT ?, ?', current, limit, (err, data) => {
              socket.emit('fetch:data', data);
            });
          } else {
            console.log('fetch:fin');
            socket.emit('fetch:fin');

            clearInterval(handleInterval);
          }

          current += bulkSize;
        }, 200);
      });

      socket.on('echo', (data) => {
        console.log('echo', data);
        socket.emit('echo', data);
      });
    });

    server.listen(app.get('port'), () => {
      console.log(`Start backend server, port -> ${app.get('port')}`);
    });
  }
}

module.exports = GridTest;
