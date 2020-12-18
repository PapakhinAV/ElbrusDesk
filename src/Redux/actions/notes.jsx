import * as TYPES from '../types/notes';
export const TechNewsReducer = (array) => ({

  type: TYPES.ADD_NEWS,
  payload: array,
});

export const ParceNews = () => async (dispatch, getState) => {
  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<");
  const response = await fetch("http://localhost:3000/parthNews")
  const result = await response.json();
  dispatch(TechNewsReducer(result))
  // console.log(result);



  //  axios('https://3dnews.ru/news');
  //  const result = response.data;
  // console.log(result);
  // dispatch(TechNewsReducer(result))
};

export const LoadGroups = (list) => ({
	type: TYPES.ADD_GROUPS,
  payload: list,
})

export const LoadGroupsFromBack = () => (dispatch, getState) => {
fetch(`${process.env.REACT_APP_URL}/groupslist`)
.then(res=> res.json())
.then(data=> dispatch(LoadGroups(data)))
}
