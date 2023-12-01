import { combineReducers } from 'redux';
import loadingReducer from './loading';
import viewReducer from './view';
import searchReducer from './search';

const rootReducer = combineReducers({
  loading: loadingReducer,
  view: viewReducer,
  search: searchReducer,
});

export default rootReducer;
