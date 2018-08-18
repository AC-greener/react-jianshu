import React, { PureComponent } from 'react'
import { WriterWrapper } from '../style'
import { connect } from 'react-redux'
class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        HomeWork
      </WriterWrapper>
    )
  }
}

// const mapState = (state) => ({
  
// })

export default connect()(Writer)