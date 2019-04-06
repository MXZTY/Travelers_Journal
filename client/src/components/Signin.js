import React, { Component } from 'react';
import {reduxForm, Field } from 'redux-form';
import CustomInput from './CustomInput';


class SignIn extends Component {
    render() {
        return (
            <div>
               <form>
                   <fieldset>
                        <Field
                            name="email"
                            type="text"
                            id="email"
                            component="input"
                        />
                    </fieldset>
                    <fieldset>
                        <Field
                            name="password"
                            type="password"
                            id="password"
                            component="input"
                        />
                    </fieldset>

                        <button type='submit'>Sign In</button>
               </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'signin' })(SignIn);