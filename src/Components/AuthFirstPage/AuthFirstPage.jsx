import './index.css';
import { Link } from 'react-router-dom';
import SignIn from "../SignIn/SignIn"
import Logo from '../img/EBD.svg'


const AuthFirstPage = () => {
  return (
    <div className="wrapper">
      <div className="bgImg">
        <div className="bgColor">
          <div className="inputMain">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div className="signInForm">
              <div>
                <SignIn />
              </div>
              <Link className="btn btn-danger button" to="/SignUp">SignUp</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthFirstPage;
