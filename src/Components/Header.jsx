import React, { useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authLogout } from "./../Actions/authActions";

const Header = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    props.authLogout();
    history.push("/login");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse text-center navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/myBlogs">
                  My Blogs
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
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
  return {
    isAuth: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { authLogout })(Header);