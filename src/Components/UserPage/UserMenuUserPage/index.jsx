import './index.css';
// import raccoon from '../img/animals/raccoon.svg'
// import wolf from '../img/animals/wolf.svg'
// import fox from '../img/animals/fox.svg'
import git from '../../img/git.svg'
import vk from '../../img/vk.svg'
import linkedin from '../../img/linkedin.svg'
import tg from '../../img/tg.svg'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const UserMenuUserPage = () => {
	const {id} = useParams()
  const userInfo = useSelector(state => state.users).filter(el=> el._id === id)
console.log(userInfo);
  return (
    <div className="userMenu">
      <hr />
		{userInfo[0] && (userInfo[0].tel && <p><strong className="purpleColor">Телефон: </strong>{userInfo[0].tel}</p>)}
    {userInfo[0] && (userInfo[0].email &&  <p><strong className="purpleColor">Почта: </strong>{userInfo[0].email}</p>)}
    {userInfo[0] && (userInfo[0].city &&  <p><strong className="purpleColor">Город: </strong>{userInfo[0].city}</p>)}
      <br />
      <ul>
			{userInfo[0] && (userInfo[0].linkidIn && <Link to={userInfo[0].linkidIn}><li><img className="social" src={linkedin} alt="linkedin" /></li>{userInfo[0].linkidIn}</Link>)}
			
			{userInfo[0] && (userInfo[0].gitHub && <Link to={userInfo[0].gitHub}><li><img className="social" src={git} alt="git" /></li>{userInfo[0].gitHub}</Link>)}
		
			{userInfo[0] && (userInfo[0].telegram && <Link to={userInfo[0].telegram}><li><img className="social" src={tg} alt="tg" /></li>{userInfo[0].telegram}</Link>)}
			
			{userInfo[0] && (userInfo[0].vk && <Link to={userInfo[0].vk}><li><img className="social" src={vk} alt="vk" /></li>{userInfo[0].vk}</Link>)}	
      </ul><br />
      <p><strong className="purpleColor">Группы: </strong></p>
      <ul>
        {
          (userInfo[0] && userInfo[0].stydyGroup.length) && userInfo[0].stydyGroup.map((el) => (
						<Link to={`/students_list_in_group/${el._id}`}><li key={el._id}>{el.name}</li></Link>
          )) 
        }
      </ul>
      <hr />
      {/* <p>Optional buttons (if it's your page):</p> */}
    </div>
  );
}

export default UserMenuUserPage;
