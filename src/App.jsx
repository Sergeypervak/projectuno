import React,{Component} from "react";

class App extends Component {
 constructor(props) {
   super(props);
  this.state = {
    count: 0,
    someKey: false
  };
}

handleClickPlus = () => {
  this.setState({count: this.state.count + 1});
  }
handleClickMinus = () => {
  this.setState({count: this.state.count - 1});
}

componentDidMount () {
  console.log ('componentDidMount');
  
}

render () {
    console.log('render', this.state.count)
    return (
      <div className="App">
        <button onClick={this.handleClickMinus}>-</button>
      
      <button  >{this.state.count}</button>
      <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }
  
  
}

export default App;
