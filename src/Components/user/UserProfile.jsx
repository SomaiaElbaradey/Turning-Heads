import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import { fetchUserBlogs, deleteBlog } from "../../Actions/blogsActions";
import { fetchUser } from "../../Actions/user";
import img from "../../img/01.png";

const UserProfile = (props) => {
  useEffect(() => {
    props.fetchUserBlogs(props.id);
    props.fetchUser(props.id);
  }, []);
  const history = useHistory();

  const details = (id) => {
    history.push("/blogdetails", id);
  };

  const { blogs } = props;
  if (!blogs) {
    return <div>No Blogs Yet!</div>;
  }
  return (
    <div className="container p-3">
      <div class="container prof-img">
        <img src={img} width="119" />
        <div class="row align-items-center">
          <div class="col-md-12 user-name-prof">
            <h4>
              {props.user.firstName} {props.user.lastName}
            </h4>
          </div>
          <div class="col-md-12 user-name-prof">
            <h4>
              {props.user.followers.length}{" "}
              <span className="follo-user">followers</span> &emsp;{" "}
              {props.user.following.length}{" "}
              <span className="follo-user">following</span>
            </h4>
          </div>
        </div>
      </div>

      {blogs.map((blog) => {
        return (
          <>
            <div className="clickable-container" key={blog._id} onClick={() => details(blog._id)}>
              <i className="large middle aligned icon user" />
              <div className="card m-3 p-3">
                <div className="row">
                  <div className="description col-md-8">
                    <h2 className="blogTitle">{blog.title}</h2>
                    <p className="blogBody">{blog.body.slice(0, 319)}</p>
                    <p>
                      {blog.tags.map((element) => {
                        return <span className="blogTag">#{element} </span>;
                      })}
                    </p>
                  </div>
                  <div className="col-md-3 text-center">
                    <img src={blog.imgUrl} className="img-fluid" alt=""></img>
                  </div>
                </div>
                <div className="row">
                  <ToastContainer autoClose={2500} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    blogs: state.myBlogs,
    id: state.auth.user,
    msg: state.crudMsg,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  fetchUserBlogs,
  deleteBlog,
  fetchUser,
})(UserProfile);
