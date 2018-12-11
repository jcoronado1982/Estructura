import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HandleError from '../../error/containers/handle-error';
import Loading from '../../components/loading';
class Home extends Component {
    state = {
     modalVisible: false,     
    }
 
  render() {
    return (
      <HandleError>
        <Loading/>
        <HomeLayout />        
      </HandleError>
    )
  }
}

export default Home