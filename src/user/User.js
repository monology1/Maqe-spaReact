import React, { Component } from "react";
// import axios from "axios";
import withRequest from "../lib/withRequest";
class User extends Component {
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
    // console.log(this.props.data)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user) => (
              <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withRequest("https://jsonplaceholder.typicode.com/users")(User);
