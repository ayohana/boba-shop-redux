import rootReducer from '../../reducers/index';
import * as a from '../../actions/index';
import { v4 } from 'uuid';
import initialState from '../../initialState';
import { createStore } from 'redux';
import announceReducer from '../../reducers/announce-reducer';
import displayFormReducer from '../../reducers/display-form-reducer';
import displayListReducer from '../../reducers/display-list-reducer';
import flavorListReducer from '../../reducers/flavor-list-reducer';
import selectedFlavorReducer from '../../reducers/selected-flavor-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  let action;
  const copyListFromInitialState = {...initialState.masterFlavorList};
  const newTestId = v4();

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer(undefined, { type: null })).toEqual({
      announce: "",
      displayForm: false,
      displayList: true,
      masterFlavorList: copyListFromInitialState,
      selectedFlavor: null
    });
  });

  test('Check that initial state of announceReducer matches root reducer', () => {
    expect(store.getState().announce).toEqual(announceReducer(undefined, { type: null }));
  });

  test('Check that initial state of displayFormReducer matches root reducer', () => {
    expect(store.getState().displayForm).toEqual(displayFormReducer(undefined, { type: null }));
  });

  test('Check that initial state of displayListReducer matches root reducer', () => {
    expect(store.getState().displayList).toEqual(displayListReducer(undefined, { type: null }));
  });

  test('Check that initial state of flavorListReducer matches root reducer', () => {
    expect(store.getState().masterFlavorList).toEqual(flavorListReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectedFlavorReducer matches root reducer', () => {
    expect(store.getState().selectedFlavor).toEqual(selectedFlavorReducer(undefined, { type: null }));
  });

  test('When an action is dispatched, the state of announceReducer should match the root reducer', () => {
    const zeroServingsTrue = true;
    const flavorName = "Black Tea";
    action = a.announce(zeroServingsTrue, flavorName);
    store.dispatch(action);
    expect(store.getState().announce).toEqual(announceReducer(undefined, action));
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
      id: newTestId
    })
    store.dispatch(action);
    const actual = store.getState().masterFlavorList;
    const result = flavorListReducer(undefined, action);
    expect(actual).toEqual(result);
  });

  test('When an action is dispatched, the state of selectedFlavorReducer should match the root reducer', () => {
    const copyListFromStore = {...store.getState().masterFlavorList}
    action = a.selectFlavor(newTestId, copyListFromStore);
    store.dispatch(action);
    const actual = store.getState().selectedFlavor;
    const result = selectedFlavorReducer(copyListFromStore, action);
    expect(actual).toEqual(result);
  });
});