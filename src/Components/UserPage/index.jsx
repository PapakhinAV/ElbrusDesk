import './index.css';

import Wall from "../Wall/Wall"
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import UserMenuUserPage from './UserMenuUserPage';


const UserPage = () => {
  const {id} = useParams()

  const foto = 'https://pondokindahmall.co.id/assets/img/default.png'
  const userInfo = useSelector(state => state.users).filter(el=> el._id === id)

  // const userPageInfo = userInfo
  return (
    <div className="userMainBlock">
      <div className="userWrap">
        <div className="leftColumn">
          <div className="fotoBlock"><img src={(userInfo[0] && userInfo[0].avatar) ? userInfo[0].avatar : foto} alt="userPhoto" /></div>
          <div className="userName">
            {
              userInfo.length &&
              <h1><span className="yellowSymbols">//</span>{userInfo[0].firstname}  {userInfo[0].surname}<span className="yellowSymbols">//</span></h1>
            }
          </div>
          <div className="userMenuBlock"><UserMenuUserPage /></div>
        </div>

        <div className="rightColumn">
          
          <div className="wallBlock"><Wall /></div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
