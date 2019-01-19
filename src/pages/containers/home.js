import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HandleError from '../../error/containers/handle-error';

import { connect } from 'react-redux';
import { showUsers } from '../../utility/apiRestAction'

class Home extends Component {

  componentWillMount() {
    this.props.showUsers()
  }
  renderUsersList() {
    return this.props.users.map((user) => {
      console.log(user.name);
    })
  }

  
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
    search: state.search,
    users: state.user.list,
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
export default connect(mapStateToProps, { showUsers })(Home)