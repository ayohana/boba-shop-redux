import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.displayForm, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_FORM:
      return !state;
    case c.HIDE_DISPLAY_FORM:
      return false;
    case c.RESET_BUTTON_TO_DEFAULT:
      return initialState.displayForm;
    default:
      return state;
    }
};