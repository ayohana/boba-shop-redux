import * as a from '../../actions/index';
import * as c from '../../actions/ActionTypes';
import { v4 } from 'uuid';

describe('help queue actions', () => {

  it('toggleDisplayForm should create TOGGLE_DISPLAY_FORM action', () => {
    expect(a.toggleDisplayForm()).toEqual({
      type: c.TOGGLE_DISPLAY_FORM
    });
  });

  it('toggleDisplayList should create TOGGLE_DISPLAY_LIST action', () => {
    expect(a.toggleDisplayList()).toEqual({
      type: c.TOGGLE_DISPLAY_LIST
    });
  });

  it('addOrUpdateFlavor should create ADD_OR_UPDATE_FLAVOR action', () => {
    const testId = v4();
    expect(a.addOrUpdateFlavor({
      name: "Mocha Milk Tea",
      category: "Coffee Milk Tea",
      brand: "Bossen",
      price: "10.95",
      weightPurchased: 2.2,
      servings: 50,
      id: testId
    })).toEqual({
      type: c.ADD_OR_UPDATE_FLAVOR,
      name: "Mocha Milk Tea",
      category: "Coffee Milk Tea",
      brand: "Bossen",
      price: "10.95",
      weightPurchased: 2.2,
      servings: 50,
      id: testId
    });
  });

});