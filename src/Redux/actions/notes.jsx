import * as TYPES from '../types/notes';
import axios from "axios"

export const TechNewsReducer = (text) => ({
  type: TYPES.ADD_NEWS,
  payload: text,
});

export const ParceNews = () => async (dispatch, getState) => {
  console.log("<<<<<<<<<<<<<<<<<<<<<<<<<");
  // const response = await fetch("http://localhost:3000/parthNews", { method: "GET", credentials: "include" })
  // const result = await response.json();
  // console.log(result);



  //  axios('https://3dnews.ru/news');
  //  const result = response.data;
  // console.log(result);
  // dispatch(TechNewsReducer(result))
};

