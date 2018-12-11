import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
  render() {
    return (
      <HandleError>
       
        <HomeLayout />        
      </HandleError>
    )
  }
}

export default Home