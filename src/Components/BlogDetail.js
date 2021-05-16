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
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { blog: state.blogs.find((blog) => blog.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchOneBlog })(BlogsDetail);
