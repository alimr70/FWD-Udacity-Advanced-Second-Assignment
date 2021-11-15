import { AvatarOne } from "../assets";

const LeaderboardCard = () => {
  return (
    <>
      {/* Leader board card */}
      <div className="question-card leader-board-card">
        <div className="rank">1</div>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            <AvatarOne width="72" height="78" />
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Hussein Taiseer</h3>
            <div className="score-sheet">
              <div>
                <p>Answered Questions</p>
                <p>7</p>
              </div>
              <hr />
              <div>
                <p>Created Questions</p>
                <p>3</p>
              </div>
            </div>
          </div>
          <span className="vr-divider"></span>
          <div className="score">
            <p>Score</p>
            <div className="score-number">10</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardCard;
