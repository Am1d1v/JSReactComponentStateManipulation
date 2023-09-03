import './App.css';
import React from 'react';






class App extends React.Component {

constructor(){
  super();

  this.state = {
    count: 0,
    isCounting: false
  }
}

componentDidMount(){

}

componentDidUpdate(){

}

handleStart = () => {
  this.setState({isCounting: true});

  this.counterId = setInterval(() => {
    this.setState({count: this.state.count + 1})
  }, 1000)
}


handleStop = () => {
  this.setState({isCounting: false});

  clearInterval(this.counterId);
}


handleReset = () => {
  this.setState({count: this.state.count = 0})
}

  render(){
    return (
      <div className="App">   
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (<button onClick={this.handleStart}>Start</button>) : (
        <button onClick={this.handleStop}>Stop</button>)}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}



export default App;