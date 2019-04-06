import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from './actions'
import CustomInput from './CustomInput';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    async onSubmit(formData) {
        console.log('onSubmit() has been called');
        console.log('formData', formData);
        // need to cal action to contact back end server
        await this.props.signUp(formData);

    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="row"  style={{ color: "white", background: "var(--details-back)", paddingTop:"30px" }}>
                <div className="col">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <fieldset className="signUpInput">
                            <Field
                                name="email"
                                type="text"
                                id="email"
                                label="Enter Your Email"
                                placeholder="example@example.com"
                                component={CustomInput}
                            />
                        </fieldset>
                        <fieldset className="signUpInput">
                            <Field
                                name="password"
                                type="password"
                                id="password"
                                label="Enter Your Password"
                                placeholder="anAmazingPassword"
                                component={CustomInput}
                            />
                        </fieldset>

                        <button className="btn btn-primary" type='submit'>Sign Up</button>

                    </form>
                </div>
                <div className='col'>
                    <div className='text-center'>
                        <div className="alert alert-primary">
                            Or sign up using google+
                        </div>
                        <button className="btn btn-default"> Google+ </button>
                    </div>
                </div>
            </div>

            
        );
    }
}

//export the component as redux with label 'signup'
export default compose(
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(SignUp) 