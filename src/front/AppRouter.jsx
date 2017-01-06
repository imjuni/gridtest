import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Hero from './containers/Hero';
import Contact from './containers/Contact';
import NotFound404 from './containers/NotFound404';

function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Hero} />
        <Route path="contact" component={Contact} />
      </Route>
      <Route path="*" component={NotFound404} />
    </Router>
  );
}

export default AppRouter;

