import React from "react";
import { connect } from "react-redux";
import { fetchOneBlog } from "../../Actions/blogsActions";

class BlogsDetail extends React.Component {
  componentDidMount() {
    this.props.fetchOneBlog(this.props.location.state);
  }

  render() {
    const { blog } = this.props;
    if (!blog) {
      return null;
    }
    return (
      <div className="header" key={blog._id}>
        {blog.title}
        <p> {blog.body} </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { blog: state.detailedBlog };
};

export default connect(mapStateToProps, { fetchOneBlog })(BlogsDetail);