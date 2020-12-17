import './index.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">1 page</Link>
    </nav>
  );
}

export default Header;
