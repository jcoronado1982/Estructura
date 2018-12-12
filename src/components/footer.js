import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
class Footer extends Component{

    render(){
        return(
            <div className="item footer">
            <nav>
                    <ul>
                        <li>
                            <NavLink to="/Info" activeClassName="is-selected">
                                Information
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Fees_and_commissions" activeClassName="is-selected">
                                Fees and Commissions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Simulator" activeClassName="is-selected">
                                Loan Simulator
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Chat" activeClassName="is-selected">
                                Chat
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" activeClassName="is-selected">
                                Contact
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/About" activeClassName="is-selected">
                                About us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>    
            )
    }
}
export default Footer;