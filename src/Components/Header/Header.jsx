import './index.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/cd-icon.svg'
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { useSelector } from 'react-redux';


const Header = () => {
  const user = useSelector(store => store.userInfo)
  const admin = useSelector(store => store.adminStatus)
  return (
    <>
      <div className="mainBlock">
        <div className="menuWrap">
          <div className="menuLogoBlock"><img className="logoMenu" src={Logo} alt="logoMenu" /></div>
          <nav className="header">
            {user && user ?
              (admin && admin ?
                <>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Home">Моя страница</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Project">О проекте</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/TechNews">Tech.News</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/groups">Com.Members</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/checkin">Dev.Map</NavLink>
                  <NavLink className="rootButton" activeStyle={{ color: "#ffbc5b" }} to="/AdminPage">ROOT</NavLink>
                  <Link to="/logout"><button className="yellowButton">ВЫЙТИ</button></Link>

                </>
                :
                <>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Home">Моя страница</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Project">О проекте</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/TechNews">Tech.News</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/groups">Com.Members</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/checkin">Dev.Map</NavLink>
                  <Link to="/logout"><button className="yellowButton">ВЫЙТИ</button></Link>
                </>)
              :
              <>
                <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Project">О проекте</NavLink>
                <NavLink activeStyle={{ color: "#ffbc5b" }} to="/TechNews">Tech.News</NavLink>
                <NavLink className="yellowButton" activeStyle={{ color: "#ffbc5b" }} to="/Home">Вход</NavLink>
              </>
            }
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
