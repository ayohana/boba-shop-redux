import displayFormReducer from '../../reducers/display-form-reducer';
import * as c from '../../actions/ActionTypes';

describe('displayFormReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(displayFormReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle displayForm state to true', () => {
    expect(displayFormReducer(false, { type: c.TOGGLE_DISPLAY_FORM })).toEqual(true);
  });

});