import './index.css';
import { Link } from 'react-router-dom';
import SignIn from "../SignIn/SignIn"


const AuthFirstPage = () => {
  return (
    <>
      <div className="inputMain">
        <div>img</div>
        <div className="input">
          <div>
            <SignIn />
          </div>
          <Link className="btn btn-danger button" to="/SignUp">SignUp</Link>
        </div>
      </div>


    </>
  );
}

export default AuthFirstPage;
