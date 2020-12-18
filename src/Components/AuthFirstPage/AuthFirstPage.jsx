import './index.css';
import { Link } from 'react-router-dom';
import SignIn from "../SignIn/SignIn"
import Logo from '../img/EBD.svg'
import Git from '../img/git-icon.svg'


const AuthFirstPage = () => {
  
const github = ()=>{
  console.log('>>>>>>');
  fetch("http://localhost:3000/auth/github", 
  {
    method: 'GET',
    credentials: 'include'
  }
  )
  .then(res=>res.json())
  .then(data=>console.log(data))
}

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
              <h1 className="hYellow"><span className="blueSymbols">//</span> Вход <span className="blueSymbols">//</span></h1>
            <p className="pYellow">
                  Добро пожаловать!<br />
                  Для входа укажите свои учетные данные.</p>
                  <div>
                  <SignIn />
                  </div>
                
              </div>
              <Link className="signUpButton" to="/SignUp">Создать аккаунт</Link>
          <a href="http://localhost:3000/auth/github"><img src={Git} alt="git-icon"/></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthFirstPage;
