import * as c from '../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_FORM:
      return !state;
    default:
      return state;
    }
};