import { combineReducers } from 'redux';
import GroupsReducer from './grousReducer';
import TechNewsReducer from './TechNewsReducer';
import UsersListReducer from './usersListReducer';
import AddUserIDReduser from './AddUserIDReduser';
import InforForAdminReducer from './InforForAdminReducer';




const rootReducer = combineReducers({
  news: TechNewsReducer,
  groups: GroupsReducer,
  users: UsersListReducer,
  id: AddUserIDReduser,
  adminInfo: InforForAdminReducer
});

export default rootReducer;
