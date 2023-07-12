import React from "react";
import { house } from "../../components/Home/images";
import "./login.css";

const Login = () => {
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Pages</a>
          <span>My Account</span>
        </nav>
      </header>
      <main className="main-body">
        <div className="left-img-container">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png"
            alt="login-img"
          />
        </div>
        <div className="right-form-container">
          <div className="headings">
            <h1>Login</h1>
            <p>
              Don't have an account?{" "}
              <span style={{ color: "#3bb77e" }}>Create Here</span>
            </p>
          </div>
          <form className="login-form" method="post">
            <input
              type="text"
              placeholder="Username or Email *"
              name="username"
            />
            <input
              type="password"
              placeholder="Your Password *"
              name="password"
            />
            <div className="security-code">
              <input type="text" placeholder="Security Code *" name="code" />
              <span>
                <b className="text-new">8</b>
                <b className="text-hot">6</b>
                <b className="text-sale">7</b>
                <b className="text-best">5</b>
              </span>
            </div>
            <div className="chk-form">
              <label>
                <input type="checkbox" name="checkbox" />
                Remember me
              </label>
              <a href="/">Forget password?</a>
            </div>
            <button type="submit" className="btn" name="login">
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
