import React from "react";

export default class App extends React.Component {
state = {
    count: 0,
    isCounting: false
  };
componentDidMount() {
const userCount = localStorage.getItem('timer');
if (userCount) {
  this.setState({count: +userCount})
}
}

componentDidUpdate() {
localStorage.setItem('timer', this.state.count)
}
componentWillUnmount() {}

handleStart = () => {
  this.setState({isCounting: true})
 
  this.counterId = setInterval(()=>{
    this.setState({count: this.state.count + 1})
  },1000)
}

handleStop = () => {
  this.setState({isCounting: false})
  clearInterval(this.counterId);
} 

handleReset =() => {
  this.setState({isCounting: false, count: 0})
  clearInterval(this.counterId);
}
render () {
    return (
      <div className="App">
     <h1>React timer</h1>
     <h3>{this.state.count}</h3>
     {!this.state.isCounting ? (
     <button onClick={this.handleStart}>start</button>) :
     <button onClick={this.handleStop}>stop</button> };
     <button onClick={this.handleReset}>Reset</button> 
      </div>
    );
     } 
     
}

    
