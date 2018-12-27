import React, { Component } from 'react';
import '../css/login.css';
import UserName from './username';
import Password from './password';

function Login (props) {  
    return (
      <div className="loginBackground">   {props.children}     
          <div className="loginWindow">
            <div>
            <div className="login">
              <div className="section1">
                <div className="option">
                    boton inicia facebook                    
                </div>
                <div className="option">
                    boton inicia twitter
                </div>
                <div className="option">
                  <div className="close" onClick={props.handleCloseLogin}>
                      close
                  </div>
                </div>
              </div>
              <div className="section2">
                  <div className="option">
                    <UserName/>
                  </div>
                  <div className="option">
                    <Password/>
                  </div>
                  <div className="option">
                    enter
                  </div>
                  <div className="option">
                    forgot password
                  </div>
              </div>
              <div className="section3">
                <div className="option">
                  Not registered?
                </div>
                <div className="option">
                  Boton registrar
                </div>
              </div>
            </div>
          </div>
        </div>         
        </div>      
     )      
}
export default Login;