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
  
}

componentDidUpdate(){
  console.log('updated');
  // fetch('/meta');
}

componentWillUnmount(){

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