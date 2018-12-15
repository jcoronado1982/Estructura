import React, { Component } from 'react';
import '../css/login.css';
import '../css/loginheader.css';
import Window from './login';

class LoginHeader extends Component {
  
  constructor(){
    super();
    const t=0;
    this.state={
      Login:true,
      SignOff:false,
      Text:'Login',
      Text2:'SignOff',
      visible:false,
      };
      this.show=this.show.bind(this);
  }
  
show(state,props){
   this.setState({
    Text:'Log-in',
    visible:true,
    
   });
  
  }

  render() {    
    if(this.state.visible)
    {
      return (
        <div onClick={this.show} className="log-in">
          {this.state.Text}
          <div className="floating">
            <Window/>
          </div>
        </div>
       )
    }else{
      return (
        <div onClick={this.show} className="log-in">
          {this.state.Text}
        </div>
       )
    }
    
  }
}

export default LoginHeader;