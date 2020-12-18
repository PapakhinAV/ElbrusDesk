import './index.css';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AddUserID } from '../../Redux/actions/notes';

const SignIn = () => {

  const dispatch = useDispatch()

  const history = useHistory();
  useEffect(() => {
    (async () => {
      let res = await fetch("http://localhost:3000/user/signin", {
        method: 'GET',
        credentials: 'include'
      })
      if (res.status === 401) {
        history.push('/Home')
      }
    })()
  }, [])

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false)
  const [yes, setYes] = useState(false)

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
      credentials: 'include'
    });
    const result = await response.json()
    if (response.status === 200) {
      dispatch(AddUserID(result))
      setYes(true)
      setError('Вы успешно зарегистрированы!')
      return (
        setTimeout(() => {
          history.push('/Home')
        }, 1000)
      )
    }
    return setError('Повторите вход')
  }

  function handlerChange({ target: { name, value } }) {
    setInputs({
      ...inputs, [name]: value,
    })
  }
  console.log(error);

  const { email, password } = inputs;

  return (
    <>
      {
        !yes ?
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
              <input onChange={handlerChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail*" />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
              <input onChange={handlerChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль*" />
            </div>
            <div id="emailHelp" className="req">Поля обязательные для заполнения<span>*</span></div>
            <div className="submBut">
              <button type="submit" className="btn btn-primary button">Войти</button>
            </div>
          </form> : <div>{error}</div>
      }
    </>
  );
}

export default SignIn;
