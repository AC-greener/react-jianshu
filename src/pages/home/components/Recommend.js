import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {this.props.recommendList.map((item) => {
          return (
            <a href='https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop'>
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
            </a>
          )
        })}
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)