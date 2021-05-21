import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../Actions/authActions";

const Login = (props) => {
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  let regBtn = useRef();
  const setInput = (setter) => (event) => setter(event.currentTarget.value);

  const LoginUser = () => {
    console.log("props from Login component", props);
    props.onAuth({ mail, password }, true);
  };

  return (
    <>
      <div
        style={{ overflow: "hidden", marginTop: "10rem", width: "20rem" }}
        className="widget newslettre-form  mx-auto text-center Login d-flex flex-nowrap"
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

          <button ref={regBtn} onClick={LoginUser} className="btn-custom">
            Login
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
