import { combineReducers } from 'redux';
import GroupsReducer from './grousReducer';
import TechNewsReducer from './TechNewsReducer';
import UsersListReducer from './usersListReducer';
import AddUserIDReduser from './AddUserIDReduser';
import UserPostsReducer from './UserPostsReducer';
import InforForAdminReducer from './InforForAdminReducer';
import AddUserInfoReducer from './AddUserInfoReducer';


const rootReducer = combineReducers({
  news: TechNewsReducer,
  groups: GroupsReducer,
  users: UsersListReducer,
  id: AddUserIDReduser,
  posts: UserPostsReducer,
	adminInfo: InforForAdminReducer,
	userInfo: AddUserInfoReducer,

});

export default rootReducer;
