import React, { PureComponent } from 'react'
import { WriterWrapper } from '../style'
import { connect } from 'react-redux'
class Writer extends PureComponent {
  render() {
    return (
      <div></div>
      // <WriterWrapper>
      //   HomeWork
      // </WriterWrapper>
    )
  }
}

// const mapState = (state) => ({
  
// })

export default connect()(Writer)