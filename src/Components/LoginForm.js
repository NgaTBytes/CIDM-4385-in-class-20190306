import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            results: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    //handler for data from child component
    onEmailChange(email){
        
        console.log("From the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        console.log("From the parent state: " + this.state.email);
    }

    onPasswordChange(password){
        
        console.log("From the child: " + password);

        this.setState( () => {
                return {
                    password
                };
            }
        );

        console.log("From the parent state: " + this.state.password);
    }
    
    canBeSubmitted() {
        const { email, password } = this.state;
        return email.length > 0 && password.length > 7;
}

    onFormSubmit(event){

        event.preventDefault();

        const results = "Email address is: " + this.state.email;

        this.setState( () => {
                return {
                    results
                };
            }
        );

        //this is also lifting state to the parent
        this.props.onFormSubmit(results);

    }

    render() {
        const isEnabled = this.canBeSubmitted();
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange}  />
                    <PasswordInput onPasswordInputChange={this.onPasswordChange} />
                    <button disabled={!isEnabled} className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}

export default LoginForm;