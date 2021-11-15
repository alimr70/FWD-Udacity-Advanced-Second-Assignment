import { AvatarOne, AvatarThree, AvatarTwo } from "./assets";
import CreateNewQuestion from "./components/CreateNewQuestion";
import Header from "./components/Header";
import LeaderboardCard from "./components/LeaderboardCard";
import Poll from "./components/Poll";
import PollResult from "./components/PollResult";
import QuestionList from "./components/QuestionList";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Header />

      <main>
        <UserLogin />

        <QuestionList />

        <Poll />

        <PollResult />

        <LeaderboardCard />

        <CreateNewQuestion />
      </main>
    </div>
  );
}

export default App;
