import createHistory from 'history/createBrowserHistory';
import { locationChanged } from './actions';
import * as actions from './actions';
import historyMiddleware from './middleware';

const history = (window.historyApi = createHistory());

function listenHistory(store) {
  store.dispatch(locationChanged(history.location, '@@INIT'));
  history.listen((location, action) => {
    store.dispatch(locationChanged(location, action));
  });
}

export { actions as historyActions, listenHistory, historyMiddleware };

export default history;
