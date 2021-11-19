import { getUsers } from "./users";
import { getQuestions } from "./questions";

const loadInitialData = () => (dispatch) => {
  dispatch(getUsers());
  dispatch(getQuestions());
};

export default loadInitialData;
