import logo from './logo.svg';
import './App.css';

import BlogsList from './Components/BlogsList';
import BlogDetail from './Components/BlogDetail';
import UserBlogs from './Components/UserBlogs';

function App() {
  const id = "609e5cb2244d333e50a4ca29";
  const userId = "609bf15dad7bf640a861aef6";
  return (
    <div className="App">
      <BlogDetail blogId={id}/>
      <BlogsList />
      <UserBlogs userId={userId} />

    </div>
  );
}

export default App;