import './index.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/EBD.svg'

import { useSelector } from 'react-redux';


const Header = () => {
  const user = useSelector(store => store.userInfo)
  const admin = useSelector(store => store.adminStatus)
  return (
    <>
      <div className="mainBlock">
        <div className="menuWrap">
          <div className="menuLogoBlock"><Link to="/Home"><img className="logoMenu" src={Logo} alt="logoMenu" /></Link></div>
          <nav className="header">
            {user && user ?
              (admin && admin ?
                <>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/AdminPage">Admin</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Home">Моя страница</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Project">О проекте</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/TechNews">Tech.News</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/groupslist">Com.Members</NavLink>
                  <Link to="/logout"><button className="yellowButton">ВЫЙТИ</button></Link>

                </>
                :
                <>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Home">Моя страница</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Project">О проекте</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/TechNews">Tech.News</NavLink>
                  <NavLink activeStyle={{ color: "#ffbc5b" }} to="/groupslist">Com.Members</NavLink>
                  {/* <NavLink activeStyle={{ color: "#ffbc5b" }} to="/logout"><ExitToAppRoundedIcon fontSize="large" /></NavLink> */}
                  <Link to="/logout"><button className="yellowButton">ВЫЙТИ</button></Link>
                </>)
              :
              <>
                <NavLink activeStyle={{ color: "#ffbc5b" }} to="/Project">О проекте</NavLink>
                <NavLink activeStyle={{ color: "#ffbc5b" }} to="/TechNews">Tech.News</NavLink>
              </>
            }
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
