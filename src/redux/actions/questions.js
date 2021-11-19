import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { getUsers } from "./users";

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

export const saveAnswer =
  ({ authedUser, qid, answer }) =>
  async (dispatch) => {
    await _saveQuestionAnswer({ authedUser, qid, answer });
    dispatch(getUsers());
    dispatch(getQuestions());
  };

export const saveQuestion =
  ({ optionOneText, optionTwoText, author }) =>
  async (dispatch) => {
    await _saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });
    dispatch(getUsers());
    dispatch(getQuestions());
  };
