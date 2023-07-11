import React from "react";
import "./register.css";
import { house } from "../components/Home/images";

const Register = () => {
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/" style={{ color: "#7e7e7e" }}>
            Pages
          </a>
          <span>My Account</span>
        </nav>
      </header>
      <main className="main-container">
        <div className="left-container">
          <h1>Create an Account</h1>
          <p>
            Already have an account?
            <span style={{ color: "#3bb77e" }}>Login</span>
          </p>
          <form method="post" className="register-form">
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
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
            <div className="choice">
              <input type="radio" id="1" name="option" value="1" />
              <label htmlFor="1">I am a customer</label>
              <br />
              <input type="radio" id="2" name="option" value="2" />
              <label htmlFor="2">I am a vendor</label>
            </div>
            <div className="chk-form">
              <label>
                <input type="checkbox" name="checkbox" />I agree to terms &
                Policy.
              </label>
              <a href="/" style={{ color: "#3bb77e", fontWeight: "600" }}>
                Learn more
              </a>
            </div>
            <button type="submit" className="btn" name="login">
              Submit & Register
            </button>
            <p className="text-muted">
              <strong>Note:</strong>Your personal data will be used to support
              your experience throughout this website, to manage access to your
              account, and for other purposes described in our privacy policy
            </p>
          </form>
        </div>
        <div className="right-container">
          <div className="">
            <a href="/" className="social-login facebook-login">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-facebook.svg"
                alt=""
              />
              <span>Continue with Facebook</span>
            </a>
            <a href="/" className="social-login google-login">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-google.svg"
                alt=""
              />
              <span>Continue with Google</span>
            </a>
            <a href="/" className="social-login apple-login">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-apple.svg"
                alt=""
              />
              <span>Continue with Apple</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
