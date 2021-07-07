import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchBlogs } from "../../Actions/blogsActions";
import img from "../../img/02.png";

const BlogsList = (props) => {
  useEffect(() => {
    props.fetchBlogs();
  }, []);

  const history = useHistory();

  const details = (id) => {
    history.push("/blogdetails", id);
  };

  const profile = (userId) => {
    if (userId === props.id) history.push("/profile", userId);
    else history.push("/userprofile", userId);
  };

  const { blogs } = props;
  if (!blogs) {
    return null;
  }
  return (
    <div className="container">
      <div className="p-4">
        <h1>Recent Blogs</h1>
      </div>

      {blogs.map((blog) => {
        return (
          <>
            <div key={blog._id}>
              <i className="large middle aligned icon user" />
              <div className="card m-3 p-3">
                <div className="row">
                  <div className="col-12 m-2"></div>
                  <div className="description col-md-8">
                    <h2 className="blogTitle">
                      <img
                        width="40"
                        alt="img"
                        src={img}
                        className="profile-img clickable-container"
                        onClick={() => profile(blog.userId)}
                      />
                      : {blog.title}
                    </h2>
                    <p
                      className="blogBody clickable-container"
                      onClick={() => details(blog._id)}
                    >
                      {blog.body.slice(0, 319)}{" "}
                    </p>
                    <p>
                      {blog.tags.map((element) => {
                        return (
                          <span className="blogTag" key={Math.random()}>
                            #{element}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div className="col-md-3 text-center">
                    <img src={blog.imgUrl} className="img-fluid" alt=""></img>
                  </div>
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
  return { blogs: state.blogs, id:state.auth.user };
};

export default connect(mapStateToProps, { fetchBlogs })(BlogsList);
