import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HandleError from '../../error/containers/handle-error';

import { connect } from 'react-redux';
class Home extends Component {
  render() {
    return (
      <HandleError>
        <HomeLayout data={this.props.grids}/>        
      </HandleError>
    )
  }
}
function mapStateToProps(state, props) {
  //console.log(state.data);
  //console.log(state.data.categories);
  //console.log(state.data.entities.categories);
  const grids = state.data.tablas.map((categoryId) => {
    return state.data.info.grids[categoryId]
  })
  return {
    grids: grids,
    search: state.search
  }
  // function mapStateToProps(state, props) {
  //   //console.log(state.data.categories);
  //   //console.log(state.data.entities.categories);
  //   const categories = state.data.categories.map((categoryId) => {
  //     return state.data.entities.categories[categoryId]
  //   })
  //   return {
  //     categories: categories,
  //     search: state.search
  //   }
  

}
export default connect(mapStateToProps)(Home)