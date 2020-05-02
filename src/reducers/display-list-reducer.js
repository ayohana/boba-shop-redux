import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.displayList, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_LIST:
      return !state;
    default:
      return state;
    }
};