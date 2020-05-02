import * as c from '../actions/ActionTypes';
import initialState from '../initialState';

export default (state = initialState.masterFlavorList, action) => {

  const { name, category, brand, price, weightPurchased, servings, id } = action;

  switch (action.type) {
    case c.ADD_OR_UPDATE_FLAVOR:
      const newMasterFlavorList = Object.assign(
        {},
        state, {
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
      return newMasterFlavorList;

    case c.DELETE_FLAVOR:
      const updatedList = { ...state };
      delete updatedList[id];
      return updatedList;
    
    case c.DECREMENT_SERVINGS:
      const decrementedFlavor = Object.assign(
        {},
        state[id], {
          servings: (state[id].servings <= 0) ? 0 : state[id].servings - 1
        }
      );
      const decrementedList = Object.assign(
        {},
        state, {
          [id]: decrementedFlavor
        }
      )
      return decrementedList;

    default:
      return state;
  }
};