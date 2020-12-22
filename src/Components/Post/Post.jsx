import { useState } from "react"
import { useDispatch } from "react-redux"
// import { NewPost } from "../../Redux/actions/notes"
import { AddNewPost } from "../../Redux/actions/notes"
import DragFilesPreview from '../DragFilesPreview/DragFilesPreview';
// import * as TYPES from '../../Redux/types/notes';
import './index.css';

const Post = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(AddNewPost(postTitle.trim(), postText.trim()))
    setPostTitle('');
    setPostText('')
  }

  return (
    <>
      <div className="userPostForm">
        <div className="formWrap">
          <form onSubmit={submitHandler} className="postForm">
            <div className="mb-3">
              <input onChange={(event) => setPostTitle(event.target.value)} value={postTitle} type="text" className="postTitle" placeholder="Заголовок" />
            </div>
            <div className="mb-3">
              <textarea onChange={(event) => setPostText(event.target.value)} value={postText} className="postText" rows="3" placeholder="Хочу рассказать..." />
            </div>
            <div className="mb-3 postButtons">
              <DragFilesPreview />
              <button type="submit" className="purpleButton">ПОДЕЛИТЬСЯ</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Post;
