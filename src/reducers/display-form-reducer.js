import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_FORM:
      const newState = Object.assign(
        {},
        state, {
          displayForm: !state.displayForm
        }
      );
      return newState;
    default:
      return state;
    }
};