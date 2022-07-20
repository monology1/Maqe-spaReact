import React, { Component } from "react";
// import axios from "axios";
import withRequest from "../lib/withRequest";
class Post extends Component {
  // constructor(){
  //     super();
  //    console.log('User constructor');
  // };

  onChange = (e) => {
    console.log(e.target.value);
    this.props.onNameChange(e.target.value);
  };
  render() {
    // const {name} = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>userId</td>
              <td>Id</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((post) => (
              <tr key = {post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withRequest("https://jsonplaceholder.typicode.com/posts")(Post);
