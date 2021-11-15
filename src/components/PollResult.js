import { AvatarTwo } from "../assets";

const PollResult = () => {
  return (
    <>
      {/* Question card poll result */}
      <div className="question-card">
        <h4 className="question-card-asker">Asked by Amr Ahmed:</h4>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            <AvatarTwo width="72" height="78" />
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Results</h3>
            <div className="question-card-poll-result">
              <p className="question-card-poll-result-answer">
                Would you rather Answer 1
              </p>
              <div className="question-card-poll-result-bar">
                <div
                  className="question-card-poll-result-bar-percentage"
                  style={{ width: "60%" }}>
                  <p>60%</p>
                </div>
              </div>
              <p>3 out of 5</p>
            </div>
            <div className="question-card-poll-result your-vote">
              <div className="your-vote-badge">
                <p>Your</p>
                <p>Vote</p>
              </div>
              <p className="question-card-poll-result-answer">
                Would you rather Answer 2
              </p>
              <div className="question-card-poll-result-bar">
                <div
                  className="question-card-poll-result-bar-percentage"
                  style={{ width: "40%" }}>
                  <p>40%</p>
                </div>
              </div>
              <p>2 out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PollResult;
