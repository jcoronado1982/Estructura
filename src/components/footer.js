import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/footer.css';
import {connect} from 'react-redux';
class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
            labels:props.labels[6],
        };
    }
    render(){
        return(
            <div className="item footer backgroundFooter">
                    <div className="footer centerFooter">  
                            <div className="about">
                                {this.state.labels.label.about}
                            </div>
                            <div className="caution">
                                {this.state.labels.label.about}
                            </div>
                            <div  className="support">
                                {this.state.labels.label.suport}
                            </div>


                            <div className="how">
                                <NavLink to="/how-does-it-work" activeClassName="is-selected" className="linkStyle">
                                    {this.state.labels.label.howDoesIwork}
                                </NavLink>  
                            </div>
                            <div className="risks">
                                <NavLink to="/Risks" activeClassName="is-selected" className="linkStyle">
                                    {this.state.labels.label.risks}
                                </NavLink>
                            </div>
                            <div  className="req">
                                <NavLink to="/requirements" activeClassName="is-selected"className="linkStyle">
                                    {this.state.labels.label.requirements}     
                                </NavLink>  
                            </div>
                            <div  className="terms">
                                <NavLink to="/terms-and-conditions" activeClassName="is-selected"className="linkStyle">
                                    {this.state.labels.label.TermsAndConditions}    
                                </NavLink>  
                            </div>
                            <div  className="feescomm">
                                <NavLink to="/Fees_and_commissions" activeClassName="is-selected" className="linkStyle">
                                    {this.state.labels.label.FrequentQuestions}
                                </NavLink>
                            </div>
                            <div  className="chat">
                                <NavLink to="/Chat" activeClassName="is-selected"className="linkStyle">
                                    {this.state.labels.label.chat}
                                </NavLink>
                            </div>
                            <div  className="simulator">
                                <NavLink to="/Simulator" activeClassName="is-selected"className="linkStyle">
                                    Loan Simulator {this.state.labels.label.loanSimulator}
                                </NavLink>
                            </div>
                            <div  className="contact">
                                <NavLink to="/Contact" activeClassName="is-selected"className="linkStyle">
                                    Contact {this.state.labels.label.contact}
                                </NavLink>
                            </div>
                            <div  className="aboutUs">
                                <NavLink to="/About" activeClassName="is-selected"className="linkStyle">
                                    About us  {this.state.labels.label.aboutUs}
                                </NavLink>
                            </div>
                            
                                
                            <div  className="freq">
                                <NavLink to="/frequent" activeClassName="is-selected" className="linkStyle">
                                    Frequent Questions         
                                </NavLink>  
                            </div>                         
                </div>
                <div className="rights">
                    <div className="footerLogo">
                        XRUBI
                    </div>
                    <div className="copyRights">
                        All rights reserved 2018
                    </div>
                </div>  
            </div>  
            )
    }
}
function mapStateToProps(state, props) {
    const labels = state.data.idSessionsLabels.map((id) => {
      return state.data.dataSessionsLabels.sessions[id]
    })
    
    return {
      labels: labels
    }
 }
export default connect(mapStateToProps)(Footer);