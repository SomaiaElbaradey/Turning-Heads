import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import { fetchUserBlogs } from "../../Actions/blogsActions";
import { fetchUser, isFollowed, newFollow, unFollow } from "../../Actions/user";
import img from "../../img/02.png";

const Profile = (props) => {
  const userId = props.location.state;
  useEffect(() => {
    props.fetchUserBlogs(userId);
    props.fetchUser(userId);
    if (props.isFollowed(userId) == false) setFollowed(false);
  }, []);
  const folo = props.isFollowed;
  const [followed, setFollowed] = useState(folo);
  const history = useHistory();
  // useEffect(() => {
  //   if (props.followMsg) toast(props.followMsg);
  // }, [props.followMsg]);

  const details = (id) => {
    history.push("/blogdetails", id);
  };

  let newFollowing = async function () {
    await props.newFollow(userId);
    await setFollowed(true);
  };

  let newUnfollow = async function () {
    await props.unFollow(userId);
    await setFollowed(false);
  };

  const { blogs } = props;
  if (!blogs) {
    return <div>No Blogs Yet!</div>;
  }
  console.log(followed);
  return (
    <div className="container p-3">
      <div class="container prof-img">
        <img alt="profile" src={img} width="119" />
        <div class="row align-items-center">
          <div class="col-md-12 user-name-prof">
            <h4>
              {props.user.firstName} {props.user.lastName}{" "}
              {followed === true ? (
                <button className="following-button" onClick={newUnfollow}>
                  Following
                </button>
              ) : (
                <button className="follow-button" onClick={newFollowing}>
                  + Follow
                </button>
              )}
            </h4>
          </div>
          <div class="col-md-12 user-name-prof">
            <h4>
              {props.user.followers ? props.user.followers.length : " "}{" "}
              <span className="follo-user">followers</span> &emsp;{" "}
              {props.user.following ? props.user.following.length : " "}{" "}
              <span className="follo-user">following</span>
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
                        return <span className="blogTag">#{element} </span>;
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
  console.log(state);
  return {
    blogs: state.myBlogs,
    id: state.auth.user,
    msg: state.crudMsg,
    user: state.user,
    isFollowed: state.isFollowed,
    followMsg: state.followMsg,
  };
};

export default connect(mapStateToProps, {
  fetchUserBlogs,
  fetchUser,
  isFollowed,
  newFollow,
  unFollow,
})(Profile);
