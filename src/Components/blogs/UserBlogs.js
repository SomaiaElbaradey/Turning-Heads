import React from "react";
import { connect } from "react-redux";
import { fetchUserBlogs } from "../../Actions/blogsActions";
import "./css/style.css";
import { Link, Redirect } from "react-router-dom";

class UserBlogs extends React.Component {
  componentDidMount() {
    this.props.fetchUserBlogs(this.props.id);
  }

  renderList() {
    const { blogs } = this.props;
    if (!blogs) {
      return <div>No Blogs Yet!</div>;
    }
    return (
      <div className="container">
        <h1>Your Blogs</h1>
        <Link to="/newBlog" className="Msg">
          New Blog
        </Link>
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
  return { blogs: state.blogs, id: state.auth.user };
};

export default connect(mapStateToProps, { fetchUserBlogs })(UserBlogs);
