import React from "react";
import { connect } from "react-redux";
import { fetchOneBlog } from "../Actions/blogsActions";

class BlogsDetail extends React.Component {
  componentDidMount() {
    this.props.fetchOneBlog(this.props.blogId);
  }

  render() {
    const { blog } = this.props;
    if (!blog) {
      return null;
    }
    return (
      <div className="header" key={blog.id}>
        {blog.title}
        <p> {blog.body} </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   console.log(ownProps);

  return { blog: state.blogs.find( blog => blog._id == ownProps.blogId) };
};

export default connect(mapStateToProps, { fetchOneBlog })(BlogsDetail);