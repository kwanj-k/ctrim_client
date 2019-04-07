import React from 'react';
import ctrim from './ctrim.fgy';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

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
                    <li >
                        <Button as='a' className='btn'>
                            Logout
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
