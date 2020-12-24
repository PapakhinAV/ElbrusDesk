import * as TYPES from '../types/notes';

const usersPositions = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_USERS_POSITIONS:
      return (action.payload);
    default:
      return state;
  }
};

export default usersPositions;

