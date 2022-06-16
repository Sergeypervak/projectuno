import React from "react";

class Form extends React.Component {
state = { 
 firstName :'',
 email :'',

}


    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('Yonr name should be longer, then 6 symbols')
        }
    }

    render() {
      const {firstName, email} = this.state;
      
      
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
           
        />    
        </div>

    }
}

export {Form};