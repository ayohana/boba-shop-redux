import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.displayForm, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_FORM:
      return !state;
    default:
      return state;
    }
};