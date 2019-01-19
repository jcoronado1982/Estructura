import React, { Component} from 'react';
import { SHOW_USERS } from '../utility/apiRestAction'
import Services from '../services/services'
class Utility extends Component{
    constructor(props) {
        super(props);
        
      
        this.state = {            
        };
        this.child1=React.createRef();
    }
call1 = () =>{
    // this.child1.current.llamado1();
};

  acceptMethods = (fucncionPrueba1,fucncionPrueba2,llamado1) => {
    this.fucncionPrueba1 = fucncionPrueba1;
    this.fucncionPrueba2 = fucncionPrueba2;
    this.cualquiera = llamado1;
  };

   render(){
    return(
        <div>
            <Services shareMethods={this.acceptMethods}/>
            <button onClick={() => this.fucncionPrueba1()}>Click1</button>     
            <button onClick={() => this.fucncionPrueba2()}>Click2</button>
            <button onClick={() => this.cualquiera()}>Click3</button>     
            </div>
        
        )
} 
//  request1(){
//      axios.get('http://jsonplaceholder.typicode.com/users')
//              .then((response) => {
//                 return map(response.data.name)
//              }) 
//  }
    
}
export default Utility;

function Saludar(props) {
    alert("etsts");
    return (
      <div>
        <h1>Hola, {props.name}!</h1>
      </div>
    );
  }