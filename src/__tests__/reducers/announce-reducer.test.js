import announceReducer from '../../reducers/announce-reducer';
import * as c from '../../actions/ActionTypes';

describe('announceReducer', () => {
  
  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(announceReducer(undefined, { type: null })).toEqual("");
  });

  test('Decrementing a serving of 0 should announce the correct message', () => {
    const zeroServingsTrue = true;
    const flavorName = "Black Tea";
    action = {
      type: c.ANNOUNCE_OUT_OF_STOCK,
      isZeroServings: zeroServingsTrue,
      flavorName: flavorName
    };
    const actual = announceReducer(undefined, action);
    const result = "BLACK TEA OUT OF STOCK. Please refill as soon as possible.";
    expect(actual).toEqual(result);
  });
});