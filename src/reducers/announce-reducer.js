import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.announce, action) => {

  const { isZeroServings } = action;

  switch (action.type) {
    case c.ANNOUNCE_OUT_OF_STOCK:
      const msg = "OUT OF STOCK. Please refill as soon as possible."
      return (isZeroServings) ? msg : "";
    default:
      return state;
    }
};