import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { register } from "../../Actions/registerAction";
import { Link } from "react-router-dom";
import img from "../../fonts/01.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = (props) => {
  const [mail, setmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  let regBtn = useRef();
  const setInput = (setter) => (event) => setter(event.currentTarget.value);

  const registerUser = () => {
    props.register({ mail, firstName, lastName, username, password });
    toast(props.error);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 align-self-start text-center m-3">
            <div id="RegForm" className="row form-content">
              <div class="col-12">
                <div class="step-title">
                  <h2 class="featured">Join Turning Heads </h2>
                  <p>
                    Already have account om Turning Heads?{" "}
                    <Link to="/login" className="Msg">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div id="RegForm" className="row text-center form-content">
              <div className="col-12 step-group">
                <input
                  type="text"
                  placeholder="mail"
                  name="mail"
                  id="mail"
                  value={mail}
                  className="form-control field-name"
                  onInput={setInput(setmail)}
                />
                <span className="d-block text-danger">{errors?.mail}</span>

                <input
                  type="text"
                  placeholder="firstName"
                  name="firstName"
                  id="firstName"
                  className="form-control field-name"
                  value={firstName}
                  onInput={setInput(setfirstName)}
                />
                <span className="d-block text-danger">{errors?.firstName}</span>

                <input
                  type="text"
                  placeholder="lastName"
                  name="lastName"
                  className="form-control field-name"
                  id="lastName"
                  value={lastName}
                  onInput={setInput(setlastName)}
                />
                <span className="d-block text-danger">{errors?.lastName}</span>

                <input
                  type="text"
                  placeholder="username*"
                  name="username"
                  id="username"
                  className="form-control field-name"
                  value={username}
                  onInput={setInput(setusername)}
                />
                <span className="d-block text-danger">{errors?.username}</span>

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control field-password"
                  id="password"
                  value={password}
                  onInput={setInput(setPassword)}
                />
                <span className="d-block text-danger">{errors?.password}</span>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
                  id="confirm-password"
                  className="form-control field-password"
                  value={confirmPassword}
                  onInput={setInput(setConfirmPassword)}
                />
                <span className="d-block text-danger">
                  {errors?.confirmPassword}
                </span>

                <input
                  type="submit"
                  ref={regBtn}
                  onClick={registerUser}
                  className="field-submit form-control"
                  value="Register"
                />
              </div>
              {props.error != null ? (
                <ToastContainer autoClose={2500} />
                // <div className=""> {props.error} </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="col-md-5 content-images pl-md-5 d-none d-md-block mt-5 text-center">
            <div className="gallery register">
              <div className="mask-radius"></div>
              <img src={img} className="fit-image" alt="register" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return { register: state, error: state.register };
};

export default connect(mapStateToProps, { register })(Register);