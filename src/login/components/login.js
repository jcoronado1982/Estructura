import React, { Component } from 'react';
import '../css/login.css';
import UserName from './username';
import Password from './password';

class Login extends Component {
  
  constructor(){
    super();
    this.state={
      Visible:true,
      };
      this.hide=this.hide.bind(this);
  }
  
hide(state,props){
   this.setState({
Visible:false,
   });
  
  }

  render() {
    if(this.state.Visible)
    {
      
    return (
      <div className="loginBackground">
        
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
                    <div className="close" onClick={this.hide}>
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
    }else{
      return(null)
    }
  }
}

export default Login;