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
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mainDiv">
          <Switch>
            {/* 
          <Route path="/home" component={Home} />
          */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/myBlogs" component={UserBlogs} />
            <Route exact path="/newBlog" component={NewBlog} />
            {/* 
          <Route path="/not-found" component={Page404} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" /> */}
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;