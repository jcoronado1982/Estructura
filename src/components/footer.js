import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
import Info from '../info/components/info';
class Footer extends Component{
    render(){
        return(
            <div className="item footer ">
                    <div className="footer">   
                            <div className="risks">
                                <div className="linkContainer" >
                                    <NavLink to="/Risks" activeClassName="is-selected"className="linkStyle">
                                    Risks
                                    </NavLink>
                                </div>
                            </div>
                            <div  className="feescomm">
                                <div className="linkContainer">
                                    <NavLink to="/Fees_and_commissions" activeClassName="is-selected"className="linkStyle">
                                        Fees and Commissions
                                    </NavLink>
                                </div>  
                            </div>
                            <div  className="chat">
                                <div className="linkContainer"> 
                                    <NavLink to="/Chat" activeClassName="is-selected"className="linkStyle">
                                    Chat
                                    </NavLink>
                                </div>
                            </div>
                            <div  className="simulator">
                                <div className="linkContainer">
                                    <NavLink to="/Simulator" activeClassName="is-selected"className="linkStyle">
                                    Loan Simulator
                                    </NavLink>
                                </div>
                            </div>
                            <div  className="contact">
                                <div className="linkContainer">
                                    <NavLink to="/Contact" activeClassName="is-selected"className="linkStyle">
                                    Contact
                                    </NavLink>
                                </div>
                            </div>
                            <div  className="about">
                                <div className="linkContainer">
                                    <NavLink to="/About" activeClassName="is-selected"className="linkStyle">
                                    About us 
                                    </NavLink>
                                </div>    
                            </div>
                            <div   className="how">
                                <div className="linkContainer">
                                    <NavLink to="/how-does-it-work" activeClassName="is-selected"className="linkStyle">
                                    how does it work?        
                                    </NavLink>  
                                </div>    
                            </div>
                            <div  className="req">
                                <div className="linkContainer">
                                    <NavLink to="/requirements" activeClassName="is-selected"className="linkStyle">
                                    Requirements       
                                    </NavLink>  
                                </div>  
                            </div>
                            <div  className="terms">
                                <div className="linkContainer">
                                    <NavLink to="/terms-and-conditions" activeClassName="is-selected"className="linkStyle">
                                    Terms and Conditions     
                                    </NavLink>  
                                </div>   
                            </div>    
                            <div  className="freq">
                                <div className="linkContainer">
                                    <NavLink to="/frequent" activeClassName="is-selected" className="linkStyle">
                                    Frequent Questions         
                                    </NavLink>  
                                </div> 
                            </div>                         

                            <div className="rights">
                                <div >
                                    All rights reserved                     
                                </div>
                            </div>

                </div>  
            </div>  
            )
    }
}
export default Footer;