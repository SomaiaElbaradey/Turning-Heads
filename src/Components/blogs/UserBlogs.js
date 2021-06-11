import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserBlogs, deleteBlog } from "../../Actions/blogsActions";
import "./css/style.css";
import { Link } from "react-router-dom";

const UserBlogs = (props) => {
  useEffect(() => {
    props.fetchUserBlogs(props.id);
  }, []);

  const deleteArticle = (id) => {
    props.deleteBlog(id);
  };

  const { blogs } = props;
  if (!blogs) {
    return <div>No Blogs Yet!</div>;
  }
  return (
    <div className="container p-3">
      <div className="p-4">
        <h1>Your Blogs</h1>
        <Link to="/newBlog" className="Msg">
          New Blog
        </Link>
      </div>

      {blogs.map((blog) => {
        return (
          <>
            <div key={blog.id}>
              <i className="large middle aligned icon user" />
              <div className="card m-3 p-3">
                <div className="row">
                  <div className="description col-md-8">
                    <h2 className="blogTitle">{blog.title}</h2>
                    <p className="blogBody">{blog.body}</p>
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
                  <div className="col-1">
                    <p>Edit</p>
                  </div>
                  <div className="col-1">
                    <button onClick={() => deleteArticle(blog._id)}>
                      Delete
                    </button>
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
  return { blogs: state.blogs, id: state.auth.user };
};

export default connect(mapStateToProps, { fetchUserBlogs, deleteBlog })(
  UserBlogs
);
