import './index.css';
// import raccoon from '../img/animals/raccoon.svg'
// import wolf from '../img/animals/wolf.svg'
// import fox from '../img/animals/fox.svg'
import git from '../img/git.svg'
import vk from '../img/vk.svg'
import linkedin from '../img/linkedin.svg'
import tg from '../img/tg.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const UserMenu = () => {

  const userInfo = useSelector(state => state.userInfo);

  return (
    <div className="userMenu">
      <div className="userButtons">
        <Link to="/:id/Edit">
          <button id="firstButton" className="purpleButton">РЕДАКТИРОВАТЬ</button>
        </Link>
        <button className="logoutButton">ВЫЙТИ</button>
      </div>
      <hr />
      <p><strong className="purpleColor">Телефон: </strong>{userInfo[0].tel && userInfo[0].tel}</p>
      <p><strong className="purpleColor">Почта: </strong>{userInfo[0].email && userInfo[0].email}</p>
      <p><strong className="purpleColor">Город: </strong>{userInfo[0].city && userInfo[0].city}</p>
      <br />
      <ul>
        <li><img className="social" src={linkedin} alt="linkedin" /></li>
        <li><img className="social" src={git} alt="git" /></li>
        <li><img className="social" src={tg} alt="tg" /></li>
        <li><img className="social" src={vk} alt="vk" /></li>
      </ul><br />
      <p><strong className="purpleColor">Группы: </strong></p>
      <ul>
        {
          userInfo[0].stydyGroup.length ? userInfo[0].stydyGroup.map((el) => (
            <li key={el._id}>{el.name}</li>
          )) :
            <li >Добавьте группу в которой учились</li>

        }
      </ul>
      <hr />
      {/* <p>Optional buttons (if it's your page):</p> */}
    </div>
  );
}

export default UserMenu;
