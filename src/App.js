import React,{ Component } from 'react';
import './App.css';
import User from './user/User';
class App extends Component {
    state = {
      name:'modern'
    }
    onNameChange = name =>{
      this.setState({name:name});
    }
  render(){
    const {name} = this.state;
    return (
      <div className="App">
        Hello World {name}
        <User name={name} onNameChange={this.onNameChange}/>
      </div>
    );
  }
}

export default App;
