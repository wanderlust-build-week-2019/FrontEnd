import React from 'react'


class TGregister extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email:'',
            password: ''
        };
    }
    
    changeHandle =e =>({[e.target.name]: e.target.value})

    regSubmit = e => {
        const firstName = this.state.firstName;
        const password = this.state.password;
        const email = this.state.email;
        console.log(password)
    }

    render(){

        return (
            <div className= 'reg'>
            <h3>Register</h3>
            <h3>as a Tour Guide</h3>

            <form 
            className ='regForm'
            
            type= 'submit'>
            <input
               type ='text'
               name ='firstName'
               placeholder = 'First-Name'
               value={this.state.firstName}
               onChange={this.changeHandle}/> 
               <input
               type ='text'
               name ='lastName'
               placeholder = 'Last-Name'
               value={this.state.lastName}
               onChange={this.changeHandle}/> 
               <input
               type ='text'
               name ='email'
               placeholder = 'email'
               value={this.state.email}
               onChange={this.changeHandle}/> 
               <input
               type ='password'
               name ='password'
               placeholder = 'password'
               value={this.state.password}
               onChange={this.changeHandle}/> 

               <button className ='regSubmit'>SUBMIT</button>


            </form>
            


            </div>
        )
    }



}

export default TGregister