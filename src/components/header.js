import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/header.css';
class Header extends Component{

    render(){
        return(
            <div className="item header">
                <Link to="/">Loan MainPage</Link>
                <Link to="/Help">Help</Link>
            </div>       
        )
    }
}
export default Header;