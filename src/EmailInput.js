import React from 'react';

const EmailInput =(props) => {

    
    const onEmailChange= (event)=>{
        var email = event.target.value;

        //this is lifting the state value to the parent
        this.props.onEmailInputChange(email);

      
    };


        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    aria-describedby="emailHelp" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    onChange={this.onEmailChange}
                    placeholder="Enter email"
                    type="email"
                    value={this.state.email}  />
            </div>
            
        );
    }


export default EmailInput;