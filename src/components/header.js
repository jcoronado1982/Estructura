import React, { Component} from 'react';
import { Link, NavLink } from'react-router-dom';
import '../styles/header.css';
import Session from '../login/components/session';
import {connect} from 'react-redux';
class Header extends Component{
    HandleChangeLend=event =>{
        this.props.dispatch({
            type:'lend',
            load:false,
        })
    }
    HandleChangeBorrow=event =>{
        this.props.dispatch({
            type:'borrow',
            load:true,
        })
    }
    
    render(){
        return(
            <div className="item header">
                <div className="logo">
                    XRUBI
                </div>
                <nav>
                    <ul>
                        <li onClick={this.HandleChangeLend} >
                            <NavLink to="/" activeClassName="is-selected">
                                Lend
                            </NavLink>
                        </li>
                        <li onClick={this.HandleChangeBorrow}>
                            <NavLink to="/Borrow" activeClassName="is-selected">
                                Borrow
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Help" activeClassName="is-selected">
                                Help center
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Auction"activeClassName="is-selected">
                                In auction 
                            </NavLink>
                        </li>
                        <li>
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
