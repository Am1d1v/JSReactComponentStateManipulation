import './App.css';
import React from 'react';






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



  render(){
    return (
      <div className="App">   
        {this.state.posts.map(post => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
      </div>
    );
  }
}



export default App;