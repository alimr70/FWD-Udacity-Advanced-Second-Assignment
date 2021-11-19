import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAuthedUser } from "../redux/actions/authedUser";

const UserLogin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      {/* Login component */}
      <div className="user-login-container">
        <div className="user-login">
          <div className="user-login-header">
            <h3>Wlecome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <div className="user-login-img">
            <img src="./img/react-redux.jpeg" alt="react-redux-logos" />
          </div>
          <div className="user-login-users">
            <select
              name="users"
              id="users"
              className="btn"
              onChange={(e) => handleChange(e)}>
              <option value="">Select User</option>

              {Object.values(users).length > 0 &&
                Object.values(users).map((user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
            </select>
            <button
              className="btn"
              onClick={() => {
                dispatch(setAuthedUser(user));
              }}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
