import selectedFlavorReducer from '../../reducers/selected-flavor-reducer';
import * as c from '../../actions/ActionTypes';
import { v4 } from 'uuid';

describe("selectedFlavorReducer", () => {

  let action;
  const firstId = v4();
  const secondId = v4();

  const testList = {
    [firstId] : {
      name: "Black Milk Tea",
      category: "Milk Tea",
      brand: "GreenMax",
      price: "14.99",
      weightPurchased: 1.5,
      servings: 3,
      id: firstId
    },
    [secondId] :{
      name: "Banana Milk Tea",
      category: "Fruit Milk Tea",
      brand: "Bubble Tea Supply",
      price: "19.50",
      weightPurchased: 2.2,
      servings: 0,
      id: secondId
    }
  };

  test('Should return default state if no action type is recognized', () => {
    expect(selectedFlavorReducer(undefined, { type: null })).toEqual(null);
  });

  test('Should return the correct flavor object', () => {
    action = {
      type: c.FLAVOR_DETAILS,
      id: secondId,
      masterFlavorList: testList
    };
    const actual = selectedFlavorReducer(testList, action);
    const result = {
      name: "Banana Milk Tea",
      category: "Fruit Milk Tea",
      brand: "Bubble Tea Supply",
      price: "19.50",
      weightPurchased: 2.2,
      servings: 0,
      id: secondId
    };
    expect(actual).toEqual(result);
  });
});