import QuestionList from "../components/QuestionList";
import { useParams } from "react-router";
import Poll from "../components/Poll";

const Home = () => {
  const { id } = useParams();

  return <>{id ? <Poll /> : <QuestionList />}</>;
};

export default Home;
