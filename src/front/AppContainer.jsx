import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import reducer from './reducers/Reducer';
import AppRouter from './AppRouter';

const store = (() => {
  let result;

  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable no-underscore-dangle */
    result = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
    /* eslint-enable */
  } else {
    result = createStore(reducer);
  }

  return result;
})();

function AppContainer() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

render(<AppContainer />, document.getElementById('app'));

