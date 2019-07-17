import React from 'react'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state =   {credentials:{
            username: '',
            password: ' '}
        };
    }
 
  changeHandle = e => {
      this.setState({
        credentials: {
        [e.target.name]: e.target.value }
        
})

  };
 
  LoginSubmit = e => {
    const password = this.state.password;
    const user = this.state.username;
    localStorage.setItem (' ',user);
    console.log(password)
    console.log(user)
    if (password === "Dracarys"){
      console.log('CORRECT')
    }else {
      console.log("Wrong password , DORK")
    }
  }






    render (){
   
    return (
      <div>
        <h3>Welcome to React WanderLust</h3>
        <div  >Please Login</div>
        <div className ='Login'>
        <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.changeHandle}
          />
        
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandle}
          />
          <br />
          <button color="success" size="large" onClick={this.LoginSubmit}>
            Log In
          </button>
        </div>
           
      </div>
         
     
 
 
      
    
    

   )}


}



export default Login;