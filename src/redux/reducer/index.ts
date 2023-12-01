import { combineReducers } from 'redux';
import loadingReducer from './loading';
import viewReducer from './view';

const rootReducer = combineReducers({
  loading: loadingReducer,
  view: viewReducer,
});

export default rootReducer;
