import * as a from '../../actions/index';
import * as c from '../../actions/ActionTypes';
import { v4 } from 'uuid';

describe('help queue actions', () => {

  const testId = v4();

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
    const newFlavorData = {
      name: "Mocha Milk Tea",
      category: "Coffee Milk Tea",
      brand: "Bossen",
      price: "10.95",
      weightPurchased: 2.2,
      servings: 50,
      id: testId
    };
    expect(a.addOrUpdateFlavor(newFlavorData)).toEqual({
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

  it('deleteFlavor should create DELETE_FLAVOR action', () => {
    expect(a.deleteFlavor(testId)).toEqual({
      type: c.DELETE_FLAVOR,
      id: testId
    });
  });

  it('selectFlavor should create FLAVOR_DETAILS action', () => {
    expect(a.selectFlavor(testId)).toEqual({
      type: c.FLAVOR_DETAILS,
      id: testId
    });
  });

  it('decrementServings should create DECREMENT_SERVINGS action', () => {
    expect(a.decrementServings(testId)).toEqual({
      type: c.DECREMENT_SERVINGS,
      id: testId
    });
  });

  it('announce should create ANNOUNCE_OUT_OF_STOCK action', () => {
    const zeroServingsTrue = true;
    expect(a.announce(zeroServingsTrue)).toEqual({
      type: c.ANNOUNCE_OUT_OF_STOCK,
      isZeroServings: zeroServingsTrue
    });
  });

});