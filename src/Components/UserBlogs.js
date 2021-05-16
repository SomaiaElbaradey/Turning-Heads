import React from "react";
import { connect } from "react-redux";
import { fetchUserBlogs } from "../Actions/blogsActions";

class UserBlogs extends React.Component {
  componentDidMount() {
      console.log(this.props.userId);
    this.props.fetchUserBlogs(this.props.userId);
  }

  renderList() {
      console.log(this.props);
      
    const { blogs } = this.props;
    console.log(blogs);

    if (!blogs) {
      return null;
    }
    return <h1>{blogs.title}</h1>
    // return blogs.map((blog) => {
    //   return (
    //     <div className="item" key={blog.id}>
    //       <i className="large middle aligned icon user" />
    //       <div className="content">
    //         <div className="description">
    //           <h2>{blog.title}</h2>
    //           <p>{blog.body}</p>
    //           <p>{blog.imgUrl}</p>
    //           <p>
    //             {blog.tags.map((element) => {
    //               return <span>#{element} </span>;
    //             })}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { blogs: state.blogs.find( blog => blog.userId == ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUserBlogs })(UserBlogs);
