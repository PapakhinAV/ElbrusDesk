import { combineReducers } from 'redux';
import GroupsReducer from './grousReducer';
import TechNewsReducer from './TechNewsReducer';
import UsersListReducer from './usersListReducer';

const rootReducer = combineReducers({
	news: TechNewsReducer,
	groups: GroupsReducer,
	users: UsersListReducer,
});

export default rootReducer;
