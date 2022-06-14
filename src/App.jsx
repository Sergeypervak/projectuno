import React, {Component} from "react";
import {Posts} from './components/Posts'

class App extends Component {
state = {
  posts: [
    {id: 'abc1', name: 'Junior'},
    {id: 'abc2', name: 'Middle'},
    {id: 'abc3', name: 'Senjor'},
],};

deletePost = (id) => {
  this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  
}
render () {
  const {posts} = this.state
  return (
      <div className="App">
       <Posts posts={posts} eraser={this.deletePost}/>

     </div>
  );
     } ;
     
    }

  export default App;
