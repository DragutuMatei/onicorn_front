import React, { useState } from "react";
import { auth } from '../../fire.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.scss";
import logo from "./images/logLogo.png";
import logCard from "./images/logCard.png";
import { useNavigate } from "react-router-dom";
import Axios from "../../axiosconfig";

function Login({ reg }) {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const send = async () => {
    if (reg) {
      await Axios.post("/register", {
        email: email,
        displayName: user,
        password: pass,
      }).then((res) => {
        console.log(res);
      });
    } else {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pass);
            const user = userCredential.user;
            const idToken = await user.getIdToken();
            const response = await Axios.post('/login', { token: idToken });
            alert('Login successful! ' + JSON.stringify(response.data));
          } catch (error) {
            alert('Error logging in: ' + error.message);
          }
    }
  };
  return (
    <div className="login">
      <div className="login-aligner">
        <div className="login-wrap">
          <img src={logo} alt="logoImage" className="logo" />
          <div className="dialog">
            <h1>Welcome!</h1>
            <p>Minimizing Dead Times and Streamlining Logistics</p>
          </div>
          <div className="user-data">
            <div className="data-wrap">
              <div className="input">
                <label htmlFor="user-input">Email</label>
                <input
                  type="email"
                  id="user-input"
                  onChange={(event) => {
                    setEmail(event.target.value.trim());
                  }}
                  placeholder="Input your email here"
                />
              </div>
              {reg && (
                <div className="input">
                  <label htmlFor="user-input">Username</label>
                  <input
                    type="text"
                    id="user-input"
                    onChange={(event) => {
                      setUser(event.target.value.trim());
                    }}
                    placeholder="Input your username here"
                  />
                </div>
              )}
              <div className="input">
                <label htmlFor="pass-input">Password</label>
                <input
                  type="password"
                  id="pass-input"
                  onChange={(event) => {
                    setPass(event.target.value.trim());
                  }}
                  placeholder="Input password here"
                />
              </div>
            </div>
            <div
              className="forgot"
              onClick={() => {
                navigate("/forgot");
              }}
            >
              <p>Forgot password?</p>
            </div>
          </div>
          <div className="signin">
            <button onClick={send} id="sign-button">
              Sign in
            </button>
          </div>
          <div className="register">
            <h4>Don't have an account?</h4>
            <h4>Contact us!</h4>
          </div>
        </div>
      </div>
      <div className="image-card">
        <img src={logCard} alt="cardImage" className="bg-card" />
      </div>
    </div>
  );
}

export default Login;
