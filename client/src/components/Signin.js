import React, {Component} from 'react';
import {reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';

import * as actions from './actions/actions'
import CustomInput from './CustomInput';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }


    async onSubmit(formData) {
        await this.props.signIn(formData);
        if(!this.props.errorMessage){
            this.props.history.push('/browse');
        }

    }

    async responseGoogle(res){
        await this.props.oauthGoogle(res.accessToken);
        if(!this.props.errorMessage){
            this.props.history.push('/browse');
        }
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="flex-container">
                <div className='flex-container-row'>
                    <div  style={{ color: "white", background: "var(--details-back)"}}>
                        <img className="logo" src={require('./images/seeThrough.png')} alt='site logo' />
                        <h1 className="text-center">Sign In</h1>
                    </div>
                </div>
                <div className="container flex-box row"  style={{ color: "white", background: "var(--details-back)", paddingTop:"30px", marginLeft:"20%", marginRight:"20%" }}>
                <div className="col">
                    <form className="text-center" onSubmit={handleSubmit(this.onSubmit)}>
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

                        { this.props.errorMessage ? 
                            <div className="alert alert-danger">
                                { this.props.errorMessage }
                            </div> : null
                        }

                        <button className="btn btn-primary" type='submit'>Sign In</button>

                    </form>
                </div>
                <div className='col'>
                    <div className='text-center'><br/>
                        <div className="alert alert-primary">
                            Or sign in using google+
                        </div>
                        <div className='flex-container'>
                            <div className='flex-container-row' style={{ color: "white", background: "var(--details-back)"}}>
                                <img className="logo-small" src={require('./images/google.png')} alt='google logo' />
                            </div>
                        </div>
                        <GoogleLogin 
                            // will not let me reference from .env. need to find another way to reference this info without hardcoding it!!!!!!!!!!
                            clientId="208048925927-9hhalutqphl06je9q3b13pv7nlepsvj8.apps.googleusercontent.com"
                            buttonText="Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            className="btn btn-outline-danger"

                        />
                    </div>
                </div>
            </div>
            </div>

            
        );
    }
}

function mapStateToProps(state) {
    return{
        errorMessage: state.auth.errorMessage
    }
}



//export the component as redux with label 'signup'
// the first argument is all about the state data and the second is the actions
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(SignIn) 