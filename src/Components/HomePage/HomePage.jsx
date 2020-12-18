import './index.css';
import UserMenu from "../UserMenu/UserMenu";
import Post from "../Post/Post"
import Wall from "../Wall/Wall"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddUserID } from '../../Redux/actions/notes';


const HomePage = () => {
  const dispatch = useDispatch()

  const params = useParams()
  console.log(params);
  useEffect(() => {
    (() => {
      dispatch(AddUserID(params.id))

    })()
  }, [])
  return (
    <>

      <div className="MainBlock">

        <div className="leftColumn">
          <div className="fotoBlock">foto</div>
          <div className="userMenuBlock"><UserMenu /></div>
        </div>

        <div className="rightColumn">
          <div className="newPostBlock"><Post /></div>
          <div className="wallBlock"><Wall /></div>
        </div>

      </div>
    </>
  );
}

export default HomePage;
