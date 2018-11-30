
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
  state = {
    modalVisible: false,
  }
 
  
  render() {
    return (
      <HandleError>
        <HomeLayout>
        
         
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home