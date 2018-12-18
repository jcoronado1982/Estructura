import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
import Info from '../info/components/info';
class Footer extends Component{
    render(){
        return(
            <div className="item footer ">
                    <div className="footer">                        
                            
                        <div className="feescomm">
                            <NavLink to="/Fees_and_commissions" activeClassName="is-selected">
                            <center>Fees and Commissions</center>
                            </NavLink>
                        </div>
                        <div className="simulator">
                            <NavLink to="/Simulator" activeClassName="is-selected">
                            <center>Loan Simulator</center>
                            </NavLink>
                        </div>
                        <div className="risks">
                            <NavLink to="/Risks" activeClassName="is-selected">
                            <center>Risks</center>
                            </NavLink>
                        </div>
                        <div className="chat"> 
                            <NavLink to="/Chat" activeClassName="is-selected">
                            <center>Chat</center>
                            </NavLink>
                        </div>
                        <div className="contact">
                            <NavLink to="/Contact" activeClassName="is-selected">
                            <center>Contact</center>
                            </NavLink>
                        </div>
                        <div className="about">
                            <NavLink to="/About" activeClassName="is-selected">
                            <center>About us</center> 
                            </NavLink>
                        </div>
                        <div className="rights">
                            <center>All rights reserved</center>                       
                        </div>
                        <div className="info">
                        <center><h3>Information</h3></center>
                        </div>
                            

                        <div className="how">
                            <NavLink to="/how-does-it-work" activeClassName="is-selected">
                            <center>how does it work?</center>           
                            </NavLink>  
                        </div>    
                        <div className="req">
                            <NavLink to="/requirements" activeClassName="is-selected">
                            <center>Requirements</center>         
                            </NavLink>  
                        </div>      
                        <div className="terms">
                            <NavLink to="/terms-and-conditions" activeClassName="is-selected">
                            <center>Terms and Conditions</center>         
                            </NavLink>  
                        </div>      
                        <div className="freq">
                            <NavLink to="/frequent" activeClassName="is-selected">
                            <center >Frequent Questions</center>           
                            </NavLink>  
                        </div> 

                </div>  
            </div>  
            )
    }
}
export default Footer;