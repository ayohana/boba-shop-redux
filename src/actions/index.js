import * as c from '../actions/ActionTypes';

export const toggleDisplayForm = () => ({
  type: c.TOGGLE_DISPLAY_FORM
});

export const toggleDisplayList = () => ({
  type: c.TOGGLE_DISPLAY_LIST
});

export const addOrUpdateFlavor = (flavor) => {
  const { name, category, brand, price, weightPurchased, servings, id } = flavor;
  return {
    type: c.ADD_OR_UPDATE_FLAVOR,
    name: name,
    category: category,
    brand: brand,
    price: price,
    weightPurchased: weightPurchased,
    servings: servings,
    id: id
  }
}