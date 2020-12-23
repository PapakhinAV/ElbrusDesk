
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
export const LoadStatusElbrus = (stat) => ({
  type: TYPES.ADD_STATUS,
  payload: stat,
})

export const LoadStatusAdmin = (stat) => ({
  type: TYPES.ADD_STATUS_ADMIN,
  payload: stat,
})

export const LoadGroupsFromBack = () => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/groupslist`)
  console.log(response.status);
  if (response.status === 401) {
    dispatch(LoadGroups([]))
    dispatch(LoadStatusElbrus(false))
  } else {
    dispatch(LoadStatusElbrus(true))
    const result = await response.json()
    dispatch(LoadGroups(result))
  }
}

//for usersList in group
export const LoadUsersInGroup = (listUsers) => ({
  type: TYPES.ADD_USERS_LIST,
  payload: listUsers,
})

export const LoadUsersFromBack = (id) => (dispatch, getState) => {
  dispatch(LoadUsersInGroup([]))
  setTimeout(() => {
    fetch(`${process.env.REACT_APP_URL}/students_list_in_group/${id}`)
      .then(res => res.json())
      .then(data => dispatch(LoadUsersInGroup(data)))
  }, 500);
}

export const AddUserID = (id) => ({
  type: TYPES.ADD_USER_ID,
  payload: id,
})

export const DeleteUserID = (id) => ({
  type: TYPES.DELETE_USER_ID,
  payload: id
})

export const ShowAllPostsReducer = (posts) => ({
  type: TYPES.SHOW_ALL_POSTS,
  payload: posts,
})

export const UserPosts = (id) => async (dispatch, getState) => {
  dispatch(ShowAllPostsReducer([]))
  setTimeout(async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/postlist/${id}`)
    const result = await response.json();
    result.reverse()
    console.log(result);
    dispatch(ShowAllPostsReducer(result))
  }, 500);
};

// Удаление постов
export const deletePostReducer = (id) => ({
  type: TYPES.DELETE_POST,
  payload: id,
});

export const deletePost = (id) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/deletePost/${id}`)
  if (response.status === 200) {
    dispatch(deletePostReducer(id))
  }
}


export const NewPost = (newpost) => ({
  type: TYPES.ADD_NEW_POST,
  payload: newpost
})

export const AddNewPost = (title, text, img, id) => async (dispatch, getState) => {
  const response = await fetch(`/newpost/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, text, img })
  })
  const _id = await response.json()
  if (response.status === 200) {
    dispatch(NewPost({ title, text, img, _id }))
  }

}

//добавление информации для администратора

export const AdminInfoReducer = (object) => ({
  type: TYPES.ADD_INFO_FOR_ADMIN,
  payload: object,
});

export const AddInfoForAdmin = () => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/AddInfoForAdmin`)
  const result = await response.json()
  if (result.admin === true) {
    dispatch(AdminInfoReducer(result))
    dispatch(LoadStatusAdmin(true))
  } else {
    dispatch(LoadStatusAdmin(false))
  }
}

// Удаление пользователя
export const deleteUserReducer = (id) => ({
  type: TYPES.DELETE_USER,
  payload: id,
});

export const deleteUser = (id) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/deleteUser/${id}`)
  if (response.status === 200) {
    dispatch(deleteUserReducer(id))
  }
}

//добавление инфы юзера в профиль
export const LoadUserInfo = (userInfo) => ({
  type: TYPES.ADD_USER_INFO,
  payload: userInfo,
})

//Данную логику можно реализовать в компоненте HomePage на 23 24 строке
export const AddUserInfo = (id) => (dispatch, getState) => {
  fetch(`${process.env.REACT_APP_URL}/Homee/${id}`)
    .then(res => res.json())
    .then(data => dispatch(LoadUserInfo(data)))
}

//Добавление группы
export const addNewGroup = (newGroup) => async (dispatch, getState) => {
  await fetch('/addNewGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newGroup)
  });
}

// Удаление Группы
export const deleteGrouReducer = (id) => ({
  type: TYPES.DELETE_GROUP,
  payload: id,
});


export const deleteGroup = (id) => async (dispatch, getState) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/deleteGroup/${id}`)
  if (response.status === 200) {
    dispatch(deleteGrouReducer(id))
  }
}

//Редактирование (сохранение группы)

export const editGroup = ({ newGroup, id }) => async (dispatch, getState) => {
  await fetch('/editGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newGroup, id })
  });
}
