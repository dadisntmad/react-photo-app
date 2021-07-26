import {combineReducers} from 'redux';
import modal from './modal';
import photos from './photos';

const rootReducer = combineReducers({
  photos,
  modal,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
