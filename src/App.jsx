import React, {Component} from "react";


class App extends Component {
state = {
  posts: [
    {id: 'abc1', name: 'Junior'},
    {id: 'abc2', name: 'Middle'},
    {id: 'abc3', name: 'Senjor'},


  ]
   
};


render () {
    return (
      <div className="App">
        {this.state.posts.map(post => 
          (<h2 key={post.id}>{post.name}</h2>)
          )}

     </div>
  );
     } ;
     
    }

  export default App;
