import { combineReducers } from 'redux';
import GroupsReducer from './grousReducer';
import TechNewsReducer from './TechNewsReducer';

const rootReducer = combineReducers({
	news: TechNewsReducer,
	groups: GroupsReducer,
});

export default rootReducer;
