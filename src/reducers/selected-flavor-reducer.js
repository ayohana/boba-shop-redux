import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState, action) => {

  const { id } = action;

  switch (action.type) {
    case c.FLAVOR_DETAILS:
      const flavorSelected = {...state.masterFlavorList[id]};
      const newState = Object.assign(
        {},
        state, {
          selectedFlavor: flavorSelected
        }
      )
      return newState;

    default:
      return null;
  }
};