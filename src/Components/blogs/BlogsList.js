import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../Actions/blogsActions";
import { addComment } from "../../Actions/commentActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const BlogsList = (props) => {
  const [comment, setComment] = useState("");
  const setInput = (setter) => (event) => setter(event.currentTarget.value);

  useEffect(() => {
    props.fetchBlogs();
  }, []);

  const postComment = (id) => {
    props.addComment(id, { username: "username", body: comment });
    toast(props.msg);
  };

  const history = useHistory();

  const details = (id) => {
    console.log(id);
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
                    <p className="blogBody">{blog.body}</p>
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
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Comment"
                      onInput={setInput(setComment)}
                    />
                  </div>
                  <div className="col-6 git-form">
                    <button
                      type="submit"
                      className="mt-3 shadow btn-colord btn-theme"
                      onClick={() => postComment(blog._id)}
                    >
                      <span>Send</span>
                    </button>
                  </div>
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
  return { blogs: state.blogs, msg: state.commentCRUD };
};

export default connect(mapStateToProps, { fetchBlogs, addComment })(BlogsList);
