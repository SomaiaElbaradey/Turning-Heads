import React, { useEffect } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { getProfile } from "./../actions/profile.action";
import { authLogout } from "./../Actions/authActions";

const Header = (props) => {

  const handleLogout = () => {
    props.authLogout();
    return <Redirect to="/" />;
  };
  console.log("is Auth", props.isAuth);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">

          <div className="collapse text-center navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/myBlogs"
                >
                  My Blogs
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  data-toggle="
                >
                  About
                </NavLink>
              </li> */}

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {!props.isAuth && (
            <Link className=" big-screen  btn-custom mr-3 loginNav" to="/login">
              Signup / login
            </Link>
          )}
          {props.isAuth && (
            <button
              className=" big-screen  btn-custom mr-3"
              onClick={handleLogout}
            >
              Sign out
            </button>
          )}
        </div>
      </nav>

    </>
  );
};
const mapStateToProps = (state) => {
  console.log("navbar visited", state);
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {authLogout})(Header);
