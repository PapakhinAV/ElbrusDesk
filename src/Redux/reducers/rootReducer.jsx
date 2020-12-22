import { combineReducers } from 'redux';
import GroupsReducer from './grousReducer';
import TechNewsReducer from './TechNewsReducer';
import UsersListReducer from './usersListReducer';
import AddUserIDReduser from './AddUserIDReduser';
import UserPostsReducer from './UserPostsReducer';
import InforForAdminReducer from './InforForAdminReducer';
import AddUserInfoReducer from './AddUserInfoReducer';
import ShowAllPostsReducer from './ShowAllPostsReducer';
import AddElbrusStatus from './AddElbrusStatus';
// import NewPostReducer from './NewPostReducer';



const rootReducer = combineReducers({
  news: TechNewsReducer,
  groups: GroupsReducer,
  users: UsersListReducer,
  id: AddUserIDReduser,
	adminInfo: InforForAdminReducer,
  userInfo: AddUserInfoReducer,
  posts: UserPostsReducer,
  allposts: ShowAllPostsReducer,
  elbrusStatus: AddElbrusStatus,
  // newpost: NewPostReducer,
});

export default rootReducer;
