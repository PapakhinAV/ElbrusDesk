import './index.css';
// import raccoon from '../img/animals/raccoon.svg'
// import wolf from '../img/animals/wolf.svg'
// import fox from '../img/animals/fox.svg'
import git from '../img/git.svg'
import vk from '../img/vk.svg'
import linkedin from '../img/linkedin.svg'
import tg from '../img/tg.svg'
import { Link } from 'react-router-dom';


const UserMenu = () => {
  return (
    <div className="userMenu">
      <div className="userButtons">
        <Link to="/Edit">
      <button id="firstButton" className="purpleButton">РЕДАКТИРОВАТЬ</button>
      </Link>
      <button className="logoutButton">ВЫЙТИ</button>
      </div>
      <hr />
      <p><strong className="purpleColor">Телефон: </strong>+7-963-718-77-33</p>
      <p><strong className="purpleColor">Почта: </strong>info@viil.ru</p>
      <p><strong className="purpleColor">Город: </strong>Москва</p><br />
      <ul>
        <li><img className="social" src={linkedin} alt="linkedin"/></li>
        <li><img className="social" src={git} alt="git"/></li>
        <li><img className="social" src={tg} alt="tg"/></li>
        <li><img className="social" src={vk} alt="vk"/></li>
      </ul><br />
      <p><strong className="purpleColor">Группы: </strong></p>
      <ul>
        <li>Еноты</li>
        <li>Волки</li>
        <li>Лисы</li>
      </ul>
      <hr />
      {/* <p>Optional buttons (if it's your page):</p> */}
    </div>
  );
}

export default UserMenu;
