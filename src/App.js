import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { getUsers } from "./redux/actions/users";
import { getQuestions } from "./redux/actions/questions";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  });

  return (
    <div className="App">
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
