import { _getQuestions } from "../utils/_DATA";

export const SET_QUESTIONS = "SET_QUESTIONS";

const setQuestions = (questionsData) => {
  return {
    type: SET_QUESTIONS,
    questionsData,
  };
};

export const getQuestions = () => async (dispatch) => {
  const questionsData = await _getQuestions();
  dispatch(setQuestions(questionsData));
};
