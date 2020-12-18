import * as TYPES from '../types/notes';
import dotenv from 'dotenv'
dotenv.config()

export const TechNewsReducer = (array) => ({
	
  type: TYPES.ADD_NEWS,
  payload: array,
});

export const ParceNews = () => async (dispatch, getState) => {
  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<");
  const response = await fetch("http://localhost:3000/parthNews")
  const result = await response.json();
  dispatch(TechNewsReducer(result))
};


//for loadGropuList
export const LoadGroups = (list) => ({
  type: TYPES.ADD_GROUPS,
  payload: list,
})

export const LoadGroupsFromBack = () => (dispatch, getState) => {
  fetch(`${process.env.REACT_APP_URL}/groupslist`)
    .then(res => res.json())
    .then(data => dispatch(LoadGroups(data)))
}

//for usersList in group
export const LoadUsersInGroup = (listUsers) => ({
	type: TYPES.ADD_USERS_LIST,
  payload: listUsers,
})

export const LoadUsersFromBack = (id) => (dispatch, getState) => {
fetch(`${process.env.REACT_APP_URL}/students_list_in_group/${id}`)
.then(res=> res.json())
.then(data=> dispatch(LoadUsersInGroup(data)))
}
