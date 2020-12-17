import { combineReducers } from 'redux';
import TechNewsReducer from './TechNewsReducer';

const rootReducer = combineReducers({
  news: TechNewsReducer,
});

export default rootReducer;
