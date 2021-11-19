import { useSelector } from "react-redux";
import LeaderboardCard from "./LeaderboardCard";

const LeaderboardList = () => {
  const users = useSelector((state) => state.users);
  const ranks = getRanksArr(users);
  const arrangedRanks = ranks.sort((a, b) => (a.score < b.score ? 1 : 0));
  return (
    <>
      {arrangedRanks.map((user, index) => {
        return (
          <LeaderboardCard
            key={index}
            author={user.author}
            avatarURL={user.avatarURL}
            rankNum={index + 1}
            answeredQuestions={user.answeredQuestions}
            createdQuestions={user.createdQuestions}
            score={user.score}
          />
        );
      })}
    </>
  );
};

const getRanksArr = (usersObj) => {
  let ranksArr = [];
  const users = Object.values(usersObj);
  users.forEach((user) => {
    let rank = {
      author: user.name,
      avatarURL: user.avatarURL,
      answeredQuestions: Object.values(user.answers).length,
      createdQuestions: user.questions.length,
    };
    let score = rank.answeredQuestions + rank.createdQuestions;
    rank.score = score;
    ranksArr.push(rank);
  });
  return ranksArr;
};

export default LeaderboardList;
