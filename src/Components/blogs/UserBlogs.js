import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import { fetchUserBlogs, deleteBlog } from "../../Actions/blogsActions";
import "./css/style.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const UserBlogs = (props) => {
  const [open, setOpen] = React.useState(false);
  const [articleId, setarticleId] = React.useState("");

  const handleClickOpen = (id) => {
    setarticleId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.fetchUserBlogs(props.id);
  }, []);
  const history = useHistory();

  const deleteArticle = async function (id) {
    await props.deleteBlog(id);
    toast("article deleted");
    props.fetchUserBlogs(props.id);
    setOpen(false);
  };

  const editArticle = async function (id) {
    history.push("/blog", id);
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
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Delete blog?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete this blog?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  No
                </Button>
                <Button
                  onClick={() => deleteArticle(articleId)}
                  color="primary"
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
            <div key={blog._id}>
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
                  <div className="col-3">
                    <button
                      className="m-2"
                      onClick={() => editArticle(blog._id)}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleClickOpen(blog._id)}>
                      Delete
                    </button>
                  </div>
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
  return { blogs: state.myBlogs, id: state.auth.user, msg: state.crudMsg };
};

export default connect(mapStateToProps, { fetchUserBlogs, deleteBlog })(
  UserBlogs
);
