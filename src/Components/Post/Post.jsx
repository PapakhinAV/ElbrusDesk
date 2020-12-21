import DragFilesPreview from '../DragFilesPreview/DragFilesPreview';
import './index.css';

const Post = () => {
  return (
    <>
      <div className="userPostForm">
        <div className="formWrap">
        <form className="postForm">
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
