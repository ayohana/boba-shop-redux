import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.displayList, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_LIST:
      return !state;
    case c.HIDE_DISPLAY_LIST:
      return false;
    case c.RESET_BUTTON_TO_DEFAULT:
      return initialState.displayList;
    default:
      return state;
    }
};