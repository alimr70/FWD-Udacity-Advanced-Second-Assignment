import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { saveQuestion } from "../redux/actions/questions";

const CreateNewQuestion = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authedUserID = useSelector((state) => state.authedUser.id);
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleChange = (e) => {
    e.target.id === "question1"
      ? setOptionOneText(e.target.value)
      : setOptionTwoText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (optionOneText !== "" || optionTwoText !== "") {
      await dispatch(
        saveQuestion({
          optionOneText,
          optionTwoText,
          author: authedUserID,
        })
      );
      history.push("/");
    }
  };
  return (
    <>
      {/* Create new question */}
      <div className="create-new-question">
        <div className="create-new-question-header">
          <h1>Create New Question</h1>
        </div>
        <div className="create-new-question-body">
          <p>Complete the question:</p>
          <h3>Would your rather...</h3>
          <form className="create-new-question-form">
            <input
              type="text"
              name="question1"
              id="question1"
              value={optionOneText}
              onChange={(e) => handleChange(e)}
            />
            <div className="or-divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>
            <input
              type="text"
              name="question2"
              id="question2"
              value={optionTwoText}
              onChange={(e) => handleChange(e)}
            />
            <button
              type="submit"
              className="btn"
              onClick={(e) => {
                handleSubmit(e);
              }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewQuestion;
