import './App.css';
import React from 'react';






class App extends React.Component {

state = {
  count: 0
}

handleClick = () => {
  this.setState({count: this.state.count + 1}, () => {
    console.log('setState complete');
  });

  console.log('handleClick console log')
}


  render(){
    return (
      <div className="App">
       
        <button onClick={this.handleClick}>{this.state.count}</button>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}



export default App;