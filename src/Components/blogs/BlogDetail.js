import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addComment, deleteComment } from "../../Actions/commentActions";
import { fetchOneBlog } from "../../Actions/blogsActions";
import {
  fetchBlogComments,
  editComment,
  fetchOneComment,
} from "../../Actions/commentActions";

const BlogsDetail = (props) => {
  const [comment, setComment] = useState("");
  const [commentId, setcommentId] = useState("");
  const setInput = (setter) => (event) => setter(event.currentTarget.value);
  const id = props.location.state;

  useEffect(() => {
    props.fetchOneBlog(id);
    props.fetchBlogComments(id);
  }, []);

  useEffect(() => {
    if (props.oneComment[0] !== undefined) setComment(props.oneComment[0].body);
  }, [props.oneComment]);

  useEffect(() => {
    if (props.msg) toast(props.msg);
  }, [props.msg]);

  const postComment = (id) => {
    props.addComment(id, { username: "username", body: comment });
  };

  const deleteComment = async function (id, comment) {
    await props.deleteComment(id, comment);
    await props.fetchBlogComments(id);
  };

  const fetchComment = async function (Id) {
    await setcommentId(Id);
    await props.fetchOneComment(id, Id);
  };

  const updateComment = async function () {
    props.editComment(id, commentId, { body: comment });
    setComment("");
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
            <div className="row">
              <div className="description col-md-8 p-4">
                <p className="blogBody">{blog.body}</p>
                <p>
                  {blog.tags.map((element) => {
                    return <span className="blogTag">#{element} </span>;
                  })}
                </p>
              </div>
              <div className="text-center col-md-4">
                <img src={blog.imgUrl} className="img-fluid" alt=""></img>
              </div>
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
                      <a onClick={() => deleteComment(blog._id, comment._id)}>
                        Delete
                      </a>{" "}
                      |<a onClick={() => fetchComment(comment._id)}>| Edit</a>
                    </div>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="large middle aligned icon user">
          <div className="m-3 p-3">
            <div className="row">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Post Comment"
                  value={comment}
                  onInput={setInput(setComment)}
                />
              </div>
              <div className="col git-form">
                <button
                  type="submit"
                  className="mt-3 shadow"
                  onClick={() => postComment(blog._id, props.msg)}
                >
                  <span>Send</span>
                </button>
                <button
                  type="submit"
                  className="shadow"
                  onClick={updateComment}
                >
                  <span>Edit</span>
                </button>
              </div>
              <ToastContainer autoClose={2500} />
            </div>
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
    oneComment: state.oneComment,
  };
};

export default connect(mapStateToProps, {
  fetchOneBlog,
  addComment,
  fetchBlogComments,
  fetchOneComment,
  deleteComment,
  editComment,
})(BlogsDetail);
