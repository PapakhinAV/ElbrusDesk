import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddNewPost } from "../../Redux/actions/notes"
import axios from 'axios';
// import DragFilesPreview from '../DragFilesPreview/DragFilesPreview';
import './index.css';

const Post = () => {
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')

  const [file, setFile] = useState(''); // storing the uploaded file
  // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element


  const dispatch = useDispatch()
  const id = (useSelector((state) => state.id));

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(AddNewPost(postTitle.trim(), postText.trim(), id, file.name))
    setPostTitle('');
    setPostText('')
  }


  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0]; // accessing file
    console.log('!!!!!!!!!!!!!!!!!!!!!!', file);
    setFile(file); // storing file
  }

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios.post('http://localhost:3000/upload', formData, {
      onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
          ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        setProgess(progress);
      }
    }).then(res => {
      console.log('@@@@@@@@@@@@@@@@@@', res);
      getFile({
        name: res.data.name,
        path: 'http://localhost:3000' + res.data.path
      })
    }).catch(err => console.log(err))
  }

  return (
    <>
      <div className="userPostForm">
        <div className="formWrap">
          <form onSubmit={submitHandler} className="postForm">
            <div className="mb-3">
              <input onChange={(event) => setPostTitle(event.target.value)} value={postTitle} type="text" className="postTitle" placeholder="Заголовок" required />
            </div>
            <div className="mb-3">
              <textarea onChange={(event) => setPostText(event.target.value)} value={postText} className="postText" rows="5" placeholder="Хочу рассказать..." required />
            </div>
            <div className="mb-3 postButtons">
              {/* <DragFilesPreview /> */}
              <div className="file-upload">
              <input type="file" ref={el} onChange={handleChange} />
              {/* <div className="progessBar" style={{ width: progress }}>
          {progress}
        </div> */}
              </div>
              <button onClick={uploadFile} type="submit" className="purpleButton">ПОДЕЛИТЬСЯ</button>
              <hr />
        {/* {data.path && <img src={data.path} alt={data.name} />} */}

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Post;
