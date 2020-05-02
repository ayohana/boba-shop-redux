import displayFormReducer from '../../reducers/display-form-reducer';
import * as c from '../../actions/ActionTypes';

describe('displayFormReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(displayFormReducer(undefined, { type: null })).toEqual(false);
  });

  test('Should toggle displayForm state to true', () => {
    expect(displayFormReducer(undefined, { type: c.TOGGLE_DISPLAY_FORM })).toEqual(true);
  });

  test('With action RESET_BUTTON_TO_DEFAULT, displayForm should return to default state', () => {
    expect(displayFormReducer(undefined, { type: c.RESET_BUTTON_TO_DEFAULT })).toEqual(false);
  });

});