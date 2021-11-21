import { Redirect, Route, Switch, useLocation } from "react-router";
import Home from "../pages/Home";
import NewQuestion from "../pages/NewQuestion";
import Login from "../pages/Login";
import Leaderboard from "../pages/Leaderboard";
import { useSelector } from "react-redux";
import Poll from "../pages/Poll";
import NotFound from "../components/NotFound";

const Routes = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return authedUser.id === "" ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: location.pathname },
              }}
            />
          ) : (
            <Home />
          );
        }}
      />
      <Route
        path="/login"
        component={Login}
        // render={() => {
        //   return authedUser.id !== "" ? <Redirect to="/" /> : <Login />;
        //   // return authedUser.id !== "" ? <Redirect to="/" /> : <Login />;
        // }}
      />
      <Route
        path="/add"
        render={() => {
          return authedUser.id === "" ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: location.pathname },
              }}
            />
          ) : (
            <NewQuestion />
          );
        }}
      />
      <Route
        path="/leaderboard"
        render={() => {
          return authedUser.id === "" ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: location.pathname },
              }}
            />
          ) : (
            <Leaderboard />
          );
        }}
      />
      <Route
        path="/questions/:id"
        render={() => {
          return authedUser.id === "" ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: location.pathname },
              }}
            />
          ) : (
            <Poll />
          );
        }}
      />
      <Route
        render={() => {
          return authedUser.id === "" ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: location.pathname },
              }}
            />
          ) : (
            <NotFound />
          );
        }}
      />
    </Switch>
  );
};

export default Routes;
