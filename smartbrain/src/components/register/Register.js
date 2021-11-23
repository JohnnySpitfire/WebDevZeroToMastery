import React from 'react';

class Register extends React.Component {
    constructor(){
        super();
            this.state = {
                registerName: '',
                registerEmail: '',
                registerPassword: ''
            }
        //creates DOM references to access input fields
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value})        
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value})
    }

    onSubmitRegister = () => {
        if(this.checkAllFields()){
            console.log(this.state);
            fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.registerName,
                    email: this.state.registerEmail,
                    password: this.state.registerPassword
                })
            })
            .then(response => response.json())
            .then(user => {
                console.log(user[0]);
                if (user){
                    this.props.loadUser(user[0])
                    this.props.onRouteChange('Home')
                } else {
                    console.log('huh?')
                }
            })
        }
    }

    checkAllFields = () =>{
        
        const nameIsValid = this.validateInputField('Name', 'name-input', this.nameRef.current)
        const emailIsValid = this.validateInputField('Email', 'email-input', this.emailRef.current)
        const passwordIsValid = this.validateInputField('Password', 'password-input', this.passwordRef.current)

        if(nameIsValid && emailIsValid && passwordIsValid){
            return true
        } else {
            return false
        }
    }

    validateInputField = (label, className, event) => {
        if(event.value === ''){
            // event.className = `${className}-invalid`
            event.previousSibling.className = 'contact-label-invalid'
            event.previousSibling.textContent = `${label} *This field cannot be left blank`
            return false;
        }
        
        if(event.id === 'email-input' && !this.validateEmail(event.value)){
            // event.className = `${className}-invalid`
            event.previousSibling.className = 'contact-label-invalid'
            event.previousSibling.textContent = `${label} *Please enter a valid email address`
            return false;
        }

        // event.className = 'contact-input'
        // event.previousSibling.className =  'contact-label'
        event.previousSibling.textContent = label
        return true;
    }

    
    validateEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email.toLowerCase());
    }

    render() {
        return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 center fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" ref={this.nameRef} type="text" name="name"  id="name-input" onChange={this.onNameChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" ref={this.emailRef} type="email" name="email-input"  id="email-input" onChange={this.onEmailChange}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" ref={this.passwordRef} type="password" name="password-input"  id="password-input" onChange={this.onPasswordChange}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register" onClick={this.onSubmitRegister}/>
                    </div>
                    <div className="lh-copy mt3">
                    </div>
                </form>
            </main>
        </article>
       )
    }
}

export default Register;