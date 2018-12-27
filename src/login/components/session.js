import React, { Component } from 'react';
import '../css/login.css';
import '../css/session.css';
import Window from './login';

class LoginHeader extends Component {
  
  constructor(){
    super();
    const t=0;
    this.state={
      Text:'Login',
      Text2:'SignOff',
      loginVisible:false,
      };
      this.openLogin=this.openLogin.bind(this);
      this.handleCloseLogin=this.handleCloseLogin.bind(this);
      this.closeLogin=this.closeLogin.bind(this);
  }
  handleCloseLogin=(event)=>{
    this.setState(
      {
        loginVisible:false,
      }
    )
  }
openLogin(state,props){
   this.setState({
    Text:'Log-in',
    loginVisible:true,
   });  
  }
  closeLogin=(event)=>{
    this.setState(
      {
        loginVisible:false
      }
    )
  }

  render() {    
    return(

      this.state.loginVisible?    
      <div  className="log-in">
        {this.state.Text2}
          <Window handleCloseLogin={this.closeLogin}/>
      </div>
     :
      <div onClick={this.openLogin} className="log-in">
        {this.state.Text}
      </div>
    )  
    
    
  }
}    export default LoginHeader;