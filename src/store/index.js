import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { listenHistory, historyMiddleware } from './history';
import rootReducer from './reducers/root-reducer';

const logger = createLogger({ collapsed: true, duration: true, diff: true });

const store = (window.store = createStore(
  rootReducer,
  applyMiddleware(historyMiddleware, thunk, logger)
));

if (module.hot) {
  module.hot.accept('./reducers/root-reducer', () => {
    const nextRootReducer = require('./reducers/root-reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

listenHistory(store);

export default store;
