import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/Home";
import NewQuestion from "../pages/NewQuestion";
import Login from "../pages/Login";
import Leaderboard from "../pages/Leaderboard";
import { useSelector } from "react-redux";
import Poll from "../pages/Poll";

const Routes = () => {
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return authedUser.id === "" ? <Redirect to="/login" /> : <Home />;
        }}
      />
      <Route
        path="/login"
        render={() => {
          return authedUser.id !== "" ? <Redirect to="/" /> : <Login />;
        }}
      />
      <Route
        path="/newQuestion"
        render={() => {
          return authedUser.id === "" ? (
            <Redirect to="/login" />
          ) : (
            <NewQuestion />
          );
        }}
      />
      <Route
        path="/leaderboard"
        render={() => {
          return authedUser.id === "" ? (
            <Redirect to="/login" />
          ) : (
            <Leaderboard />
          );
        }}
      />
      <Route
        path="/:id"
        render={() => {
          return authedUser.id === "" ? <Redirect to="/login" /> : <Poll />;
        }}
      />
    </Switch>
  );
};

export default Routes;
