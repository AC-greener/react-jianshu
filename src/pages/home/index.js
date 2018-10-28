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

class Home extends PureComponent {
  
  render() {
   
 
    return (
      <HomeWrapper>
        <HomeLeft>
          {/* <img className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' /> */}
          <div id="container">
            <div id="list" style={{left: -625+'px'}}>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="1"/>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="1"/>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4516/cd9298634ca88ca71fc12752acf47917967a5d31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="2"/>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4510/7398b3b419943278df10ce09a5358575f19e2178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="3"/>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="4"/>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="1"/>
                <img src="https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="1"/>
            </div>
            <div id="buttons">
                <span index="1" className="on"></span>
                <span index="2"></span>
                <span index="3"></span>
                <span index="4"></span>
                <span index="5"></span>
            </div>
            <a href="javascript:;" id="prev" className="arrow">&lt;</a>
            <a href="javascript:;" id="next" className="arrow">&gt;</a>
        </div>
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