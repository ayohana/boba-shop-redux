import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.selectedFlavor, action) => {

  const { id, masterFlavorList } = action;

  switch (action.type) {
    case c.FLAVOR_DETAILS:
      const flavorSelected = {...masterFlavorList[id]};
      return flavorSelected;
    default:
      return state;
  }
};