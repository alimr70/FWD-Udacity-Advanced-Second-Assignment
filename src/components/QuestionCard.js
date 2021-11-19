import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avatars from "../assets/avatars";

const QuestionCard = ({ question }) => {
  const { author, optionOne, id } = question;
  const users = useSelector((state) => state.users);
  const authorObj = Object.values(users).find((user) => user.id === author);

  return (
    <>
      {/* Question card */}
      <div className="question-card">
        <h4 className="question-card-asker">{authorObj.name} asks:</h4>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            {avatars[authorObj.avatarURL]}
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Would you rather</h3>
            <p>{optionOne.text}</p>
            <Link to={`/${id}`} className="btn">
              View Poll
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
