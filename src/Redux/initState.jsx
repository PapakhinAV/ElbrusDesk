
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
    elbrusStatus: false
  }
  return JSON.parse(localStorage.getItem('redux')) || initialValue
}

export default initialState;
