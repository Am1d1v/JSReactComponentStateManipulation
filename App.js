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

removePost = (id) => {
  this.setState({posts: this.state.posts.filter(post => post.id !== id)})
}


  render(){
    const {posts} = this.state;

    return (
      <div className="App">   
       <Posts posts={posts} cb={this.handleSomething} removePost={this.removePost}/>
      </div>
    );
  }
}



export default App;