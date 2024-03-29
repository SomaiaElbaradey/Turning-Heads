import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../Actions/authActions";
import "./css/register.css";
import { Link, useHistory } from "react-router-dom";
import img from "../../img/01.png";

const Login = (props) => {
  const history = useHistory();

  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors] = useState(null);

  let regBtn = useRef();
  const setInput = (setter) => (event) => setter(event.currentTarget.value);

  const LoginUser = () => {
    props.onAuth({ mail, password }, true);
  };

  if (props.isAuthenticated === true) {
    history.push("/home");
    window.location.reload();
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 align-self-start text-center m-3">
            <div className="row form-content">
              <div className="col-12 mt-4">
                <div className="step-title mt-4">
                  <h2 className="featured">Sign in Turning Heads </h2>
                  <p>
                    New to Turning Heads?{" "}
                    <Link to="/signup" className="Msg">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div id="RegForm" className="row text-center form-content">
              <div className="col-12 step-group">
                <input
                  type="text"
                  placeholder="Email *"
                  name="mail"
                  id="mail"
                  value={mail}
                  className="form-control field-name"
                  onInput={setInput(setmail)}
                />
                <span className="d-block text-danger">{errors?.mail}</span>

                <input
                  type="password"
                  placeholder="Password *"
                  name="password"
                  id="password"
                  value={password}
                  onInput={setInput(setPassword)}
                  className="form-control field-password"
                />
                <span className="d-block text-danger">{errors?.password}</span>

                <input
                  type="submit"
                  ref={regBtn}
                  onClick={LoginUser}
                  className="field-submit form-control"
                  value="Login"
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
              <img src={img} className="fit-image" alt="" />
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
  const { errMsg, token, user, isLoading, isAuthenticated } = state.auth;
  return {
    errMsg,
    token,
    user,
    isLoading,
    isAuthenticated,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
