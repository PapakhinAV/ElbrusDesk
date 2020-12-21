
// const initState = {
// };

const initialState = () => {
  const initialValue = {
    news: [],
    posts: [],
    groups: [{
      name: '',
      city: '',
      avatar: '',
      dateStart: '',
      dateEnd: ''
    }],
    users: [{
      stydyGroup: [],
      social: [],
      workPlace: [],
      post: [],
      firstname: '',
      surname: '',
      email: '',
      password: '',
      tel: '',
      gitHub: '',
      city: '',
      linkidIn: '',
      birthday: ''
    }],
    id: "",
  }
  return JSON.parse(localStorage.getItem('redux')) || initialValue
}

export default initialState;
