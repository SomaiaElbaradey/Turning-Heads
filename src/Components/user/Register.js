import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../Actions/authActions";
import { Link, Redirect } from "react-router-dom";
import img from "../../fonts/01.png";

const Register = (props) => {
  const [mail, setmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  let regBtn = useRef();
  const setInput = (setter) => (event) => setter(event.currentTarget.value);

  const registerUser = () => {
    console.log("props from register component", props);
    props.onAuth({ mail, firstName, lastName, username, password }, true);
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
              {props.errMsg != null ? (
                <div className="Error"> {props.errMsg} </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="col-md-5 content-images pl-md-5 d-none d-md-block mt-5 text-center">
            <div className="gallery register">
              <div className="mask-radius"></div>
              <img src={img} className="fit-image" alt="register Image" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userData, isSignup) => dispatch(auth(userData, isSignup)),
  };
};

const mapStateToProps = (state, props) => {
  console.log("state from comp", state);
  const { errMsg, token, user, isLoading } = state.auth;

  return {
    errMsg,
    token,
    user,
    isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
