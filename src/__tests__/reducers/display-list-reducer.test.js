import displayListReducer from '../../reducers/display-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('displayListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(displayListReducer(undefined, { type: null })).toEqual(true);
  });

  test('Should toggle displayList state to true', () => {
    expect(displayListReducer(undefined, { type: c.TOGGLE_DISPLAY_LIST })).toEqual(false);
  });

  test('With action RESET_BUTTON_TO_DEFAULT, displayList should return to default state', () => {
    expect(displayListReducer(undefined, { type: c.RESET_BUTTON_TO_DEFAULT })).toEqual(true);
  });

});