import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchBlogs } from "../../Actions/blogsActions";

const BlogsList = (props) => {

  useEffect(() => {
    props.fetchBlogs();
  }, []);

  const history = useHistory();

  const details = (id) => {
    history.push("/blogdetails", id);
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
            <div
              key={blog._id}
              onClick={() => details(blog._id)}
              className="clickable-container"
            >
              <i className="large middle aligned icon user" />
              <div className="card m-3 p-3">
                <div className="row">
                  <div className="description col-md-8">
                    <h2 className="blogTitle">{blog.title}</h2>
                    <p className="blogBody">{(blog.body).slice(0,319)}</p>
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
  return { blogs: state.blogs};
};

export default connect(mapStateToProps, { fetchBlogs })(BlogsList);
