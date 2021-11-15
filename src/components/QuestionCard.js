import { AvatarTwo } from "../assets";

const QuestionCard = () => {
  return (
    <>
      {/* Question card */}
      <div className="question-card">
        <h4 className="question-card-asker">Amr Ahmed asks:</h4>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            <AvatarTwo width="72" height="78" />
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Would you rather</h3>
            <p>Question</p>
            <button className="btn">View Poll</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
