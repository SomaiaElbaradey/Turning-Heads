import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import BlogsList from "./Components/blogs/BlogsList";
import BlogDetail from "./Components/blogs/BlogDetail";
import UserBlogs from "./Components/blogs/UserBlogs";
import Register from "./Components/user/Register";
import Login from "./Components/user/Login";
import Header from "./Components/Header";
import NewBlog from "./Components/blogs/NewBlog";
import Footer from "./Components/Footer";

function App() {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mainDiv">
          <Switch>
            {isLoggedIn && (
              <>
                <Route exact path="/myBlogs" component={UserBlogs} />
                <Route exact path="/" component={UserBlogs} />
                <Route exact path="/newBlog" component={NewBlog} />
              </>
            )}
            {!isLoggedIn && (
              <>
                <Route exact path="/newBlog" component={Register} />
                <Route exact path="/myBlogs" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Register} />
                <Redirect exact to="/" component={Register} />
              </>
            )}
          </Switch>

          {/* 
          <Route path="/not-found" component={Page404} />
          <Redirect to="/not-found" /> */}
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
