import {
  HYSTORY_PUSH,
  HYSTORY_REPLACE,
  HYSTORY_GO,
  HYSTORY_GO_BACK,
  HYSTORY_GO_FORWARD,
  LOCATION_CHANGED,
} from './constants';

export const push = (pathname, state) => ({
  type: HYSTORY_PUSH,
  payload: { pathname, state },
});

export const replace = (pathname, state) => ({
  type: HYSTORY_REPLACE,
  payload: { pathname, state },
});

export const go = index => ({
  type: HYSTORY_GO,
  payload: index,
});

export const goBack = () => ({
  type: HYSTORY_GO_BACK,
});

export const goForward = () => ({
  type: HYSTORY_GO_FORWARD,
});

export const locationChanged = (location, historyAction) => ({
  type: LOCATION_CHANGED,
  payload: { location, historyAction },
});
