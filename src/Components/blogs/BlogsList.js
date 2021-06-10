import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../Actions/blogsActions";
import { Link, Redirect } from "react-router-dom";

class BlogsList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderList() {
    const { blogs } = this.props;
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
                      <img src={blog.imgUrl} className="img-fluid"></img>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Comment"
                      />
                    </div>
                    <div className="col-6 git-form">
                      <button
                        type="submit"
                        className="mt-3 shadow btn-colord btn-theme"
                      >
                        <span>Send</span>
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
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs };
};

export default connect(mapStateToProps, { fetchBlogs })(BlogsList);
