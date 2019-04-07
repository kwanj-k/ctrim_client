import React from 'react';
import ctrim from './ctrim.fgy';
import { Link } from 'react-router-dom';

import './nav.css';


const Nav = () => {
    return (
        <div className='nav_marg'>
            <nav>
                <ul>
                    <li>
                        <img
                        src={ctrim}
                        className="img-responsive"
                        alt="+Ctrim" />
                    </li>
                    <li ><Link to="/newstore" >AddStore</Link></li>
                    <li ><Link to="/" >Logout</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
