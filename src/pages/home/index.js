import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
// import BScroll from 'better-scroll'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)

class Home extends PureComponent {
  
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
   
    return (
      <HomeWrapper>
        <HomeLeft>
          
          {/* <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' /></div>
              <div className="swiper-slide"><img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' /></div>
              <div className="swiper-slide"><img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4516/cd9298634ca88ca71fc12752acf47917967a5d31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' /></div>
            </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          </div> */}
          <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {/* {this.props.showScroll ?  <BackTop onClick={this.handleScrollTop} >返回顶部</BackTop> : null} */}
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) =>({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)    //派发了一个函数
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.watchScrollTop(true))
    } else {
      dispatch(actionCreators.watchScrollTop(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)