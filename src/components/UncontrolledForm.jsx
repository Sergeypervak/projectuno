import React from "react";

class UncontrolledForm extends React.Component {
constructor() {
   super();
  
 this.cardRef = React.createRef();
 this.emailRef = React.createRef();
}
handleSubmit = (event) => {
event.preventDefault();
if(this.cardRef.current.value.length !== 16){
  alert('card number contain 16 symbols');
  return;
}
// if (this.cardRef.current.value.length === 16) {
this.cardRef.current.value = '';
this.emailRef.current.value = '';
alert('your card number and email sent')
// }
}

render() {
      
      
      
      return <form onSubmit={this.handleSubmit}>
          
        <input
         type="card" 
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