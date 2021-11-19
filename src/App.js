import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import loadInitialData from "./redux/actions/shared";
import Routes from "./routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
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
