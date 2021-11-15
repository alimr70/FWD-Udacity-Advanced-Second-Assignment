const CreateNewQuestion = () => {
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
            <input type="text" name="question1" id="question1" />
            <div className="or-divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>
            <input type="text" name="question2" id="question2" />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewQuestion;
