import history from './index';
import {
  HYSTORY_PUSH,
  HYSTORY_REPLACE,
  HYSTORY_GO,
  HYSTORY_GO_BACK,
  HYSTORY_GO_FORWARD,
} from './constants';

export default function historyMiddleware() {
  return next => action => {
    switch (action.type) {
      case HYSTORY_PUSH:
        return history.push(action.payload.pathname, action.payload.state);

      case HYSTORY_REPLACE:
        return history.replace(action.payload.pathname, action.payload.state);

      case HYSTORY_GO:
        return history.go(action.payload);

      case HYSTORY_GO_BACK:
        return history.goBack();

      case HYSTORY_GO_FORWARD:
        return history.goForward();

      default:
        return next(action);
    }
  };
}
