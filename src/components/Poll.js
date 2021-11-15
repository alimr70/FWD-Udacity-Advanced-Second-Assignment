import { AvatarTwo } from "../assets";

const Poll = () => {
  return (
    <>
      {/* Question card poll */}
      <div className="question-card">
        <h4 className="question-card-asker">Amr Ahmed asks:</h4>
        <div className="question-card-avatar-and-question">
          <div className="question-card-avatar">
            <AvatarTwo width="72" height="78" />
          </div>
          <span className="vr-divider"></span>
          <div className="question-card-question">
            <h3>Would you rather</h3>
            <div>
              <input
                type="radio"
                name="question"
                id="answer1"
                value="answer1"
              />
              <label htmlFor="answer1">answer1</label>
            </div>
            <div>
              <input
                type="radio"
                name="question"
                id="answer2"
                value="answer2"
              />
              <label htmlFor="answer2">answer2</label>
            </div>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Poll;
