import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
import Info from '../info/components/info';
class Footer extends Component{
    render(){
        return(
            <div className="item footer ">
                    <div className="footer">                        
                          <Info className="info"/>
                    <div className="feescomm">
                        <NavLink to="/Fees_and_commissions" activeClassName="is-selected">
                           Fees and Commissions
                        </NavLink>
                    </div>
                    <div className="simulator">
                        <NavLink to="/Simulator" activeClassName="is-selected">
                        Loan Simulator
                        </NavLink>
                    </div>
                    <div className="risks">
                        <NavLink to="/Risks" activeClassName="is-selected">
                        Risks
                        </NavLink>
                    </div>
                    <div className="chat"> 
                        <NavLink to="/Chat" activeClassName="is-selected">
                        Chat
                        </NavLink>
                    </div>
                    <div className="contact">
                        <NavLink to="/Contact" activeClassName="is-selected">
                            Contact
                        </NavLink>
                    </div>
                    <div className="about">
                        <NavLink to="/About" activeClassName="is-selected">
                            About us
                        </NavLink>
                    </div>
                    <div className="rights">
                        <center>All rights reserved</center>                       
                    </div>
                </div>  
            </div>  
            )
    }
}
export default Footer;