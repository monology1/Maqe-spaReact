import React, { Component } from "react";
import "./App.css";
import User from "./user/User";
import Post from "./post/Post";
import { Route, Routes, Link } from "react-router-dom";
class App extends Component {
  state = {
    name: "modern",
  };
  onNameChange = (name) => {
    this.setState({ name: name });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <div>Hello {name}</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>  
          <Link to="/posts">Posts</Link>
        </div>
        <Routes>
          <Route path="/users" element={<User />}></Route>
          <Route path="/posts" element={<Post />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
