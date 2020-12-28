import * as TYPES from '../types/notes';

const ShowAllPostsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.SHOW_ALL_POSTS:
      return action.payload
      case TYPES.ADD_NEW_POST:
      return ([...state, action.payload])
    default:
      return state;
  }
};

export default ShowAllPostsReducer;
