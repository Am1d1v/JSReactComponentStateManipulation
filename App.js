import './App.css';
import React from 'react';






class App extends React.Component {

state = {
  count: 0
}

handleClick = () => {
  this.setState({count: this.state.count + 1});
}

handleClick2 = () => {
  this.setState((previousState) => ({count: previousState.count + 1}))
  this.setState((previousState) => ({count: previousState.count + 1}))
  this.setState((previousState) => ({count: previousState.count + 1}))
}

  render(){
    return (
      <div className="App">
       
        <button onClick={this.handleClick}>{this.state.count}</button>
        <button onClick={this.handleClick2}>{this.state.count}</button>
      </div>
    );
  }
}



export default App;