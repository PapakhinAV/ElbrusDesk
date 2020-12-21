import * as TYPES from '../types/notes';

const InforForAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.ADD_INFO_FOR_ADMIN:
      return (action.payload);

    default:
      return state;
  }
};

export default InforForAdminReducer;

