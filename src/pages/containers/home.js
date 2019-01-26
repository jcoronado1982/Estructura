import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HandleError from '../../error/containers/handle-error';

import { connect } from 'react-redux';
import { showUsers } from '../../utility/apiRestAction';

class Home extends Component {

  componentWillMount() {
    this.props.showUsers()
  }
  renderUsersList() {
    return this.props.users.map((user) => {
     // console.log(user.name);
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout dataLabels={this.props.labels} dataGrid={this.props.grids}/>  
      </HandleError>
    )
  }
}
function mapStateToProps(state, props) {
 
  const grids = state.data.idGrids.map((id) => {
    return state.data.dataGrids.grids[id]
  })
  const labels = state.data.idSessionsLabels.map((id) => {
    return state.data.dataSessionsLabels.sessions[id]
  })

  return {
    labels: labels,
    grids: grids,
    search: state.search,
    users: state.user.list,
  }
  
}
export default connect(mapStateToProps, { showUsers })(Home)