import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/header.css';
import Session from '../login/components/session';
class Header extends Component{

    render(){
        return(
            <div className="item header">
                <div className="logo">
                    XRUBI
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="is-selected">
                                Lend
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Borrow" activeClassName="is-selected">
                                Borrow
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Help" activeClassName="is-selected">
                                Help center
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Auction" activeClassName="is-selected">
                                In auction 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Exchange" activeClassName="is-selected">
                                Exchange your loan
                            </NavLink>
                        </li>
                        
                        <li  className="floatright">
                            <Session/>
                        </li>
                    </ul>
                </nav>
            
            </div>       
        )
    }
}
export default Header;