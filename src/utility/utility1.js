import React, { Component} from 'react';
import { SHOW_USERS } from './apiRestAction'
import Services from '../services/services'
class Utility extends Component{
    constructor(props) {
        super(props);              
        this.state = {            
        };
    }
  acceptMethods = (fucncionPrueba1,fucncionPrueba2,llamado1) => {
    this.fucncionPrueba1 = fucncionPrueba1;
    this.fucncionPrueba2 = fucncionPrueba2;
    this.cualquiera = llamado1;
    };
   render(){
    return(
        <div className="utilityDiv1">
            <Services shareMethods={this.acceptMethods}/>
            <button onClick={() => this.fucncionPrueba1()}>Click1</button>     
            <button onClick={() => this.fucncionPrueba2()}>Click2</button>
            <button onClick={() => this.cualquiera()}>Click3</button>     
            </div>        
        )
    } 
}
export default Utility;
