import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, NavLink } from'react-router-dom';
import '../styles/header.css';
class Header extends Component{

    render(){
        return(
            <div className="item header">
            
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="is-selected">
                                Home 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Help" activeClassName="is-selected">
                                Help
                            </NavLink>
                        </li>
                      
                    </ul>
                </nav>
            
            </div>       
        )
    }
}
export default Header;