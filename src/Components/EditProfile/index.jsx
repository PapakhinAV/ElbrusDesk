import './index.css';
import foto from '../img/volkov.jpg'
// import SelectOptions from '../MultiSelect/MultiSelect';
// import MultipleSelect from '../MultiSelect/MultiSelect';
import AnimatedMulti from '../MultiSelect/MultiSelect';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';


const EditProfile = () => {

const { id } = useParams();
const history = useHistory()

const [inputs, setInputs] = useState({
	firstname: "",
	surname: "",
	tel: "",
	city: "",
	email: "",
	gitHub: "",
	linkidIn: "",
	instagram: "",
	vk: "",
})

// const [firstname, setFirstname] = useState('');
// const [surname, setSurname] = useState('');
// const [tel, setTel] = useState('');
// const [city, setCity] = useState('');
// const [email, setEmail] = useState('');
// const [gitHub, setGitHub] = useState('');
// const [linkidIn, setLinkidIn] = useState('');
// const [instagram, setInstagram] = useState('');
// const [vk, setVk] = useState('');


async function handleSubmit(event){
	event.preventDefault();
const res = await fetch(`${process.env.REACT_APP_URL}/Edit/${id}`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			firstname,
			surname,
			tel	
		})
	})
	if(res.status === 200){
		history.replace(`/Home/${id}`)
	}
}
// const handleChange = (e)=>{
// 	setFirstname(e.target.value.firstname)
// 	setSurname(e.target.value.surname)
// 	setTel(e.target.value.tel)
// 	setCity(e.target.value.city)
// 	setEmail(e.target.value.email)
// 	setLinkidIn(e.target.value.linkidIn)
// 	setGitHub(e.target.value.gitHub)
// 	setInstagram(e.target.value.instagram)
// 	setVk(e.target.value.vk)
// }

function handleChange({target : {name, value}}){
	setInputs({
			...inputs,
			[name]: value
		})
}

const { firstname, surname, tel } = inputs;
console.log(inputs);
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
                    <AnimatedMulti />
                  </div>
                </div>

                <div className="row">

                  <div className="col-sm">
                    <label class="form-label labelEditBold">Имя</label>
                    <input type="text" name='firstname' className="form-control editProfileInput" onChange={handleChange} value={firstname} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Фамилия</label>
                    <input type="text" name="surname" className="form-control editProfileInput" onChange={handleChange} value={surname} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Телефон</label>
                    <input type="text" name="tel" className="form-control editProfileInput" onChange={handleChange} value={tel} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Город</label>
                    <input type="text" className="form-control editProfileInput" onChange={handleChange} value={inputs.city} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Telegram</label>
                    <input type="text" className="form-control editProfileInput" onChange={handleChange} value={inputs.email} />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">GitHub</label>
                    <input type="text" className="form-control editProfileInput" onChange={handleChange} value={inputs.gitHub} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">LinkedIn</label>
                    <input type="text" className="form-control editProfileInput" onChange={handleChange} value={inputs.linkidIn}  />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Instagram</label>
                    <input type="text" className="form-control editProfileInput" onChange={handleChange} placeholder="Заполните поле..." value={inputs.instagram}/>
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">VK</label>
                    <input type="text" className="form-control editProfileInput" onChange={handleChange} value={inputs.vk}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm saveChanges">
                    <button type="submit" className="purpleButton">Сохранить</button>
                  </div>
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
