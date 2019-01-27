import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/header.css';
import Session from '../login/components/session';
import MenuImage from '../../img/icon/menu.png';
import {connect} from 'react-redux';
class Header extends Component{
    constructor(props){
        super(props);
        let htmlStyles = window.getComputedStyle(document.querySelector("html"));
        this.state ={
            labels:props.labels[5],
            menuOpen:false,  
            text:"menu",
            };
            this.HandleMenuClick=this.HandleMenuClick.bind(this);
            this.HandleChange=this.HandleChange.bind(this);
            this.HandleChangeOff=this.HandleChangeOff.bind(this);
    }
    
    HandleMenuClick(event){
        if(this.state.menuOpen)
        {
            document.documentElement.style.setProperty("--visibilityProp","hidden" );
            document.documentElement.style.setProperty("--displayProp","none" );
            this.setState({
            menuOpen:false,
            text:"Close",
        })
        }else{
            document.documentElement.style.setProperty("--visibilityProp","visible" );
            document.documentElement.style.setProperty("--displayProp","block" );
            this.setState({
                menuOpen:true,
                text:"Open",
            })
        }
    }
    HandleChange=event =>{
        this.props.dispatch({
            type:'isLoading',
            load:false,
        })
        setTimeout(this.HandleChangeOff,1); 
    }
    HandleChangeOff=event =>{
        this.props.dispatch({
            type:'isLoaded',
            load:true,
        })
    }
    
    render(){
        return(
                <div className="item header">
                    <div className="navigationLogo">
                        XRUBI
                    </div>
                    <div className="navigationMenu" onClick={this.HandleMenuClick}>
                        <img className="navigationMenuIcon" src={MenuImage}></img>
                    </div>
                    <nav className="navigationItems">
                        <ul className="navigationList" onClick={this.HandleMenuClick}>
                            <li onClick={this.HandleChange} >
                                <NavLink to="/" activeClassName="is-selected">
                                    {this.state.labels.label.lend}
                                </NavLink>
                            </li>
                            <li onClick={this.HandleChange}>
                                <NavLink to="/Borrow" activeClassName="is-selected">
                                    {this.state.labels.label.borrow}
                                </NavLink>
                            </li>
                            <li onClick={this.HandleChange}>
                                <NavLink to="/Help" activeClassName="is-selected">
                                    {this.state.labels.label.helpCenter}
                                </NavLink>
                            </li>
                            <li onClick={this.HandleChange}>
                                <NavLink to="/Auction"activeClassName="is-selected">
                                    {this.state.labels.label.inAuction}
                                </NavLink>
                            </li>
                            <li onClick={this.HandleChange}>
                                <NavLink to="/Exchange" activeClassName="is-selected">
                                    {this.state.labels.label.exchangeYourLoan}
                                </NavLink>
                            </li>
                            <li  className="session">
                                <Session/>
                            </li>
                        </ul>
                    </nav>
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
export default connect(mapStateToProps)(Header);
