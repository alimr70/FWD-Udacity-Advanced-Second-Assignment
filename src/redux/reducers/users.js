const SET_USERS = "SET_USERS";

const initialState = {};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, ...action.usersData };

    default:
      return state;
  }
};

export default users;
