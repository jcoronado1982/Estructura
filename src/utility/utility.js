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
   render(){
    return(
        <div>
            <Services ref={this.child1}/>
            <button onClick={this.call1()}>click to make request1</button>            
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