import './index.css';
import { Link } from 'react-router-dom';
// import SignIn from "../SignIn/SignIn"
import Logo from '../img/EBD.svg'
import Git from '../img/git-icon.svg'
import SignUp from '../SignUp/SignUp';


const RegPage = () => {
  
// const github = ()=>{
//   console.log('>>>>>>');
//   fetch("http://localhost:3000/auth/github", 
//   {
//     method: 'GET',
//     credentials: 'include'
//   }
//   )
//   .then(res=>res.json())
//   .then(data=>console.log(data))
// }

  return (
    <div className="wrapper">
      <div className="bgImgSignUp">
        <div className="bgColor">
          <div className="inputMain">
            <div className="logoBlock">
              <img src={Logo} alt="logo" />
            </div>
            <div className="signForm">
              <div>
              <h1 className="hYellow"><span className="blueSymbols">{"<"}</span> Регистрация <span className="blueSymbols">{"/>"}</span></h1>
            <p className="pYellow">
            Для создания аккаунта заполните все поля.</p>
                  <div>
                  <SignUp />
                  </div>
                
              </div>
              <Link className="signButton" to="/SignIn">Войти</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RegPage;
