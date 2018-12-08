import React, { Component} from 'react';
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
                        <li>
                            <NavLink to="/detalle" activeClassName="is-selected">
                                Detalle 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Register" activeClassName="is-selected">
                                Register 
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            
            </div>       
        )
    }
}
export default Header;