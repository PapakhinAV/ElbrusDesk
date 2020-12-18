import * as TYPES from '../types/notes';

const AddUserIDReduser = (state = "", action) => {
  switch (action.type) {
    case TYPES.ADD_USER_ID:
      return (action.payload);

    default:
      return state;
  }
};

export default AddUserIDReduser;
