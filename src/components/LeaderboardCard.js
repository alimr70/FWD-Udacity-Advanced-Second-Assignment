import avatars from "../assets/avatars";

const LeaderboardCard = ({
  author,
  avatarURL,
  rankNum,
  answeredQuestions,
  createdQuestions,
  score,
}) => {
  return (
    <>
      {/* Leader board card */}
      <div className="question-card leader-board-card">
        <div className="rank">{rankNum}</div>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">{avatars[avatarURL]}</div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>{author}</h3>
            <div className="score-sheet">
              <div>
                <p>Answered Questions</p>
                <p>{answeredQuestions}</p>
              </div>
              <hr />
              <div>
                <p>Created Questions</p>
                <p>{createdQuestions}</p>
              </div>
            </div>
          </div>
          <span className="vr-divider"></span>
          <div className="score">
            <p>Score</p>
            <div className="score-number">{score}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardCard;
