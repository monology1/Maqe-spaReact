import React, { Component } from "react";
import "./App.css";
import User from "./user/User";
import Post from "./post/Post";
import { Route, Routes } from "react-router-dom";
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
        Hello {name}
        <Routes>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
