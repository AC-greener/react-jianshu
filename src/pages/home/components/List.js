import React, { PureComponent } from 'react'
import {ListInfo, ListItem, LoadMore} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
import { Link } from 'react-router-dom'
class List extends PureComponent {
  render() {
    return (
      <div>
          {
            this.props.articleList.map((item, index) => {
              return (
                <Link key={index} to='/detail'>
                  <ListItem >
                    <img className='pic' src={item.get('imgUrl')} alt='' />
                    <ListInfo>
                      <h3 className='title'>{item.get('title')}</h3>
                      <p className='desc'>{item.get('desc')}</p>
                    </ListInfo>
                  </ListItem>
                </Link>
              )
            })
          }
          <LoadMore onClick={() => {this.props.getMoreList(this.props.articlePage)}}>
            更多文章
          </LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),  
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage))
  }
})
export default connect(mapState, mapDispatch)(List)