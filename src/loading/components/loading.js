import React, { Component} from 'react';
//import '../styles/loading.css';
import Gif from '../../../img/loading/gif-transp-1,5.gif';
let myVar;
class Loading extends Component{
    
constructor(props){
    super(props);
    this.state={
        loadingHome: true,
        loadingHelp: true,
        loadingDetalle: true,
        losdingRegister: true,
        show:true,
    }
}
getState(){
    return {loadingHome}
}
disable() {
    this.setState({ loadingHome: false });
    setTimeout(this.disable.bind(this), 3000);
  }
  disable2() {
    this.setState({ show: false });
    setTimeout(this.disable2.bind(this), 3000);
  }
 
    render(){
       
        if(this.state.loadingHome)
        {
        return(
            <div 
            //className="item footer"
            ><center>
                {this.state.show ? <img src={Gif} /> : null}
            </center>
            </div>    
            );  }else{return null;}
            
             
    }
}



export default Loading;