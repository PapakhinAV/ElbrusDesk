import './index.css';
import foto from '../img/volkov.jpg'
// import SelectOptions from '../MultiSelect/MultiSelect';
// import MultipleSelect from '../MultiSelect/MultiSelect';
import AnimatedMulti from '../MultiSelect/MultiSelect';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadGroupsFromBack } from '../../Redux/actions/notes';
import axios from 'axios';



const EditProfile = () => {

  const { id } = useParams();
  const history = useHistory()
  const store = useSelector(state => state.userInfo)
  const user = store[0]

  const [inputs, setInputs] = useState({
    img: user.img ? user.img : "",
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
        img,
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
        selectIdGroup,
        selectIdDelete
      })
    })
    if (res.status === 200) {
      // console.log('status 200 пришло');
      history.replace('/')
    }
    else if (res.status === 406) {
      // console.log("Status 406");
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
  const { img, firstname, email, surname, tel, city, telegram, gitHub, linkidIn, instagram, vk } = inputs;

  const forPlaceholder = useSelector(state => state.userInfo)

  const dispatch = useDispatch()
  useEffect(() => {
    (() => {
      dispatch(LoadGroupsFromBack())
    })()
  }, [])
  const groupOpitons = useSelector(state => state.groups)

  const options = groupOpitons.length && groupOpitons.map(el => (
    { value: `${el._id}`, label: `${el.name} ➟ ${el.city} ➟ ${el.dateEnd}` }
  ))

  const deleteGroup = useSelector(state => state.userInfo[0].stydyGroup)
  let optionsForDelete = []
  if (deleteGroup) {
    optionsForDelete = deleteGroup.length && deleteGroup.map(el => (
      {
        value: `${el._id}`, label: `${el.name} ➟ ${el.city} ➟ ${el.dateEnd}`
      }
    ))
  }
  // console.log(deleteGroup);


  
  const [file, setFile] = useState({}); // storing the uploaded file
  const el = useRef(); // accesing input element
  const [data, getFile] = useState({ name: "", path: "" });
  // const [progress, setProgess] = useState(0); // progess bar

  const picHandleChange = (e) => {
    // setProgess(0)
    const file = e.target.files[0]; // accessing file
    setFile(file); // storing file
  }
  console.log('!!!!!!!!!!!!!!!!!!!!!!', file);

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios.post(`http://localhost:3000/userPic/${id}`, formData, {
      // onUploadProgress: (ProgressEvent) => {
      //   let progress = Math.round(
      //     ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
      //   setProgess(progress);
      // }
    }).then(res => {
      console.log('@@@@@@@@@@@@@@@@@@', res);
      getFile({
        name: res.data.name,
        path: 'http://localhost:3000' + res.data.path
      })
    }).catch(err => console.log(err))
  }
  const foto = 'https://pondokindahmall.co.id/assets/img/default.png'


  return (
    <>
      <div className="blockWrapper">
        <div className="editPge">
          <div className="editHeader">
            <h1><span className="yellowSymbols">{'//'}{' '}</span>Редактировать аккаунт<span className="yellowSymbols">{' '}{'//'}</span></h1>
          </div>



          <div className="editPhoto">
            {/* <img src={foto} alt="userPhoto" /> */}
            {foto && <img src={data.path} alt={data.name} />}

            <form>
            <input ref={el} onChange={picHandleChange} className="userPic" type="file" />
            <button onClick={uploadFile} type="button" className="purpleButton">ЗАГРУЗИТЬ ФОТО</button>
            <button className="deletePhoto">УДАЛИТЬ ФОТО</button>
            </form>
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
                    <input type="text" name='firstname' className="form-control editProfileInput" onChange={handleChange} value={firstname} placeholder={`${forPlaceholder[0].firstname}`} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Фамилия</label>
                    <input type="text" name="surname" className="form-control editProfileInput" onChange={handleChange} value={surname} placeholder={`${forPlaceholder[0].surname}`} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Телефон</label>
                    <input type="text" name="tel" className="form-control editProfileInput" onChange={handleChange} value={tel} placeholder={forPlaceholder[0].tel ? `${forPlaceholder[0].tel}` : ""} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Город</label>
                    <input type="text" name="city" className="form-control editProfileInput" onChange={handleChange} value={city} placeholder={forPlaceholder[0].city ? `${forPlaceholder[0].city}` : ""} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Telegram</label>
                    <input type="text" name="telegram" className="form-control editProfileInput" onChange={handleChange} value={telegram} placeholder={forPlaceholder[0].telegram ? `${forPlaceholder[0].telegram}` : ""} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">GitHub</label>
                    <input type="text" name="gitHub" className="form-control editProfileInput" onChange={handleChange} value={gitHub} placeholder={forPlaceholder[0].gitHub ? `${forPlaceholder[0].gitHub}` : ""} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">LinkedIn</label>
                    <input type="text" name="linkidIn" className="form-control editProfileInput" onChange={handleChange} value={linkidIn} placeholder={forPlaceholder[0].linkidIn ? `${forPlaceholder[0].linkidIn}` : ""} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Instagram</label>
                    <input type="text" name="instagram" className="form-control editProfileInput" onChange={handleChange} value={instagram} placeholder={forPlaceholder[0].instagram ? `${forPlaceholder[0].instagram}` : ""} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">VK</label>
                    <input type="text" name="vk" className="form-control editProfileInput" onChange={handleChange} value={vk} placeholder={forPlaceholder[0].vk ? `${forPlaceholder[0].vk}` : ""} />
                  </div>
                </div>
                <div className="col-sm">
                  <label class="form-label labelEditBold">E-mail</label>
                  <input type="email" name="email" className="form-control editProfileInput" onChange={handleChange} value={email} placeholder={forPlaceholder[0].email ? `${forPlaceholder[0].email}` : ""} />
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
