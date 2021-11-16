import { Link } from "react-router-dom";
import { AvatarThree } from "../assets";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar-list">
          <div className="navbar-items">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/newQuestion" className="link">
              <li>New Question</li>
            </Link>
            <Link to="/leaderboard" className="link">
              <li>Leader Board</li>
            </Link>
          </div>
          <div className="navbar-user-logout">
            <div className="navbar-user">
              <li>Hello, Ali Maher</li>
              <AvatarThree width="24" height="26" />
            </div>
            <Link to="/login" className="link">
              <li>Logout</li>
            </Link>
          </div>
        </ul>
      </nav>
      <div className="hr-div"></div>
    </header>
  );
};

export default Header;
