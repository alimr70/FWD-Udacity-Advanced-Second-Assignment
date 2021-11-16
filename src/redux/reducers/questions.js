import { SET_QUESTIONS } from "../actions/questions";

const initialState = {};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, ...action.questionsData };

    default:
      return state;
  }
};

export default questions;
