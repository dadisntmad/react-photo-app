import { combineReducers } from 'redux';
import modal from './modal';
import photos from './photos';

const rootReducer = combineReducers({
  photos,
  modal,
});

export default rootReducer;
