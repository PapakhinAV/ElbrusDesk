import { useState } from 'react';
import style from './index.module.css';


const AdminCreateGroup = () => {

  const [newGroup, setNewGroup] = useState({
    name: "",
    city: "",
    avatar: "",
    dateStart: "",
    dateEnd: ""
  })
  function saveGroup(event) {
    event.preventDefault()
    console.log(newGroup);
  }

  function handleChange({ target: { name, value } }) {
    setNewGroup({
      ...newGroup,
      [name]: value
    })
  }

  return (
    <div className={style.groupMain}>
      <form onSubmit={saveGroup} >
        <input type="text" onChange={handleChange} value={newGroup.name} name="name" placeholder="Введине название группы" />
        <input type="text" onChange={handleChange} value={newGroup.city} name="city" placeholder="Введине город" />
        <input type="text" onChange={handleChange} value={newGroup.avatar} name="avatar" placeholder="Введине ссылку на аватар группы" />
        <input type="date" onChange={handleChange} value={newGroup.dateStart} name="dateStart" placeholder="Введине дату начала обучения группы" />
        <input type="date" onChange={handleChange} value={newGroup.dateEnd} name="dateEnd" placeholder="Введине дату окончания обучения группы" />
        <button>Сохранить</button>
      </form>
    </div>
  );
}

export default AdminCreateGroup;
