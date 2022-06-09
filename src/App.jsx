import React,{Component} from "react";

class App extends Component {
 constructor(props) {
   super(props);
  this.state = {
    count: 0,
    someKey: false
  };
}

handleClick = () => {
  this.setState({count: this.state.count + 1});
  // this.setState((prevState)=>({count: prevState.count + 1}))
  // this.setState((prevState)=>({count: prevState.count + 1}))

   console.log('from handle click');


}
render () {
    return (
      <div className="App">
        <h2>count</h2>
      
      <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
  
  
}

export default App;
