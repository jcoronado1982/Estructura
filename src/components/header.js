import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/header.css';
import Session from '../login/components/session';
import {connect} from 'react-redux';
class Header extends Component{
    constructor(){
        super();
        this.state ={
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
            this.setState({
            menuOpen:false,
            text:"Close",
        })
        }else{
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
        setTimeout(this.HandleChangeOff,0); 
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
                <div className="Navigation_logo">
                    XRUBI
                </div>
                <div className="Navigation_menu" onClick={this.HandleMenuClick}>
                    {this.state.text}
                </div>
                <nav className="Navigation_items">
                    <ul className="Navigation_list">
                        <li onClick={this.HandleChange} >
                            <NavLink to="/" activeClassName="is-selected">
                                Lend
                            </NavLink>
                        </li>
                        <li onClick={this.HandleChange}>
                            <NavLink to="/Borrow" activeClassName="is-selected">
                                Borrow
                            </NavLink>
                        </li>
                        <li onClick={this.HandleChange}>
                            <NavLink to="/Help" activeClassName="is-selected">
                                Help center
                            </NavLink>
                        </li>
                        <li onClick={this.HandleChange}>
                            <NavLink to="/Auction"activeClassName="is-selected">
                                In auction 
                            </NavLink>
                        </li>
                        <li onClick={this.HandleChange}>
                            <NavLink to="/Exchange" activeClassName="is-selected">
                                Exchange your loan
                            </NavLink>
                        </li>
                        <li  className="floatright">
                            <Session/>
                        </li>
                    </ul>
                </nav>
            
            </div>       
        )
    }
}
export default connect()(Header);
