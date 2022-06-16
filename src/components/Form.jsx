import React from "react";

class Form extends React.Component {
state = { 
 firstName :'',
 email :'',
 message : '',
 select : '',
}


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length < 3) {
            alert('Yonr name should be longer, then 6 symbols')
        }
    }

    
    validateEmail = () => {
       
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            this.state.email
            ))
       
          alert("You have entered an invalid email address!")
          
      }   
    
   

    render() {
      const {firstName, email, message, select} = this.state;
      
      
      return <div>
           <input 
            type="text" 
            name='firstName'
            placeholder="enter your name ..."  
            value={firstName} 
            onChange={this.handleChange}
            onBlur={this.validateName}
       />    
         <input 
            type="email" 
            name='email'
            placeholder="enter your email ..."  
            value={email} 
            onChange={this.handleChange}
            onBlur={this.validateEmail}
        />  
        <br />
        <textarea name="message" value={message} onChange={this.handleChange}/>
        
        
        <select name="select" value={select} onChange={this.handleChange}>
        <option value='null'></option>
        <option value='1'>2</option>
        <option value= '2' >1</option>
        <option value='4'>3</option>
        <option value='3'>4</option>
         </select>
        </div>

    }
}

export {Form};