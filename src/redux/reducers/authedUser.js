import { SET_AUTHED_USER } from "../actions/authedUser";

const initialState = null;

const authedUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authedUserID;

    default:
      return state;
  }
};

export default authedUser;
