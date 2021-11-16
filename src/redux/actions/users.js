import { _getUsers } from "../utils/_DATA";

export const SET_USERS = "SET_USERS";

const setUsers = (usersData) => {
  return {
    type: SET_USERS,
    usersData,
  };
};

export const getUsers = () => async (dispatch) => {
  const usersData = await _getUsers();
  dispatch(setUsers(usersData));
};
