// import React from "react";

// class FormWithRef extends React.Component {
// constructor() {
//    super();
//    this.state = {
//       card:'',
//       email:''
//    }
//  this.cardRef = React.createRef();
//  this.emailRef = React.createRef();
// }
// handleChange = (event) =>{
//     this.setState(()=>({[event.target.name]:event.target.value}),()=>{

//         if (this.state.card.length === 16) {
//             this.emailRef.current.focus();
//         }
//     })
// }
//   handleEmail = (event) => {
//     this.setState({email: event.target.value})
//  }
    

// componentDidMount() {
// console.log (this.cardRef)
// this.cardRef.current.focus();
// }

// render() {
//       const {email,card} = this.state;
      
      
//       return <div>
          
//         <input
//          type="number" 
//          name="card"
//          placeholder="card number"
//          value={card}
//          onChange={this.handleChange}
//          ref={this.cardRef}
//         /> 
         
         
         
//          <input 
//             type="email" 
//             name='email'
//             placeholder="email"  
//             value={email} 
//             onChange={this.handleEmail}
//             ref={this.emailRef}
//             />  
//        {/* <br/>  
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
//      */}
    
//         </div>

//     }

// }











// export {FormWithRef};