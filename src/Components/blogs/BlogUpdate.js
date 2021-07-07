import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchOneBlog, editBlog } from "../../Actions/blogsActions";

const BlogUpdate = (props) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const setInput = (setter) => (event) => setter(event.currentTarget.value);
  const id = props.location.state;

  let regBtn = useRef();
  const blog = props.blog[0];

  useEffect(() => {
    props.fetchOneBlog(id);
    settitle(blog.title);
    setbody(blog.body);
    setimgUrl(blog.imgUrl);
  }, []);

  useEffect(() => {
    if (typeof props.msg === "object")
      toast("Article was edited successfully");
    if (props.msg !== "") toast(props.msg);
  }, [props.msg]);

  const editArticle = () => {
    props.editBlog(id, { title, body, imgUrl, tags: blog.tags });
  };

  if (!blog || blog === {}) {
    return null;
  }
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="header">Edit Your Blog</h1>
          <div className="row">
            <div className="form-group">
              <input
                type="text"
                placeholder="title"
                name="title"
                className="form-control field-name"
                id="title"
                value={title}
                onInput={setInput(settitle)}
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="body"
                name="body"
                id="body"
                className="form-control"
                value={body}
                onInput={setInput(setbody)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="imgUrl"
                name="imgUrl"
                className="form-control"
                id="imgUrl"
                value={imgUrl}
                onInput={setInput(setimgUrl)}
              />
            </div>
            <div classNam="text-center ml-5">
              <button
                className="form-control field-submit newBlog-btn"
                ref={regBtn}
                onClick={editArticle}
              >
                Edit Blog
              </button>
              {props.crudMsg != null || "" ? (
                <div className="blogMsg"> {props.crudMsg} </div>
              ) : (
                <div></div>
              )}
            </div>
            <ToastContainer autoClose={2500} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blog: state.blogs,
    msg: state.crudMsg,
  };
};

export default connect(mapStateToProps, {
  fetchOneBlog,
  editBlog,
})(BlogUpdate);
