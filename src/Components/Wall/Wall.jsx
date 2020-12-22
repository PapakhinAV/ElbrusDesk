import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { UserPosts } from "../../Redux/actions/notes"
import { useParams } from 'react-router-dom';
// import Post from '../Post/Post'

const WallUserPage = () => {

  const dispatch = useDispatch();
  // const id = (useSelector((state) => state.id));
  const { id } = useParams()
  console.log(id);
  useEffect(() => {
    (() => {
      dispatch(UserPosts(id))
    })()
  }, [])

  const posts = (useSelector((state) => state.allposts));

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
