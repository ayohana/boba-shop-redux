import displayListReducer from '../../reducers/display-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('displayListReducer', () => {

  const testState = {
    displayList: true
  };

  test('Should return default state if no action type is recognized', () => {
    expect(displayListReducer(true, { type: null })).toEqual(true);
  });

  test('Should toggle displayList state to true', () => {
    expect(displayListReducer(testState, { type: c.TOGGLE_DISPLAY_LIST }).displayList).toEqual(false);
  });

});