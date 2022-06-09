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
  }
handleClickMinus = () => {
  this.setState({count: this.state.count - 1});
}
  render () {
    return (
      <div className="App">
        <button onClick={this.handleClickMinus}>-</button>
      
      <button >{this.state.count}</button>
      <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
  
  
}

export default App;
