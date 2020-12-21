import * as TYPES from '../types/notes';
// import dotenv from 'dotenv'
// dotenv.config()



export const TechNewsReducer = (array) => ({
	
  type: TYPES.ADD_NEWS,
  payload: array,
});

export const ParceNews = () => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/parthNews`)
  const result = await response.json();
  dispatch(TechNewsReducer(result))
};


//for loadGropuList
export const LoadGroups = (list) => ({
  type: TYPES.ADD_GROUPS,
  payload: list,
})

export const LoadGroupsFromBack = () => async (dispatch, getState) => {
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const response = await fetch(`${process.env.REACT_APP_URL}/groupslist`)
  const result = await response.json()
  dispatch(LoadGroups(result))
}

//for usersList in group
export const LoadUsersInGroup = (listUsers) => ({
  type: TYPES.ADD_USERS_LIST,
  payload: listUsers,
})

export const LoadUsersFromBack = (id) => (dispatch, getState) => {
  fetch(`${process.env.REACT_APP_URL}/students_list_in_group/${id}`)
    .then(res => res.json())
    .then(data => dispatch(LoadUsersInGroup(data)))
}

export const AddUserID = (id) => ({
  type: TYPES.ADD_USER_ID,
  payload: id,
})


//добавление информации для администратора

export const AdminInfoReducer = (object) => ({
  type: TYPES.ADD_INFO_FOR_ADMIN,
  payload: object,
});


export const AddInfoForAdmin = () => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/AddInfoForAdmin`)
  const result = await response.json()
  dispatch(AdminInfoReducer(result))
}


//добавление инфы юзера в профиль
export const LoadUserInfo = (userInfo) => ({
  type: TYPES.ADD_USER_INFO,
  payload: userInfo,
})

export const AddUserInfo = (id) => (dispatch, getState) => {
  fetch(`${process.env.REACT_APP_URL}/Home/${id}`)
    .then(res => res.json())
    .then(data => dispatch(LoadUserInfo(data)))
}
