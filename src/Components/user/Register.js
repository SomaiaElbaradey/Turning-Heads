import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../Actions/authActions";

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
      <div
        style={{ overflow: "hidden", marginTop: "10rem", width: "20rem" }}
        className="widget newslettre-form  mx-auto text-center register d-flex flex-nowrap"
      >
        <div id="RegForm" style={{ width: "100%" }}>
          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="mail"
                name="mail"
                id="mail"
                value={mail}
                onInput={setInput(setmail)}
              />
              <span className="d-block text-danger">{errors?.mail}</span>
            </div>
          </div>

          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="firstName"
                name="firstName"
                id="firstName"
                value={firstName}
                onInput={setInput(setfirstName)}
              />
              <span className="d-block text-danger">{errors?.firstName}</span>
            </div>
          </div>

          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="lastName"
                name="lastName"
                id="lastName"
                value={lastName}
                onInput={setInput(setlastName)}
              />
              <span className="d-block text-danger">{errors?.lastName}</span>
            </div>
          </div>

          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                value={username}
                onInput={setInput(setusername)}
              />
              <span className="d-block text-danger">{errors?.username}</span>
            </div>
          </div>


          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onInput={setInput(setPassword)}
              />
              <span className="d-block text-danger">{errors?.password}</span>
            </div>
          </div>

          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                id="confirm-password"
                value={confirmPassword}
                onInput={setInput(setConfirmPassword)}
              />
              <span className="d-block text-danger">
                {errors?.confirmPassword}
              </span>
            </div>
          </div>

          <button ref={regBtn} onClick={registerUser} className="btn-custom">
            Register
          </button>
          <hr />
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
    isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
