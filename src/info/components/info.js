import React from 'react';
import '../css/info.css';
import { Link, NavLink } from'react-router-dom';
function Info(props){
  return (
       <div className="info">    
            <div className="information">
                <h3>Information</h3>

                <div className="item2">
                    <NavLink to="/" activeClassName="is-selected">
                            how does it work?        
                    </NavLink>  
                </div>    
                <div className="item2">
                    <NavLink to="/" activeClassName="is-selected">
                            Requirements       
                    </NavLink>  
                </div>      
                <div className="item2">
                    <NavLink to="/" activeClassName="is-selected">
                            Terms and Conditions       
                    </NavLink>  
                </div>      
                <div className="item2">
                    <NavLink to="/" activeClassName="is-selected">
                            Frequent Questions       
                    </NavLink>  
                </div> 
           </div>                                              
    </div>
  )
}
export default Info;