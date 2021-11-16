import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/Home";
import NewQuestion from "../pages/NewQuestion";
import Login from "../pages/Login";
import Leaderboard from "../pages/Leaderboard";
import { useSelector } from "react-redux";

const Routes = () => {
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <Switch>
      <Route exact path="/" component={Home}>
        {authedUser === null && <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login}>
        {authedUser !== null && <Redirect to="/" />}
      </Route>
      <Route path="/newQuestion" component={NewQuestion}>
        {authedUser === null && <Redirect to="/login" />}
      </Route>
      <Route path="/leaderboard" component={Leaderboard}>
        {authedUser === null && <Redirect to="/login" />}
      </Route>
      <Route path="/:id" component={Home}>
        {authedUser === null && <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;
