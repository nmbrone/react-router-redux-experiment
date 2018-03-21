import { LOCATION_CHANGED } from './constants';

export default function location(state = {}, action) {
  switch (action.type) {
    case LOCATION_CHANGED:
      return action.payload.location;

    default:
      return state;
  }
}
