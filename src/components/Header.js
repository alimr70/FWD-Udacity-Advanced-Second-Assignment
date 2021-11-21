import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import avatars from "../assets/avatars";
import { setAuthedUser } from "../redux/actions/authedUser";

const Header = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authedUserID = useSelector((state) => state.authedUser.id);
  const user =
    authedUserID !== "" &&
    Object.values(users).filter((user) => user.id === authedUserID)[0];

  return (
    <header>
      <nav>
        <ul className="navbar-list">
          <div className="navbar-items">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/add" className="link">
              <li>New Question</li>
            </Link>
            <Link to="/leaderboard" className="link">
              <li>Leader Board</li>
            </Link>
          </div>
          <div className="navbar-user-logout">
            {authedUserID !== "" && (
              <>
                <div className="navbar-user">
                  <li>Hello, {user.name}</li>
                  {avatars[user.avatarURL]}
                </div>
                <Link
                  to="/login"
                  className="link"
                  onClick={() => {
                    dispatch(setAuthedUser(""));
                  }}>
                  <li>Logout</li>
                </Link>
              </>
            )}
          </div>
        </ul>
      </nav>
      <div className="hr-div"></div>
    </header>
  );
};

export default Header;
