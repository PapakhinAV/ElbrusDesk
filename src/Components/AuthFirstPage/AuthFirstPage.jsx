import './index.css';
import { Link, useParams } from 'react-router-dom';
import SignIn from "../SignIn/SignIn"
import Logo from '../img/EBD.svg'
import Git from '../img/git-icon.svg'
// import Footer from '../Footer/Footer';
// import ModalAuth from '../ModalAuth/ModalAuth';

const AuthFirstPage = () => {
  return (
    <div className="wrapper">
      <div className="bgImg">
        <div className="bgColor">
          <div className="inputMain">
            <div className="logoBlock">
              <img src={Logo} alt="logo" />
            </div>
            <div className="signForm">
              <div>
                <h1 className="hYellow"><span className="blueSymbols">//</span> Вход <span className="blueSymbols">//</span></h1>
                <p className="pYellow">
                  Добро пожаловать!<br />
                  Для входа укажите свои учетные данные.</p>
                <div>
                  <SignIn />
                </div>
              </div>

              <Link className="signUpButton" to="/SignUp">Создать аккаунт</Link>
              <div className="regMain">
                <div>
                  <a href="http://localhost:3000/auth/github"><img src={Git} alt="git-icon" /></a>
                </div>
                <div>
                  <a href="http://localhost:3000/auth/google"><img src={Git} alt="git-icon" /></a>
                </div>
              </div>

              {/* <Link className="signButton" to="/SignUp">Создать аккаунт</Link>
          <ModalAuth /> */}
              {/* <a href="http://localhost:3000/auth/github"><img src={Git} alt="git-icon"/></a> */} -->
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthFirstPage;
