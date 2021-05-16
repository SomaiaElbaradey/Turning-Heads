import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../Actions/blogsActions";

class BlogsList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderList() {
    return this.props.blogs.map((blog) => {
      return (
        <div className="item" key={blog.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>{blog.imgUrl}</p>
              <p>
                {blog.tags.map((element) => {
                  return <span>#{element} </span>;
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { blogs: state.blogs };
};

export default connect(mapStateToProps, { fetchBlogs })(BlogsList);
