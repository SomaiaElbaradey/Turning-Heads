import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import BlogsList from "./Components/blogs/BlogsList";
import BlogDetail from "./Components/blogs/BlogDetail";
import UserBlogs from "./Components/blogs/UserBlogs";
import Register from "./Components/user/Register";
import Login from "./Components/user/Login";
import Header from "./Components/Header";
import NewBlog from "./Components/blogs/NewBlog";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import BlogUpdate from "./Components/blogs/BlogUpdate";
import UserProfile from "./Components/user/UserProfile";
import Profile from "./Components/user/Profile";

function App() {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mainDiv">
          <Switch>
            <Route exact path="/home" component={BlogsList} />
            <Route exact path="/blogDetails" component={BlogDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/not-found" component={Error} />
            <Redirect from="/" exact to="/home" />
            {isLoggedIn && (
              <Switch>
                <Route exact path="/myBlogs" component={UserBlogs} />
                <Route exact path="/newBlog" component={NewBlog} />
                <Route exact path="/blog" component={BlogUpdate} />
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/userprofile" component={Profile} />
                <Redirect to="/not-found" />
              </Switch>
            )}
            {!isLoggedIn && (
              <Switch>
                <Route exact path="/myBlogs" component={Login} />
                <Route exact path="/profile" component={Login} />
                <Route exact path="/profile" component={Login} />
                <Route exact path="/userprofile" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Register} />
                <Redirect to="/not-found" />
              </Switch>
            )}
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
