
// const initState = {
// };

const initialState = () => {
  const initialValue = {
    news: [],
    posts: [],
    // newpost: [{
    //   title: '',
    // }],
    groups: [{
			_id: '',
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
		adminInfo: {},
		userInfo: {
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
		},
  }
  return JSON.parse(localStorage.getItem('redux')) || initialValue
}

export default initialState;
