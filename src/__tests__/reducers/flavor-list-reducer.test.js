import flavorListReducer from '../../reducers/flavor-list-reducer';
import * as c from '../../actions/ActionTypes';
import { v4 } from 'uuid';
import initialState from '../../initialState';

describe('flavorListReducer', () => {

  let action;
  const firstId = v4();
  const secondId = v4();
  const thirdId = v4();

  const newFlavorData = {
    name: "Mocha Milk Tea",
    category: "Coffee Milk Tea",
    brand: "Bossen",
    price: "10.95",
    weightPurchased: 2.2,
    servings: 50,
    id: thirdId
  }

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
    expect(flavorListReducer(undefined, { type: null })).toEqual(initialState.masterFlavorList);
  });

  test('Should return empty object if an empty object is passed in as an argument of state', () => {
    expect(flavorListReducer({}, { type: null })).toEqual({});
  });

  test('Should return testList if a testList is passed in as an argument of state', () => {
    expect(flavorListReducer(testList, { type: null })).toEqual(testList);
  });

  test('Should successfully add newFlavorData to testList', () => {
    const { name, category, brand, price, weightPurchased, servings, id } = newFlavorData;
    action = {
      type: c.ADD_OR_UPDATE_FLAVOR,
      name: name,
      category: category,
      brand: brand,
      price: price,
      weightPurchased: weightPurchased,
      servings: servings,
      id: id
    };

    const actual = flavorListReducer(testList, action);

    const result = {
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
      },
      [thirdId] : {
        name: "Mocha Milk Tea",
        category: "Coffee Milk Tea",
        brand: "Bossen",
        price: "10.95",
        weightPurchased: 2.2,
        servings: 50,
        id: thirdId
      }
    };
    expect(actual).toEqual(result);
  });

  test('Should successfully update an existing data using ADD_OR_UPDATE_FLAVOR action', () => {
    action = {
      type: c.ADD_OR_UPDATE_FLAVOR,
      name: "Green Tea",
      category: "Fresh Tea",
      brand: "ITOEN",
      price: "25.89",
      weightPurchased: 2.2,
      servings: 25,
      id: firstId
    };

    const actual = flavorListReducer(testList, action);

    const result = {
      [firstId] : {
        name: "Green Tea",
        category: "Fresh Tea",
        brand: "ITOEN",
        price: "25.89",
        weightPurchased: 2.2,
        servings: 25,
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
    expect(actual).toEqual(result);
  });

  test('Should successfully delete a flavor', () => {
    action = {
      type: c.DELETE_FLAVOR,
      id: firstId
    };

    const actual = flavorListReducer(testList, action);

    const result = {
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
    expect(actual).toEqual(result);
  });

  test('Should decrement number of servings for a specific flavor using DECREMENT_SERVINGS', () => {
    action = {
      type: c.DECREMENT_SERVINGS,
      id: firstId
    };
    const actual = flavorListReducer(testList, action)[firstId].servings;
    const result = 2;
    expect(actual).toEqual(result);
  });

  test('Decrementing a serving of 0 should stay at 0', () => {
    action = {
      type: c.DECREMENT_SERVINGS,
      id: secondId
    };
    const actual = flavorListReducer(testList, action)[secondId].servings;
    const result = 0;
    expect(actual).toEqual(result);
  });

});