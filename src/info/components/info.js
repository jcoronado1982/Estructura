import React from 'react';
import '../css/info.css';
import { Link, NavLink } from'react-router-dom';
function Help(props){
  return (
    <div>
       <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="is-selected">
                                How does it Work?
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="is-selected">
                                Requirements
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="is-selected">
                                Terms and Conditions
                            </NavLink>
                        </li>
                    </ul> <ul>
                        <li>
                            <NavLink to="/" activeClassName="is-selected">
                                Frequent Questions
                            </NavLink>
                        </li>
                    </ul>
                </nav>
    </div>    
  )

}
export default Help;