import './index.css';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LoadStatusElbrus } from '../../Redux/actions/notes'


const SignIn = () => {

  const dispatch = useDispatch()
  const store = useSelector(store => store.id)

  const history = useHistory();
  useEffect(() => {
    (async () => {
      let res = await fetch("http://localhost:3000/user/signin", {
        method: 'GET',
        credentials: 'include'
      })
      if (res.status === 401) {
        history.push(`/Home/${store}`)
      }
    })()
  }, [])

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('')
  // const [yes, setYes] = useState(false)

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
    if (response.status === 200) {
      const result = await response.json()
      dispatch(LoadStatusElbrus(true))
      history.push(`/Home/${result}`)
    } else {
      setError('Неправильный логин или пароль')
    }
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
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
              <input onChange={handlerChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail*" />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
              <input onChange={handlerChange} type="password" name="password" id="exampleInputPassword1" placeholder="Пароль*" />
            </div>
            <div className="req"><span>*</span>Поля обязательные для заполнения</div>
            <div>{error}</div>
            <div className="submBut">
              <button type="submit" className="yellowButton">Войти</button>
            </div>
          </form>  
            <div className="reqBLue">Ещё не зарегистрированы?</div>
    </>

  );
}

export default SignIn;
