import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  
  render () {
    var myStyle = {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 200,
      fontSize:24,
      fontFamily: 'Philosopher', 
    };
    const { loginStatus } = this.props;
    if(loginStatus) {
      return (
        <h3 style = {myStyle}>write your code here</h3>
      )
    } else {
      return <Redirect to='/login' />
    }
  }  
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})


export default connect(mapState, null)(Write)
