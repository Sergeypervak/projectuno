import React from "react";

class UncontrolledForm extends React.Component {
constructor() {
   super();
  
 this.cardRef = React.createRef();
 this.emailRef = React.createRef();
}
handleSubmit = (event) => {
event.preventDefault();
}

render() {
      
      
      
      return <form onSubmit={this.handleSubmit}>
          
        <input
         type="number" 
         name="card"
         placeholder="card number"
         ref={this.cardRef}
        /> 
         
         <input 
            type="email" 
            name="email"
            placeholder="email"  
            ref={this.emailRef}
            />  
      
    <button>Send</button>
        </form>

    }

}
export {UncontrolledForm};