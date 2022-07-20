import React, { Component } from "react";
import axios from "axios";
class User extends Component {
  // constructor(){
  //     super();
  //    console.log('User constructor');
  // };
  state = {
    data: [],
  };
  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
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
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => (
              <tr>
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
export default User;
