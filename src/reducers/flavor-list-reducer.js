import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState, action) => {

  const { name, category, brand, price, weightPurchased, servings, id } = action;

  switch (action.type) {
    case c.ADD_OR_UPDATE_FLAVOR:
      const newMasterFlavorList = Object.assign(
        {},
        state.masterFlavorList, {
          [id] : {
            name: name,
            category: category,
            brand: brand,
            price: price,
            weightPurchased: weightPurchased,
            servings: servings,
            id: id
          }
        }
      );
      const newState = Object.assign(
        {},
        state, {
          masterFlavorList: newMasterFlavorList
        }
      );
      return newState;

    case c.DELETE_FLAVOR:
      const updatedMasterFlavorList = { ...state.masterFlavorList };
      delete updatedMasterFlavorList[id];
      const updatedState = Object.assign(
        {},
        state, {
          masterFlavorList: updatedMasterFlavorList
        }
      );
      return updatedState;

    default:
      return state;
  }
};