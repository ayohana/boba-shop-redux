import { combineReducers } from 'redux';
import announceReducer from './announce-reducer';
import displayFormReducer from './display-form-reducer';
import displayListReducer from './display-list-reducer';
import flavorListReducer from './flavor-list-reducer';
import selectedFlavorReducer from './selected-flavor-reducer';

const rootReducer = combineReducers({
  announce: announceReducer,
  displayForm: displayFormReducer,
  displayList: displayListReducer,
  masterFlavorList: flavorListReducer,
  selectedFlavor: selectedFlavorReducer
});

export default rootReducer;