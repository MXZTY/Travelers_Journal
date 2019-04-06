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
        
    }

    render(){
        return(
        <nav className= "navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto">
                { !this.props.isAuth ? 
                    [ 
                    <li className="nav-item" key="signin">
                        <Link className='nav-link' to='/signin'>
                            <button> Login </button>
                        </Link>
                    </li>,
                    <li className="nav-item" key="signup">
                        <Link className='nav-link' to='/signup'>
                            <button> Sign Up </button>
                        </Link>
                    </li> ] : null }

                    <li className="nav-item">
                        <Link className='nav-link' to='/browse'>
                            <button>Browse</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/about'>
                            <button>About</button>
                        </Link>
                    </li>
                    <li className="nav-item" key="signout">
                        <Link className='nav-link' to='/home' onClick={this.signOut} >
                            <button> Sign Out </button>
                        </Link>
                    </li>
                
            </ul>
            {/* <Link to='/browse'>
                <button>Browse</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link> */}
            </div>
        </nav>)};
};


function mapStateToProps(state){
    return{
        isAuth: state.auth.isAuthenticated
    };
};
export default connect(mapStateToProps, actions)(HeaderMenu);