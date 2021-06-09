import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addBlog } from "../../Actions/blogsActions";
import "./css/style.css";

const NewBlog = (props) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [tags, settags] = useState(["tag"]);

  const [errors, setErrors] = useState({});

  let regBtn = useRef();
  const setInput = (setter) => (event) => setter(event.currentTarget.value);

  const NewBlogUser = () => {
    console.log("props from NewBlog component", props);
    console.log({ title, body, imgUrl, tags });
    props.addBlog({ title, body, imgUrl, tags });
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="header">Create New Blog</h1>
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
              <span className="d-block text-danger">{errors?.title}</span>
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
              <span className="d-block text-danger">{errors?.body}</span>
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
              <span className="d-block text-danger">{errors?.imgUrl}</span>
            </div>
            <div classNam="text-center ml-5">
              <button
                className="form-control field-submit newBlog-btn"
                ref={regBtn}
                onClick={NewBlogUser}
              >
                Create Blog
              </button>
              {props.crudMsg != null || "" ? (
                <div className="blogMsg"> {props.crudMsg} </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { crudMsg: state.crudMsg };
};

export default connect(mapStateToProps, { addBlog })(NewBlog);
