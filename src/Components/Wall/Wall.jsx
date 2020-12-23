import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { UserPosts } from "../../Redux/actions/notes";
import { deletePost } from "../../Redux/actions/notes";

const WallUserPage = () => {

  const dispatch = useDispatch();
  function deleteUserPost(id) {
    dispatch(deletePost(id))
  }
  
  useEffect(() => {
    (() => {
      dispatch(UserPosts())
    })()
  }, [])
  
  const posts = useSelector((state) => state.allposts);



  return (
    <div className="wall">
      <div userPostDiv>
        {posts.map(el => (
          <div key={el._id}>
            {el.img && <img className="postImgs" src={el.img} alt='картинка' />}
            <p className="UserPostTitle">
              {el.title}
            </p>
            <p className="UserPostText">
              {el.text}
            </p>
            <p>{el._id}</p>
            <button type="button" onClick={() => { deleteUserPost(el._id) }}>УДАЛИТЬ</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WallUserPage;
