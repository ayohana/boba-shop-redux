import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case c.TOGGLE_DISPLAY_LIST:
      const newState = Object.assign(
        {},
        state, {
          displayList: !state.displayList
        }
      );
      return newState;
    default:
      return state;
    }
};