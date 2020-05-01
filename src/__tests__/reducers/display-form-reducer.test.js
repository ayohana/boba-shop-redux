import displayFormReducer from '../../reducers/display-form-reducer';
import * as c from '../../actions/ActionTypes';

describe('displayFormReducer', () => {

  const testState = {
    displayForm: false
  };

  test('Should return default state if no action type is recognized', () => {
    expect(displayFormReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle displayForm state to true', () => {
    expect(displayFormReducer(testState, { type: c.TOGGLE_DISPLAY_FORM }).displayForm).toEqual(true);
  });

});