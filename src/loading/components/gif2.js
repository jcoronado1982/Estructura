import React, { Component} from 'react';
import '../css/loading.css';
import Gif from '../../../img/loading/gif-transp-1,5.gif';
import {connect} from 'react-redux';
class Gif2 extends Component{    
    constructor(){
        super();
        this.state={
            show: true,
            //show:props.state
        }//setTimeout(this.enable.bind(this), 3000);  
        setTimeout(this.disable.bind(this), 500);                             
    }  
    disable() {
        this.setState({ show: false });
    }
    enable() {
        this.setState({ show: true });
    }
  
    render(){
       return(
        <div> 
            {
               this.state.show ?
                    <div className="loading">
                        <div className="img-loading">
                            <div className="adjustLoading">
                             <img src={Gif} />
                            </div>                          
                        </div>
                    </div>  
                :
                    null
            }
        </div> 
        )     
    }
}
function mapStateToProps(state,props){
    return{
        show: state.LoadingReducer.load,
    }
}

export default connect(mapStateToProps)(Gif2);