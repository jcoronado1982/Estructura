import React, { Component} from 'react';
import '../css/loading.css';
import Gif from '../../../img/loading/gif-transp-1,5.gif';
import Gif2 from './gif2';
import {connect} from 'react-redux';
function Loading(props){   
       return(
        props.show?
        <Gif2/>
        :null
        )     
    }

function mapStateToProps(state,props){
    return{
        show: state.LoadingReducer.load
    }
}

export default connect(mapStateToProps)(Loading);