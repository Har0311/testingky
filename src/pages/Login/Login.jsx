import React, { Component } from "react";
import Style from "./Login.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../context/AuthContext";
import { useState, useEffect, useContext } from "react";

function Login() {
  const [requesting, setRequesting] = useState(false);
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [formData, setformData] = useState({ email: "", password: "" });
  let { loginUser, clearTokens } = useContext(AuthContext);

  useEffect(() => {
    // console.log("clearing tokens");
    clearTokens();
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleClick(e) {
    e.preventDefault();

    setRequesting(true);
    await loginUser(formData.email, formData.password);
    setRequesting(false);
  }

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { username, password } = this.state;

  //   if (username === "user" && password === "password") {
  //     this.setState({
  //       isAuthenticated: true,
  //       error: null,
  //     });
  //   } else {
  //     this.setState({
  //       isAuthenticated: false,
  //       error: "Invalid username or password",
  //     });
  //   }
  // };
  return (
      <>
        <Navbar />
        <div className={Style.frame}>
          <div className={Style.headingText}>
            <h1>Welcome, Campus Ambassador!</h1>
          </div>
          <div className={Style.loginForm}>
            <div className={Style.headerText}>
              <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleClick}>
              <div className={Style.eAdd}>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  style={{
                    borderWidth: 2, // size/width of the border
                    borderColor: "#D90429", // color of the border
                    backgroundColor: "white",
                    borderRadius: 50,
                  }}
                  onChange={handleChange}
                />
              </div>
              <div className={Style.pass}>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  style={{
                    borderWidth: 2, // size/width of the border
                    borderColor: "#D90429", // color of the border
                    backgroundColor: "white",
                    borderRadius: 50,
                  }}
                  onChange={handleChange}
                />
              </div>
              <div className={Style.anchor}>
                <a href="/">
                  <span>Forgot Password?</span>
                </a>
              </div>

              <div className={Style.btn}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#D90429",
                  }}
                >
                  Submit
                </button>
              </div>

              <div className={Style.another}>
                <h4>or</h4>
              </div>

              <div className={Style.anBtn}>
                <button
                  style={{
                    backgroundColor: "grey",
                  }}
                >
                  Login with Google
                </button>
              </div>

              <div className={Style.otherOpt}>
                <span>
                  Don't have an account? <Link to="/ca-register">Sign up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Login;
