import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);

  const Login = (event) => {
    console.log(event.target.name);
    console.log("sdfsdf");
    setCurrentUser({ email: "email@email", password: "password" });
  };
  return (
    <div className="login-form bg-light mt-4 p-4">
      <div className="row g-3">
        <h4>Welcome Back</h4>
        <div className="col-12">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="col-12">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              {" "}
              Remember me
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            name="submit"
            onClick={Login}
            className="btn btn-dark float-end"
          >
            Login
          </button>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="col-12">
        <p className="text-center mb-0">
          Have not account yet? <a href="/">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
