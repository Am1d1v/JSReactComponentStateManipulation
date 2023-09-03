import './App.css';
import React from 'react';
import Posts from './components/Posts';


class App extends React.Component {

constructor(){
  super();

  this.state = {
    posts: [
      {id: 'abc1', name: "Name1"},
      {id: 'abc2', name: "Name2"},
      {id: 'abc3', name: "Name3"},
    ]
  }
}


handleSomething = () => {
  console.log('setState updated')
}


  render(){
    return (
      <div className="App">   
       <Posts posts={this.state.posts} cb={this.handleSomething}/>
      </div>
    );
  }
}



export default App;