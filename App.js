import './App.css';
import React from 'react';






class App extends React.Component {

  constructor(){
    super();

    this.state = {
      count: 0
    }

    this.handleClickMinus = this.handleClickMinus.bind(this);
  }


handleClickPlus = () => {
  this.setState({count: this.state.count + 1})
}

handleClickMinus(){
  this.setState({count: this.state.count - 1})
}


  render(){
    return (
      <div className="App">
       
        <button onClick={this.handleClickPlus}> Plus </button>
        <p>{this.state.count}</p>
        <button onClick={this.handleClickMinus}> Minus </button>
        
      </div>
    );
  }
}



export default App;