import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const questions = useSelector((state) => state.questions);
  return (
    <>
      {/* Questions List */}
      <div className="questions-list-container">
        <div className="questions-list">
          <div className="questions-list-btns">
            <div
              onClick={() => {
                setIsAnswered(false);
              }}
              className={!isAnswered ? "questions-list-btn-selected" : ""}>
              Unanswered Questions
            </div>
            <span className="vr-divider"></span>
            <div
              onClick={() => {
                setIsAnswered(true);
              }}
              className={isAnswered ? "questions-list-btn-selected" : ""}>
              Answered Questions
            </div>
          </div>
          <div className="questions-list-cards">
            {isAnswered ? (
              <GetAnsweredQuestions questions={questions} />
            ) : (
              <GetUnansweredQuestions questions={questions} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const GetAnsweredQuestions = ({ questions }) => {
  const authedUserID = useSelector((state) => state.authedUser.id);
  const answeredQuestions = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authedUserID) ||
      question.optionTwo.votes.includes(authedUserID)
  );
  return (
    <>
      {answeredQuestions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </>
  );
};

const GetUnansweredQuestions = ({ questions }) => {
  const authedUserID = useSelector((state) => state.authedUser.id);
  const answeredQuestions = Object.values(questions).filter(
    (question) =>
      !question.optionOne.votes.includes(authedUserID) &&
      !question.optionTwo.votes.includes(authedUserID)
  );
  return (
    <>
      {answeredQuestions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </>
  );
};

export default QuestionList;
