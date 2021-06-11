import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addComment, deleteComment } from "../../Actions/commentActions";
import { fetchOneBlog } from "../../Actions/blogsActions";
import { fetchBlogComments } from "../../Actions/commentActions";

const BlogsDetail = (props) => {
  const [comment, setComment] = useState("");
  const setInput = (setter) => (event) => setter(event.currentTarget.value);
  const id = props.location.state;

  useEffect(() => {
    props.fetchOneBlog(id);
    props.fetchBlogComments(id);
  }, []);

  const postComment = (id) => {
    props.addComment(id, { username: "username", body: comment });
    toast("The comment has been added");
  };

  const deleteComment = async function (id, comment) {
    await props.deleteComment(id, comment);
    await props.fetchBlogComments(id);
    toast("the comment has been deleted");
  };

  const blog = props.blog[0];
  if (!blog || blog === {}) {
    return null;
  }
  return (
    <div>
      <div className="container">
        <div className="p-4">
          <h1>{blog.title}</h1>
        </div>
        <div key={blog._id}>
          <i className="large middle aligned icon user" />
          <div className="card m-3 p-3">
            <div className="description">
              <h2 className="blogTitle">{blog.title}</h2>
              <p className="blogBody">{blog.body}</p>
            </div>
            <div className="text-center">
              <img src={blog.imgUrl} className="img-fluid" alt=""></img>
            </div>
            <p>
              {blog.tags.map((element) => {
                return <span className="blogTag">#{element} </span>;
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="large middle aligned icon user">
          <div className="card m-3 p-3">
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
      </div>
      <div className="container">
        <div className="large middle aligned icon user">
          <div className="card m-3 p-3">
            <p>
              {props.comments.map((comment) => {
                return (
                  <div className="row commentDiv">
                    <p className="blogTag col-9" key={Math.random()}>
                      <span className="commenter">{comment.username}:</span>{" "}
                      {comment.body}{" "}
                    </p>
                    <div className="col-md-3">
                      <a>Edit</a> |
                      <a onClick={() => deleteComment(blog._id, comment._id)}>
                        | Delete
                      </a>
                    </div>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blog: state.blogs,
    comments: state.comments,
    msg: state.commentCRUD,
  };
};

export default connect(mapStateToProps, {
  fetchOneBlog,
  addComment,
  fetchBlogComments,
  deleteComment,
})(BlogsDetail);
