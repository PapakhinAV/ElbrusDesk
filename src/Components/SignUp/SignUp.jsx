import './index.css';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {

  const history = useHistory();

  useEffect(() => {
    (async () => {
      let res = await fetch("http://localhost:3000/user/signup", {
        method: 'GET',
        credentials: 'include'
      })
      if (res.status === 401) {
        history.push('/main/questions')
      }
    })()
  }, [])

  const [inputs, setInputs] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    tel: ''
  });

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        surname,
        email,
        password,
        tel
      }),
      credentials: 'include'
    });

    if (response.status === 401) {

      history.push('/user/signin')

    }
  }


  function handlerChange({ target: { name, value } }) {
    setInputs({
      ...inputs, [name]: value,
    })
  }

  const { firstname, surname, email, password, tel } = inputs;

  return (
    <div className="blockMain">
      <form onSubmit={handlerSubmit} className="mainFormBlock">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={handlerChange} type="email" name="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">

          <label htmlFor="firstname" className="form-label">FirstName</label>
          <input onChange={handlerChange} name="firstname" value={firstname} type="text" className="form-control" id="firstname" aria-describedby="firstnameHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Second Name</label>
          <input onChange={handlerChange} name="surname" value={surname} type="text" className="form-control" id="surname" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Phone number</label>
          <input onChange={handlerChange} name="tel" value={tel} type="tel" className="form-control" id="tel" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={handlerChange} name="password" value={password} type="tel" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="submBut">
          <button type="submit" className="btn btn-primary button">Submit</button>
        </div>
      </form>
    </div>

  );
}

export default SignUp;
