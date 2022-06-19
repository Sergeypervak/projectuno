import React from "react";

class FormWithRef extends React.Component {
constructor() {
   super();
   this.state = {
      card:'',
      email:''
   }
 this.firstNameRef = React.createRef();
}
handleChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
}
  
componentDidMount() {
console.log (this.firstNameRef)

}

render() {
      const {email, firstName } = this.state;
      
      
      return <div>
          
        <input
         type="text" 
         name="firstName"
         placeholder="firstName"
         value={firstName}
         onChange={this.handleChange}
         ref={this.firstNameRef}
        /> 
         
         
         
         <input 
            type="email" 
            name='email'
            placeholder="email"  
            value={email} 
            onChange={this.handleEmail}
            />  
       {/* <br/>  
        <label>
           <input 
             type="checkbox" 
             name="isAgreeWithTerms" 
             checked={isAgreeWithTerms} 
             onChange={this.handleCheckbox} 
    />
        I agree with terms and conditions
   </label>
   <br/>
 <button onClick={this.handleSubmit}>send confirmation</button>
     */}
    
        </div>

    }

}











export {FormWithRef};