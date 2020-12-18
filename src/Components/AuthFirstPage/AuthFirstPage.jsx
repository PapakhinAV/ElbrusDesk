import './index.css';
import { Link } from 'react-router-dom';
import SignIn from "../SignIn/SignIn"
import Logo from '../img/EBD.svg'


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
                <SignIn />
              </div>
              <Link className="btn btn-danger button" to="/SignUp">SignUp</Link>
            </div>
          </div>

          <Link className="btn btn-danger button" to="/SignUp">SignUp</Link>
          <a className="btn btn-primary" href="http://localhost:3000/auth/github">GIT_HUB</a>
          {/* <button onClick={github} type="button" className="btn btn-primary">GIT_HUB</button> */}

        </div>
      </div>
    </div>
  );
}

export default AuthFirstPage;
