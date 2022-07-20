import React,{ Component } from "react";

class User extends Component {
    // constructor(){
    //     super();
    //    console.log('User constructor');
    // };
    // componentDidMount(){
    //     console.log('User componentDidMount');
    // }
    onChange = e =>{
        console.log(e.target.value);
        this.props.onNameChange(e.target.value);
    };
  render() {
    // const {name} = this.props;
    return (
      <div>
        <div>
            <input type="text" onChange={this.onChange}/>
           
        </div>
      </div>
    );
  }
}
export default User;