import { useSelector } from "react-redux";
import avatars from "../assets/avatars";

const PollResult = ({ poll }) => {
  const users = useSelector((state) => state.users);
  const authorObj = Object.values(users).find(
    (user) => user.id === poll.author
  );
  const authedUserID = useSelector((state) => state.authedUser.id);
  const optionOneVotes = poll.optionOne.votes.length;
  const optionTwoVotes = poll.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercentag = (optionOneVotes / totalVotes) * 100;
  const optionTwoPercentag = (optionTwoVotes / totalVotes) * 100;

  return (
    <>
      {/* Question card poll result */}
      <div className="question-card">
        <h4 className="question-card-asker">Asked by {authorObj.name}:</h4>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            {avatars[authorObj.avatarURL]}
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Results:</h3>
            <div className="question-card-poll-result">
              {poll.optionOne.votes.includes(authedUserID) && <YourVoteBadge />}
              <p className="question-card-poll-result-answer">
                Would you rather {poll.optionOne.text}
              </p>
              <div className="question-card-poll-result-bar">
                <div
                  className="question-card-poll-result-bar-percentage"
                  style={{
                    width: `${optionOnePercentag}%`,
                  }}></div>
              </div>
              <p>
                {optionOneVotes} out of {totalVotes}
              </p>
            </div>
            <div className="question-card-poll-result">
              {poll.optionTwo.votes.includes(authedUserID) && <YourVoteBadge />}
              <p className="question-card-poll-result-answer">
                Would you rather {poll.optionTwo.text}
              </p>
              <div className="question-card-poll-result-bar">
                <div
                  className="question-card-poll-result-bar-percentage"
                  style={{
                    width: `${optionTwoPercentag}%`,
                  }}></div>
              </div>
              <p>
                {optionTwoVotes} out of {totalVotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const YourVoteBadge = () => {
  return (
    <div className="your-vote-badge">
      <p>Your</p>
      <p>Vote</p>
    </div>
  );
};

export default PollResult;
