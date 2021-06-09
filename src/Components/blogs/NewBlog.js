import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addBlog } from "../../Actions/blogsActions";

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
      <div
        style={{ overflow: "hidden", marginTop: "10rem", width: "20rem" }}
        className="widget newslettre-form  mx-auto text-center NewBlog d-flex flex-nowrap"
      >
        <div id="RegForm" style={{ width: "100%" }}>
          <div className="form-flex mb-2">
            <div className="form-group">
              <input
                type="text"
                placeholder="title"
                name="title"
                id="title"
                value={title}
                onInput={setInput(settitle)}
              />
              <span className="d-block text-danger">{errors?.title}</span>
            </div>
          </div>

          <div className="form-group">
            <textarea
              placeholder="body"
              name="body"
              id="body"
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
              id="imgUrl"
              value={imgUrl}
              onInput={setInput(setimgUrl)}
            />
            <span className="d-block text-danger">{errors?.imgUrl}</span>
          </div>

          <button ref={regBtn} onClick={NewBlogUser} className="btn-custom">
            Create Blog
          </button>
        </div>
        {props.error != null ? (
          <div className=""> {props.error} </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { blogs: state.blogs, error: state.blogs };
};

export default connect(mapStateToProps, { addBlog })(NewBlog);
