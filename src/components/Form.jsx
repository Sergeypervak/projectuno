// import React from "react";

// class SubscriptionForm extends React.Component {
// state = { 
 
//     email: '',
//  isAgreeWithTerms: false,
//  };
 



//  handleEmail = (event) => {
//     this.setState({email: event.target.value})
//  }


//  handleCheckbox = (event) => {
//      this.setState({isAgreeWithTerms: event.target.checked,})
//          }       
 
// handleSubmit = () => {
//       const isValidEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//     this.state.email
//    )
// const isValidCheckbox = this.state.isAgreeWithTerms;

// if (!isValidEmail) {
//    alert ('Your email is not valid')
//    return
// }

// if (!isValidCheckbox) {
//    alert ('you should accept all terms and conditions')
//    return
// }
// this.setState({
//    email: '',
//    isAgreeWithTerms: false,
// })
// alert('Thank you for subscription')
// }    
 
//     render() {
//       const {email, isAgreeWithTerms } = this.state;
      
      
//       return <div>
          
//          <input 
//             type="email" 
//             name='email'
//             placeholder="email"  
//             value={email} 
//             onChange={this.handleEmail}
//             />  
//        <br/>  
//         <label>
//            <input 
//              type="checkbox" 
//              name="isAgreeWithTerms" 
//              checked={isAgreeWithTerms} 
//              onChange={this.handleCheckbox} 
//     />
//         I agree with terms and conditions
//    </label>
//    <br/>
//  <button onClick={this.handleSubmit}>send confirmation</button>
    
    
//         </div>

//     }
//    }

   

// export {SubscriptionForm};