import React, { Component } from "react";
import "./App.css";
// import User from "./user/User";
import Post from "./post/Post";
// import { Route, Routes, Link } from "react-router-dom";
import moment from "moment-timezone";
import axios from "axios";
class App extends Component {
  state = {
    author: []
  };
  componentDidMount() {
    axios.get("http://maqe.github.io/json/authors.json").then((res) => {
      const author = res.data;
      this.setState({ author });
    });
  }
  render() {
    const author = this.state.author;
    
    const timezone = moment.tz.guess(); //use library to get timezone
    const regxTime = timezone.replace("_", " "); //replace "_" to " "
    // console.log(timezone);
    return (
      <div>
        <div>
          <h1>MAQE Forum</h1>
        </div>
        <div className="Timezone">
          <p>Your current timezone is: {regxTime}</p>
        </div>
        <div className="Posts">
          <Post author={author}/>
        </div>
      </div>
    );
  }
}

export default App;
