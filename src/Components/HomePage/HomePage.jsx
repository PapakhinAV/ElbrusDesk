import './index.css';
import UserMenu from "../UserMenu/UserMenu";
import Post from "../Post/Post"
import Wall from "../Wall/Wall"

import foto from '../img/volkov.jpg'
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
      <div className="userMainBlock">
        <div className="userWrap">
        <div className="leftColumn">
          <div className="fotoBlock"><img src={foto} alt="userPhoto"/></div>
          <div className="userName">
          <h1><span className="yellowSymbols">//</span> Волков Игорь <span className="yellowSymbols">//</span></h1>
          </div>
          <div className="userMenuBlock"><UserMenu /></div>
        </div>

        <div className="rightColumn">
          <div className="newPostBlock"><Post /></div>
          <div className="wallBlock"><Wall /></div>
        </div>
        </div>
      </div>
  );
}

export default HomePage;
