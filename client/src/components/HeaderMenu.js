import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions/actions';



class HeaderMenu extends Component {
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        console.log('signout got called!');
        this.props.signout();
        this.location.reload();
    }

    render(){
        console.log("isAuth??????", this.props.isAuth);
        return(
        <nav className= "navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto">
                { !this.props.isAuth ? 
                    [ <li className="nav-item" key="home">
                        <Link className='nav-link' to='/'>
                            <button>Home</button>
                        </Link>
                    </li>,
                    <li className="nav-item" key="signin">
                        <Link className='nav-link' to='/signin'>
                            <button> Login </button>
                        </Link>
                    </li>,
                    <li className="nav-item" key="signup">
                        <Link className='nav-link' to='/signup'>
                            <button> Sign Up </button>
                        </Link>
                    </li> ] 
                    :  
                    [ 
                    <li className="nav-item" key="browse">
                        <Link className='nav-link' to='/browse'>
                            <button>Browse</button>
                        </Link>
                    </li>,
                    <li className="nav-item" key="about">
                        <Link className='nav-link' to='/about'>
                            <button>About</button>
                        </Link>
                    </li>,
                    <li className="nav-item" key="signout">
                        <Link className='nav-link' to='/home' onClick={this.signOut} >
                            <button> Sign Out </button>
                        </Link>
                    </li>]
                }
                
            </ul>
            </div>
        </nav>)};
};


function mapStateToProps(state){
    return{
        isAuth: state.auth.isAuthenticated
    };
};
export default connect(mapStateToProps, actions)(HeaderMenu);