import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { UserPosts } from "../../Redux/actions/notes"
// import Post from '../Post/Post'

const WallUserPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(UserPosts())
    })()
  }, [])

  const posts = useSelector((state) => state.allposts);

  // const posts = [
  //   {
  //     title: 'fkdjfklsdjkfjds',
  //     text: 'jfkcdshjkhdsjhfjkdshfjksd'
  //   }
  // ]

  return (
    <div className="wall">
      <div userPostDiv>
        {posts.map(el => (
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

export default WallUserPage;
