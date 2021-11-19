import { SET_AUTHED_USER } from "../actions/authedUser";

const initialState = { id: "" };

const authedUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { id: action.authedUserID };

    default:
      return state;
  }
};

export default authedUser;
