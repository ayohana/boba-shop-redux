import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.announce, action) => {

  const { isZeroServings, flavorName } = action;

  switch (action.type) {
    case c.ANNOUNCE_OUT_OF_STOCK:
      const msg = `${flavorName.toUpperCase()} OUT OF STOCK. Please refill as soon as possible.`;
      return (isZeroServings) ? msg : "";
    default:
      return state;
    }
};