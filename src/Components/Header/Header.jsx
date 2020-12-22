import './index.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/EBD.svg'
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

const Header = () => {
  return (
    <>
      <div className="mainBlock">
        <div className="menuWrap">
          <div className="menuLogoBlock"><Link to="/Home"><img className="logoMenu" src={Logo} alt="logoMenu" /></Link></div>
          <nav className="header">
            {/* <NavLink activeStyle={{color: "#ffbc5b"}} to="/">Temp NavLink</NavLink> */}
            <NavLink activeStyle={{color: "#ffbc5b"}} to="/Home">Моя страница</NavLink>
            <NavLink activeStyle={{color: "#ffbc5b"}} to="/Project">О проекте</NavLink>
            {/* <NavLink activeStyle={{color: "#ffbc5b"}} to="/">Выпускники</NavLink> */}
            <NavLink activeStyle={{color: "#ffbc5b"}} to="/groupslist">Эльбрусовцы</NavLink>
            <NavLink activeStyle={{color: "#ffbc5b"}} to="/TechNews">Tech.News</NavLink>
            <NavLink activeStyle={{color: "#ffbc5b"}} to="/logout"><ExitToAppRoundedIcon fontSize="large"/></NavLink>
          </nav>
        </div>

      </div>
    </>

  );
}

export default Header;
