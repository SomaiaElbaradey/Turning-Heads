import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import BlogsList from "./Components/blogs/BlogsList";
import BlogDetail from "./Components/blogs/BlogDetail";
import UserBlogs from "./Components/blogs/UserBlogs";
import Register from "./Components/user/Register";
import Login from "./Components/user/Login";
import NewBlog from "./Components/blogs/NewBlog";

function App() {
  // const id = "609e5cb2244d333e50a4ca29";
  // const userId = "60a087ed9d2cfc42a409d493";
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/blogs/:id" component={Blog} />
          <Route path="/category/:name" component={CategoryBlogs} />
          <Route path="/home" component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog/new" component={NewBlog} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register}/>
          <Route exact path="/userBlogs" component={UserBlogs} />
          {/* <Route path="/signup" component={Signup} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/not-found" component={Page404} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

// {/* <BlogDetail blogId={id}/>
// <BlogsList />
// <UserBlogs userId={userId} /> */}
// {/* <Register /> */}
// {/* <Login /> */}
// {/* <NewBlog /> */}
