import rootReducer from '../../reducers/index';
import * as a from '../../actions/index';
import { v4 } from 'uuid';
import initialState from '../../initialState';
import { createStore } from 'redux';
import displayFormReducer from '../../reducers/display-form-reducer';
import displayListReducer from '../../reducers/display-list-reducer';
import flavorListReducer from '../../reducers/flavor-list-reducer';
import selectedFlavorReducer from '../../reducers/selected-flavor-reducer';

let store = createStore(rootReducer);

describe.skip("rootReducer", () => {

  let action;
  const firstId = v4();
  const secondId = v4();

  // TEST DEFAULT STATE WITH SEEDED DATA
  const testState = {
    selectedFlavor: null,
    masterFlavorList: {
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
        servings: 10,
        id: secondId
      }
    }
  };

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      displayForm: initialState.displayForm,
      displayList: initialState.displayList,
      masterFlavorList: initialState.masterFlavorList,
      selectedFlavor: initialState.selectedFlavor
    });
  });

  test('Check that initial state of displayFormReducer matches root reducer', () => {
    expect(store.getState().displayForm).toEqual(displayFormReducer(undefined, { type: null }));
  });

  test('Check that initial state of displayListReducer matches root reducer', () => {
    expect(store.getState().displayList).toEqual(displayListReducer(undefined, { type: null }));
  });

  test('When an action is dispatched, the state of displayFormReducer should match the root reducer', () => {
    action = a.toggleDisplayForm();
    store.dispatch(action);
    expect(store.getState().displayForm).toEqual(displayFormReducer(undefined, action));
  });

  test('When an action is dispatched, the state of displayListReducer should match the root reducer', () => {
    action = a.toggleDisplayList();
    store.dispatch(action);
    expect(store.getState().displayList).toEqual(displayListReducer(undefined, action));
  });

  test('When an action is dispatched, the state of flavorListReducer should match the root reducer', () => {
    action = a.addOrUpdateFlavor({
      name: "Mocha Milk Tea",
      category: "Coffee Milk Tea",
      brand: "Bossen",
      price: "10.95",
      weightPurchased: 2.2,
      servings: 50,
      id: v4()
    })
    store.dispatch(action);
    expect(store.getState().masterFlavorList).toEqual(flavorListReducer(undefined, action));
  });

  test.todo('When an action is dispatched, the state of selectedFlavorReducer should match the root reducer');

});