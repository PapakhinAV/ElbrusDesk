import './index.css';
import UserMenu from "../UserMenu/UserMenu";
import Post from "../Post/Post"
import Wall from "../Wall/Wall"

// import foto from '../img/volkov.jpg'
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUserID, AddUserInfo, LoadStatusElbrus } from '../../Redux/actions/notes';
import AddFiles from '../AddFiles/AddFiles';


const HomePage = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const history = useHistory();


  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/Homee/${params.id}`)
      if (response.status === 200) {
        dispatch(LoadStatusElbrus(true))
        dispatch(AddUserID(params.id))
        dispatch(AddUserInfo(params.id))
      } else {
        history.push('/')
      }
    })()
  }, [])

  const foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  const userInfo = useSelector(state => state.userInfo)
  return (
    <div className="userMainBlock">
      <div className="userWrap">
        <div className="leftColumn">
          <div className="fotoBlock"><img src={userInfo[0] ? `/userPic/${userInfo[0].img}` : foto} alt="userPhoto" /></div>
          <div className="userName">
            {
              userInfo.length &&
              <h1><span className="yellowSymbols">{'//'}{' '}</span>{userInfo[0].firstname}{' '}{userInfo[0].surname}<span className="yellowSymbols">{' '}{'//'}</span></h1>
            }
          </div>
          <div className="userMenuBlock"><UserMenu /></div>
        </div>

        <div className="rightColumn">
          {/* <AddFiles /> */}


          <div className="newPostBlock"><Post /></div>
          <div className="wallBlock"><Wall /></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
