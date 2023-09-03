import './App.css';
import React from 'react';






class App extends React.Component {

  state = {
    posts: [],
    loading: true,
    comments: []
  }

componentDidMount(){
  //console.log('componentDidMount');
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => this.setState({posts: data, loading: false}))

  this.timerID = setInterval(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => this.setState({comments: data}))
  }, 3000)
  
}

componentDidUpdate(){
  console.log('updated');
}

componentWillUnmount(){
  clearInterval(this.timerID);
}


  render(){
    return (
      <div className="App">   
        {this.state.loading ? <h3>Loading...</h3> : <h3>
          {this.state.posts.length} was loaded
        </h3> }
      </div>
    );
  }
}



export default App;