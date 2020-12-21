import './index.css';
// import TechNews from "../TechNews/TechNews"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { UserPosts } from "../../Redux/actions/notes"
import Post from '../Post/Post'

const Wall = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(UserPosts())
    })()
  }, [])

  const store = useSelector((state) => state.posts);
  console.log("store", store);


  return (
    <div className="wall">
      <div userPostDiv>
        {store.map(el => (
          <p key={el.id}>
            <img className="postImgs" src={el.img} alt='картинка' />
            <p className="UserPostTitle">
              {el.title}
            </p>
            <p className="UserPostText">
              {el.text}
            </p>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Wall;
