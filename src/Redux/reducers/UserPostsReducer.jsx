import * as TYPES from '../types/notes';

const UserPostsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_NEW_POST:
      return [...state, action.payload]

      // (action.payload);

    default:
      return state;
  }
};

export default UserPostsReducer;
