import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import PollCard from "../components/PollCard";
import PollResult from "../components/PollResult";

const Poll = () => {
  const authedUserID = useSelector((state) => state.authedUser.id);
  const { id } = useParams();
  const targetPoll = useSelector((state) => state.questions)[id];
  const isAnswered =
    targetPoll?.optionOne.votes.includes(authedUserID) ||
    targetPoll?.optionTwo.votes.includes(authedUserID)
      ? true
      : false;

  return (
    <>
      {targetPoll ? (
        isAnswered ? (
          <PollResult poll={targetPoll} />
        ) : (
          <PollCard poll={targetPoll} />
        )
      ) : (
        <Redirect to="/404" />
      )}
    </>
  );
};

export default Poll;
