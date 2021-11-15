import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  return (
    <>
      {/* Questions List */}
      <div className="questions-list-container">
        <div className="questions-list">
          <div className="questions-list-btns">
            <div>Unanswered Questions</div>
            <span className="vr-divider"></span>
            <div>Answered Questions</div>
          </div>
          <div className="questions-list-cards">
            <QuestionCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
