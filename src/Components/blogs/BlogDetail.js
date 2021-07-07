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
import img from "../../img/01.png";
import trash from "../../img/svg/trash.svg";
import edit from "../../img/svg/edit.svg";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const BlogsDetail = (props) => {
  const [comment, setComment] = useState("");
  const [commentId, setcommentId] = useState("");
  const setInput = (setter) => (event) => setter(event.currentTarget.value);
  const id = props.location.state;
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setcommentId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const postComment = async function (id) {
    if (comment === "") {
      toast("comment can't be empty.");
    } else {
      await props.addComment(id, { username: "username", body: comment });
      await props.fetchBlogComments(id);
      setComment("");
    }
  };

  const deleteComment = async function (comment) {
    await props.deleteComment(id, comment);
    await props.fetchBlogComments(id);
    setOpen(false);
  };

  const fetchComment = async function (Id) {
    await setcommentId(Id);
    await props.fetchOneComment(id, Id);
  };

  const updateComment = async function () {
    await props.editComment(id, commentId, { body: comment });
    await props.fetchBlogComments(id);
    setComment("");
  };

  const blog = props.blog[0];

  if (!blog || blog === {}) {
    return null;
  }
  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Comment?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this comment?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Button
              onClick={() => deleteComment(commentId)}
              color="primary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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
      {props.comments.length ? (
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
                        <Button
                          color="primary"
                          className="delete-icon"
                          onClick={() => handleClickOpen(comment._id)}
                        >
                          <img src={trash} alt="React Logo" width="20" />
                          {/* <img src={img}/> */}
                        </Button>
                        <img
                          onClick={() => fetchComment(comment._id)}
                          src={edit}
                          alt="React Logo"
                          width="20"
                        />

                        {/* |<a >| Edit</a> */}
                      </div>
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="container">
        <div className="large middle aligned icon user">
          <div className="m-3 p-3">
            <div className="row">
              <div className="col-auto">
                <img alt="comment" width="40" src={img} />
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="post-comment"
                  placeholder="Add Comment"
                  value={comment}
                  onInput={setInput(setComment)}
                />
              </div>
              <div className="col">
                <button
                  type="submit"
                  className="shadow"
                  onClick={() => postComment(blog._id, props.msg)}
                >
                  <span>Send</span>
                </button>
                <button
                  type="submit"
                  className="shadow m-2"
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
