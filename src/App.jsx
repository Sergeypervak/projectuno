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
         <h2>{this.state.posts[0].name}</h2>
         <h2>{this.state.posts[1].name}</h2>
         <h2>{this.state.posts[2].name}</h2>

     </div>
  );
     } ;
     
    }

  export default App;
