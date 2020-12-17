import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="mainBlock">
        <nav className="header">
          <Link to="/">Temp link</Link>
          <Link to="/Home">Temp Home</Link>
          <Link to="/">О проекте</Link>
          <Link to="/">Выпускники</Link>
          <Link to="/">Тех новости</Link>
        </nav>
      </div>
      <hr />
    </>

  );
}

export default Header;
