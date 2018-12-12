import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
class Footer extends Component{

    render(){
        return(
            <div className="item footer">
                <diV>
                     <NavLink to="/Info" activeClassName="is-selected">
                        Information
                    </NavLink>
                </diV>
                <diV>
                    <NavLink to="/Fees_and_commissions" activeClassName="is-selected">
                        Fees and Commissions
                    </NavLink>
                </diV>
                <diV>
                    <NavLink to="/Simulator" activeClassName="is-selected">
                        Loan Simulator
                    </NavLink>
                </diV>
                <diV>
                    <NavLink to="/Chat" activeClassName="is-selected">
                        Chat
                    </NavLink>
                </diV>
                <diV>
                    <NavLink to="/Contact" activeClassName="is-selected">
                        Contact
                    </NavLink>
                </diV>
                <diV>
                   <NavLink to="/About" activeClassName="is-selected">
                        About us
                    </NavLink>
                </diV>
            </div>    
            )
    }
}
export default Footer;