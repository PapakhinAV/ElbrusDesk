import { useState } from "react"
import { useDispatch } from "react-redux"
import { NewPost } from "../../Redux/actions/notes"
import DragFilesPreview from '../DragFilesPreview/DragFilesPreview';
import * as TYPES from '../../Redux/types/notes';
import './index.css';

const Post = ({ title, text, img }) => {

  // const [value, setValue] = useState('')

  // const dispatch = useDispatch()

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if(value.trim()) {
  //     dispatch(NewPost(value.trim()))
  //     setValue('')
  //   }
  // }

  
  const dispatch = useDispatch();
  function addNewPost(event) {
    event.preventDefault();

    dispatch({
      type: TYPES.ADD_NEW_POST, payload: {
        title: event.target.title,
        text: event.target.text,
      }
    });
  }

  return (
    <>
      <div className="userPostForm">
        <div className="formWrap">
        <form onSubmit={addNewPost} className="postForm">
          <div className="mb-3">
            <input type="text" className="postTitle" placeholder="Заголовок" />
          </div>
          <div className="mb-3">
            <textarea className="postText" rows="3" placeholder="Хочу рассказать..." />
          </div>
          <div className="mb-3 postButtons">
            {/* <input className="formFiles" type="file" id="formFile" multiple="multiple" /> */}
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
