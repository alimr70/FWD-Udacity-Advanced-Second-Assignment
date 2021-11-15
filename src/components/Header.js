import { AvatarThree } from "../assets";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar-list">
          <div className="navbar-items">
            <li>Home</li>
            <li>New Question</li>
            <li>Leader Board</li>
          </div>
          <div className="navbar-user-logout">
            <div className="navbar-user">
              <li>Hello, Ali Maher</li>
              <AvatarThree width="24" height="26" />
            </div>
            <li>Logout</li>
          </div>
        </ul>
      </nav>
      <div className="hr-div"></div>
    </header>
  );
};

export default Header;
