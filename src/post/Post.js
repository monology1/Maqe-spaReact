import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  // constructor(){
  //     super();
  //    console.log('User constructor');
  // };
  state = {
    data: [],
  };
  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    this.setState({ data: result.data });
  }
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
            {this.state.data.map((user) => (
              <tr>
                <td>{user.userId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Post;
