import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import { fetchUserBlogs, deleteBlog } from "../../Actions/blogsActions";
import { fetchUser, follower, following } from "../../Actions/user";
import img from "../../img/01.png";
import img2 from "../../img/02.png";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const UserProfile = (props) => {
  const [openFollower, setOpenFollower] = React.useState(false);
  const [openFollowing, setOpenFollowing] = React.useState(false);

  const handleClickOpenfollowers = () => {
    props.follower(props.id);
    setOpenFollower(true);
  };

  const handleClosefollowers = () => {
    setOpenFollower(false);
  };

  const handleClickOpenFollowing = () => {
    props.following(props.id);
    setOpenFollowing(true);
  };

  const handleClosefollowing = () => {
    setOpenFollowing(false);
  };

  useEffect(() => {
    props.fetchUserBlogs(props.id);
    props.fetchUser(props.id);
  }, []);
  const history = useHistory();

  const details = (id) => {
    history.push("/blogdetails", id);
  };

  const { blogs } = props;
  if (!blogs) {
    return <div>No Blogs Yet!</div>;
  }
  return (
    <div className="container p-3">
      <Dialog
        open={openFollower}
        onClose={handleClosefollowers}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="text-center bg-dark text-light">{"Followers"}</DialogTitle>

        <DialogContent className="m-4">
          {props.followers.length === 0 ? (
            <h5>You have NO Followers yet.</h5>
          ) : (
            props.followers.map((names) => {
              return (
                <>
                  <DialogContentText className="mb-1">
                    <img src={img2} alt="img" width="41"></img>
                    &ensp; {names.name}
                  </DialogContentText>
                  <hr/>
                </>
              );
            })
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={openFollowing}
        onClose={handleClosefollowing}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="text-center bg-dark text-light">{"Following"}</DialogTitle>

        <DialogContent className="m-4">
          {props.followings.length === 0 ? (
            <h5>You have NO followings yet.</h5>
          ) : (
            props.followings.map((names) => {
              return (
                <>
                  <DialogContentText className="mb-1">
                    <img src={img2} alt="img" width="41"></img>
                    &ensp; {names.name}
                  </DialogContentText>
                  <hr/>
                </>
              );
            })
          )}
        </DialogContent>
      </Dialog>

      <div className="container prof-img">
        <img alt="profile" src={img} width="119" />
        <div className="row align-items-center">
          <div className="col-md-12 user-name-prof">
            <h4>
              {props.user.firstName} {props.user.lastName}
            </h4>
          </div>
          <div className="col-md-12 user-name-prof">
            <h4>
              {props.user.followers ? props.user.followers.length : " "}{" "}
              <span
                className="follo-user clickable-container"
                onClick={handleClickOpenfollowers}
              >
                followers
              </span>{" "}
              &emsp; {props.user.following ? props.user.following.length : " "}{" "}
              <span
                className="follo-user clickable-container"
                onClick={handleClickOpenFollowing}
              >
                following
              </span>
            </h4>
          </div>
        </div>
      </div>

      {blogs.map((blog) => {
        return (
          <>
            <div
              className="clickable-container"
              key={blog._id}
              onClick={() => details(blog._id)}
            >
              <i className="large middle aligned icon user" />
              <div className="card m-3 p-3">
                <div className="row">
                  <div className="description col-md-8">
                    <h2 className="blogTitle">{blog.title}</h2>
                    <p className="blogBody">{blog.body.slice(0, 319)}</p>
                    <p>
                      {blog.tags.map((element) => {
                        return (
                          <span key={Math.random()} className="blogTag">
                            #{element}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div className="col-md-3 text-center">
                    <img src={blog.imgUrl} className="img-fluid" alt=""></img>
                  </div>
                </div>
                <div className="row">
                  <ToastContainer autoClose={2500} />
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
  return {
    blogs: state.myBlogs,
    id: state.auth.user,
    msg: state.crudMsg,
    user: state.user,
    followers: state.followers,
    followings: state.following,
  };
};

export default connect(mapStateToProps, {
  fetchUserBlogs,
  deleteBlog,
  fetchUser,
  following,
  follower,
})(UserProfile);
