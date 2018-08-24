import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
  render () {
    return (<div>Hi</div>)
  }
}

function mapStateToProps (state, ownProps) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
