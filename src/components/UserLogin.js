const UserLogin = () => {
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
            <select name="users" id="users" className="btn">
              <option value="Select User" disabled>
                Select User
              </option>
              <option value="Ali Maher">Ali Maher</option>
              <option value="Amr Ahmed">Amr Ahmed</option>
              <option value="Hussein Taiseer">Hussein Taiseer</option>
            </select>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
