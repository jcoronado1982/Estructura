import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
import Info from '../info/components/info';
class Footer extends Component{
    render(){
        return(
            <div className="item footer ">
                    <div className="footer">                        
                        <div className="area1">
                            <div className="risks">
                                <NavLink to="/Risks" activeClassName="is-selected"className="linkStyle">
                                Risks
                                </NavLink>
                            </div>
                            <div className="feescomm">
                                <NavLink to="/Fees_and_commissions" activeClassName="is-selected"className="linkStyle">
                                    Fees and Commissions
                                </NavLink>
                            </div>                      
                            <div className="chat"> 
                                <NavLink to="/Chat" activeClassName="is-selected"className="linkStyle">
                                Chat
                                </NavLink>
                            </div>
                        </div>
                        
                        <div className="area2">
                            <div className="simulator">
                                <NavLink to="/Simulator" activeClassName="is-selected"className="linkStyle">
                                Loan Simulator
                                </NavLink>
                            </div>
                            <div className="contact">
                                <NavLink to="/Contact" activeClassName="is-selected"className="linkStyle">
                                Contact
                                </NavLink>
                            </div>
                            <div className="about">
                                <NavLink to="/About" activeClassName="is-selected"className="linkStyle">
                                About us 
                                </NavLink>
                            </div>
                        </div>
                        
                        <div className="rights">
                            <center>All rights reserved</center>                       
                        </div>
                            <div className="info">

                            <div className="how">
                                <NavLink to="/how-does-it-work" activeClassName="is-selected"className="linkStyle">
                                how does it work?        
                                </NavLink>  
                            </div>    
                            <div className="req">
                                <NavLink to="/requirements" activeClassName="is-selected"className="linkStyle">
                                Requirements       
                                </NavLink>  
                            </div>      
                            <div className="terms">
                                <NavLink to="/terms-and-conditions" activeClassName="is-selected"className="linkStyle">
                                Terms and Conditions     
                                </NavLink>  
                            </div>      
                            <div className="freq">
                                <NavLink to="/frequent" activeClassName="is-selected" className="linkStyle">
                                Frequent Questions         
                                </NavLink>  
                            </div> 
                        </div>
                            


                </div>  
            </div>  
            )
    }
}
export default Footer;