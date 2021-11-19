import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import avatars from "../assets/avatars";
import { saveAnswer } from "../redux/actions/questions";

const PollCard = ({ poll }) => {
  const dispatch = useDispatch();
  const authedUserID = useSelector((state) => state.authedUser.id);
  const users = useSelector((state) => state.users);
  const authorObj = Object.values(users).find(
    (user) => user.id === poll.author
  );
  const { id } = useParams();
  const [option, setOption] = useState("");

  const handleSubmit = () => {
    dispatch(saveAnswer({ authedUser: authedUserID, qid: id, answer: option }));
  };

  return (
    <>
      {/* Question card poll card */}
      <div className="question-card">
        <h4 className="question-card-asker">{authorObj.name} asks:</h4>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            {avatars[authorObj.avatarURL]}
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Would you rather</h3>
            <div>
              <input
                type="radio"
                name="question"
                id="optionOne"
                value="optionOne"
                onClick={() => {
                  setOption("optionOne");
                }}
              />
              <label htmlFor="optionOne">{poll.optionOne.text}</label>
            </div>
            <div>
              <input
                type="radio"
                name="question"
                id="optionTwo"
                value="optionTwo"
                onClick={() => {
                  setOption("optionTwo");
                }}
              />
              <label htmlFor="optionTwo">{poll.optionTwo.text}</label>
            </div>
            <button
              className="btn"
              onClick={() => {
                handleSubmit();
              }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PollCard;
