import React from 'react';
import {Link} from 'react-router-dom'

const HeaderMenu = (props) => {
    return(
        <nav className= "navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className='nav-link' to='/home'>
                        <button>Home</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/signin'>
                        <button> Login </button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/signup'>
                        <button> Sign Up </button>
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
        </nav>

    );
}

export default HeaderMenu;