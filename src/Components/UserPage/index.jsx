import './index.css';

import Wall from "../Wall/Wall"
import { useHistory, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import UserMenuUserPage from './UserMenuUserPage';
import Loader from '../Loader';
import { useEffect } from 'react';
import { LoadUserPage } from '../../Redux/actions/notes';


const UserPage = () => {
  const history = useHistory()
  const { id } = useParams()
  const curentUser = useSelector(state => state.id)
  if (id === curentUser) { history.push(`/Home/${curentUser}`) }


  const dispatch = useDispatch()

  useEffect(() => {
    (() => {
      dispatch(LoadUserPage(id))
    })()
  }, [])

  const foto = 'https://pl4324260.e-naturessunshine.com/images/img-profile.png'
  const userInfo = useSelector(state => state.userPage)
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(userInfo);
  return (
    <div className="userMainBlock">
      { userInfo[0] ?
        <div className="userWrap">
          <div className="leftColumn">

            <div className="fotoBlock"><img src={userInfo[0].img ? `/userPic/${userInfo[0].img}` : foto} alt="userPhoto" /></div>

            <div className="userName">
              {
                userInfo.length &&
                <h1><span className="yellowSymbols">{'//'}{' '}</span>{userInfo[0].firstname}{' '}{userInfo[0].surname}<span className="yellowSymbols">{' '}{'//'}</span></h1>
              }
            </div>
            <div className="userMenuBlock"><UserMenuUserPage userInfo={userInfo} /></div>
=======
// console.log(userInfo);
  return (
    <div className="userMainBlock">
		{ userInfo[0] ? 
      <div className="userWrap">
        <div className="leftColumn">

        {/* <div className="fotoBlock"><img src={userInfo[0].img ? `/userPic/${userInfo[0].img}` : foto} alt="userPhoto" /></div> */}
        {<div style={(userInfo[0].img && { background: `url(/userPic/${userInfo[0].img})` }) ? { background: `url(/userPic/${userInfo[0].img})` } : { background: `url(${foto})` }} className="userAvatar" />}
          <div className="userName">
            {
              userInfo.length &&
              <h1><span className="yellowSymbols">{'//'}{' '}</span>{userInfo[0].firstname}<br/>{userInfo[0].surname}<span className="yellowSymbols">{' '}{'//'}</span></h1>
            }
>>>>>>> eed3140527340537639ebd5ee6bd07f9ad97fedb
=======

  return (
    <div className="userMainBlock">
      { userInfo[0] && userInfo[0]._id === id ?
        <div className="userWrap">
          <div className="leftColumn">

            {<div style={(userInfo[0].img && { background: `url(/userPic/${userInfo[0].img})` }) ? { background: `url(/userPic/${userInfo[0].img})` } : { background: `url(${foto})` }} className="userAvatar" />}
            <div className="userName">
              {
                userInfo.length &&
                <h1><span className="yellowSymbols">{'//'}{' '}</span>{userInfo[0].firstname}<br />{userInfo[0].surname}<span className="yellowSymbols">{' '}{'//'}</span></h1>
              }
            </div>
            <div className="userMenuBlock"><UserMenuUserPage userInfo={userInfo} /></div>
>>>>>>> 9ded6f716ecd64424ba57f45a09ff68d69aa0acc
          </div>

          <div className="rightColumn">

            <div className="wallBlock"><Wall /></div>
          </div>
        </div> :
        <Loader />
      }
    </div>
  );
}

export default UserPage;
