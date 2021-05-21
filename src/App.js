import logo from './logo.svg';
import './App.css';

import BlogsList from './Components/blogs/BlogsList';
import BlogDetail from './Components/blogs/BlogDetail';
import UserBlogs from './Components/blogs/UserBlogs';
import Register from './Components/user/Register';
import Login from './Components/user/Login';
import NewBlog from './Components/blogs/NewBlog';

function App() {
  const id = "609e5cb2244d333e50a4ca29";
  const userId = "60a087ed9d2cfc42a409d493";
  return (
    <div className="App">
      {/* <BlogDetail blogId={id}/>
      <BlogsList />
      <UserBlogs userId={userId} /> */}
      {/* <Register /> */}
      <Login />
      <NewBlog />
    </div>
  );
}

export default App;