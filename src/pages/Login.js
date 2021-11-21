import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import UserLogin from "../components/UserLogin";

const Login = (props) => {
  const referrer = props.location.state?.referrer || "/";
  const authedUser = useSelector((state) => state.authedUser);
  return (
    <>{authedUser.id !== "" ? <Redirect to={referrer} /> : <UserLogin />}</>
  );
};

export default Login;
