import React, { Component} from 'react';
import '../css/loading.css';
import Gif from '../../../img/loading/gif-transp-1,5.gif';
let myVar;
class Loading extends Component{
    
    constructor(props){
        super(props);
        this.state={
            show: props.show
        }
        setTimeout(this.disable.bind(this), 3000);
    }
  
    disable() {
        this.setState({ show: false });
    }
  
    render(){
       return(
        <div>
            {
               this.state.show ?
                    <div className="loading">
                        <div className="img-loading">
                            <img src={Gif} />
                        </div>
                    </div>  
                :
                    null
            }
        </div> 
        )     
    }
}

export default Loading;