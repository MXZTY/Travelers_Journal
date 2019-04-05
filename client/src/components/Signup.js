import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import CustomInput from './CustomInput';

class SignUp extends Component {
    render() {
        return (
            <div className="loginPage">
                <form className="loginForm">
                    <fieldset className="loginInput">
                        <Field
                            name="email"
                            type="text"
                            id="email"
                            label="Enter Your Email"
                            placeholder="example@example.com"
                            component={CustomInput}
                        />
                    </fieldset>
                    <fieldset className="loginInput">
                        <Field
                            name="password"
                            type="password"
                            id="password"
                            label="Enter Your Password"
                            placeholder="anAmazingPassword"
                            component={CustomInput}
                        />
                    </fieldset>

                    <button className="loginButton" type='submit'>Sign Up</button>

                </form>
                <div>
                    <div className="alert alert-primary">
                        Or sign up using google+
                    </div>

                </div>

            </div>

            
        );
    }
}

export default reduxForm({ form: 'signup' })(SignUp)