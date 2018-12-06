import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/header.css';
class Header extends Component{

    render(){
        return(
            <div class= "HeaderBox">
                <center>
                    <h3><ul>
          <li>
            <Link to="/">Loan MainPage</Link>
          </li>
          <li>
            <Link to="/Help">Help</Link>
          </li>
        </ul></h3>
                </center>
            </div>              
        )
    }
}
export default Header;