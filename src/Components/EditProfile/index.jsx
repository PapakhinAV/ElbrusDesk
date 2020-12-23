import './index.css';
import foto from '../img/volkov.jpg'
// import SelectOptions from '../MultiSelect/MultiSelect';
// import MultipleSelect from '../MultiSelect/MultiSelect';
import AnimatedMulti from '../MultiSelect/MultiSelect';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadGroupsFromBack } from '../../Redux/actions/notes';


const EditProfile = () => {

  const { id } = useParams();
  const history = useHistory()
  const store = useSelector(state => state.userInfo)
  const user = store[0]

  const [inputs, setInputs] = useState({
    firstname: user.firstname ? user.firstname : "",
    surname: user.surname ? user.surname : "",
    tel: user.tel ? user.tel : "",
    telegram: user.telegram ? user.telegram : "",
    city: user.city ? user.city : "",
    gitHub: user.gitHub ? user.gitHub : "",
    linkidIn: user.linkidIn ? user.linkidIn : "",
    instagram: user.instagram ? user.instagram : "",
    vk: user.vk ? user.vk : "",
    email: user.email ? user.email : "",
    work: user.work ? user.work : "",
  })
  const [selectIdGroup, setSelectIdGroup] = useState('')
  const [selectIdDelete, setSelectIdDelete] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_URL}/Edit/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        surname,
        email,
        tel,
        city,
        telegram,
        gitHub,
        linkidIn,
        instagram,
        vk,
        work,
        selectIdGroup,
        selectIdDelete
      })
    })
    if (res.status === 200) {
      console.log('status 200 пришло');
      history.replace('/')
    }
    else if (res.status === 406) {
      console.log("Status 406");
      history.replace('/')
    }
  }



  // function handleSelectDelete(value){
  // 	setSelectIdDelete(value);
  // }
  // const { firstname, surname, tel, city, telegram, gitHub, linkidIn, instagram, vk} = inputs;

  // const forPlaceholder = useSelector(state=> state.userInfo)

  // const dispatch = useDispatch()
  // useEffect(() => {
  // 	(() => {
  // 		dispatch(LoadGroupsFromBack())
  // 	})()
  // }, [])
  // const groupOpitons = useSelector(state=> state.groups)

  // const options =	groupOpitons.length && groupOpitons.map(el=>(
  // 		{ value: `${el._id}`, label: `${el.name} ➟ ${el.city} ➟ ${el.dateEnd}` }
  // 	))

  // 	const deleteGroup = useSelector(state=> state.userInfo[0].stydyGroup)
  // 	let optionsForDelete=[]
  // 	if(deleteGroup){
  // 		optionsForDelete = deleteGroup.length && deleteGroup.map(el=>(
  // 		{ value: `${el._id}`, label: `${el.name} ➟ ${el.city} ➟ ${el.dateEnd}` 
  // 	}
  // 	))}

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function handleChangeSelect(value) {
    setSelectIdGroup(value);
  }

  function handleSelectDelete(value) {
    setSelectIdDelete(value);
  }
  const { firstname, email, work, surname, tel, city, telegram, gitHub, linkidIn, instagram, vk } = inputs;

  const forPlaceholder = useSelector(state => state.userInfo)

  const dispatch = useDispatch()
  useEffect(() => {
    (() => {
      dispatch(LoadGroupsFromBack())
    })()
  }, [])
  const groupOpitons = useSelector(state => state.groups)

  const options = groupOpitons.length && groupOpitons.map(el => (
    { value: `${el._id}`, label: `${el.name} ➟ ${el.city} ➟ ${el.dateEnd.slice(0, 4)}` }
  ))

  const deleteGroup = useSelector(state => state.userInfo[0].stydyGroup)
  let optionsForDelete = []
  if (deleteGroup) {
    optionsForDelete = deleteGroup.length && deleteGroup.map(el => (
      {
        value: `${el._id}`, label: `${el.name} ➟ ${el.city} ➟ ${el.dateEnd.slice(0, 4)}`
      }
    ))
  }
  console.log(deleteGroup);
  //>>>>>>> dev
  return (
    <>
      <div className="blockWrapper">
        <div className="editPge">
          <div className="editHeader">
            <h1><span className="yellowSymbols">//</span> Редактировать аккаунт <span className="yellowSymbols">//</span></h1>
          </div>
          <div className="editPhoto">
            <img src={foto} alt="userPhoto" />
            <input className="changePhoto" type="file" />inputs.
            <button className="deletePhoto">УДАЛИТЬ ФОТО</button>
          </div>
          <div className="editUserForm">
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Группа(ы)/Год обучения</label>
                    <AnimatedMulti handleChange={handleChangeSelect}
                      options={options}
                    />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Удалить себя из группы</label>
                    <AnimatedMulti handleChange={handleSelectDelete}
                      options={optionsForDelete}
                    />
                  </div>

                </div>

                <div className="row">

                  <div className="col-sm">
                    <label class="form-label labelEditBold">Имя</label>
                    <input type="text" name='firstname' className="form-control editProfileInput" onChange={handleChange} value={firstname} placeholder="Имя" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Фамилия</label>
                    <input type="text" name="surname" className="form-control editProfileInput" onChange={handleChange} value={surname} placeholder="Фамилия" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Телефон</label>
                    <input type="text" name="tel" className="form-control editProfileInput" onChange={handleChange} value={tel} placeholder="Номер телефона" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Город</label>
                    <input type="text" name="city" className="form-control editProfileInput" onChange={handleChange} value={city} placeholder="Город" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Telegram</label>
                    <input type="text" name="telegram" className="form-control editProfileInput" onChange={handleChange} value={telegram} placeholder="Логин в Telegram" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">GitHub</label>
                    <input type="text" name="gitHub" className="form-control editProfileInput" onChange={handleChange} value={gitHub} placeholder="Логин в GitHub" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">LinkedIn</label>
                    <input type="text" name="linkidIn" className="form-control editProfileInput" onChange={handleChange} value={linkidIn} placeholder="Логин в linkidIn" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Instagram</label>
                    <input type="text" name="instagram" className="form-control editProfileInput" onChange={handleChange} value={instagram} placeholder="Логин в Instagram" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">VK</label>
                    <input type="text" name="vk" className="form-control editProfileInput" onChange={handleChange} value={vk} placeholder="Логин в Вконтакте" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">E-mail</label>
                    <input type="email" name="email" className="form-control editProfileInput" onChange={handleChange} value={email} placeholder="E-mail" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Текущее место работы</label>
                    <input type="text" name="work" className="form-control editProfileInput" onChange={handleChange} value={work} placeholder="Место работы" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm saveChanges">
                  <button type="submit" className="purpleButton">Сохранить</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
