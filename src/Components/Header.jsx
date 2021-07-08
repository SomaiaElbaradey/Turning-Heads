import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authLogout } from "./../Actions/authActions";
import img from "../img/01.png";

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
            <div className="row">
              <div className="col-4">
                <NavLink className="nav-link" to="/profile">
                  <img width="30" alt="profile" src={img} className="profile-img"/>
                </NavLink>
              </div>

              <div className="col mt-2">
                <button
                  className=" big-screen  btn-custom mr-3"
                  onClick={handleLogout}
                >
                  Sign out
                </button>
              </div>
            </div>
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
