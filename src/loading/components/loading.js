import React, { Component} from 'react';
import '../css/loading.css';
import Gif from '../../../img/loading/gif-transp-1,5.gif';
import {connect} from 'react-redux';
class Loading extends Component{
    
    constructor(props){
        super(props);
        this.state={
            show: this.props.show
            //show:props.state
        }
        setTimeout(this.disable.bind(this), 300);
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
        show: state.show
    }
}


export default connect(mapStateToProps)(Loading);