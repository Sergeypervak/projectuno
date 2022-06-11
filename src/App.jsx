import React,{Component} from "react";

class App extends Component {
 constructor(props) {
   super(props);
  this.state = {
    posts: [],
    loading: true,
    comments: [],
  };
}

componentDidMount () {
  console.log ('componentDidMount');
fetch ('https://jsonplaceholder.typicode.com/posts') 
.then(response => response.json()) 
.then(data => this.setState({posts: data, loading:false}))
}
componentDidUpdate() {
  console.log ('didupdate')
}
componentWillUnmount() {
  console.log ('willunmoount')
}
render () {
    return (
      <div className="App">
     {this.state.loading ? <h3>loading...</h3> : 
     <h3>{
      this.state.posts.length
      } was loaded</h3> }
      </div>
    );
  }
  
  }

export default App;
