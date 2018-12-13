import React, { Component } from 'react';
import '../css/login.css';

class Login extends Component {
  
  constructor(){
    super();
    const t=0;
    this.state={
      Login:true,
      SignOff:false,
      Text:'Login',
      Text2:'SignOff',
      };
      this.ChangeState=this.ChangeState.bind(this);
  }
  
ChangeState(state,props){
   this.setState({
    Text:'SignOff',
   });
  
  }

  render() {
    return (
     <div onClick={this.ChangeState}>
       {this.state.Text}
     </div>
    )
  }
}

export default Login;