import React, {Component} from "react";
import {Posts} from './components/Posts'

class App extends Component {
state = {
  posts: [
    {id: 'abc1', name: 'Junior'},
    {id: 'abc2', name: 'Middle'},
    {id: 'abc3', name: 'Senjor'},
],};

handleSomething = () => {
  console.log('App.jsx done');
}
render () {
  const {posts} = this.state
  return (
      <div className="App">
       <Posts posts={posts} krot={this.handleSomething}/>

     </div>
  );
     } ;
     
    }

  export default App;
