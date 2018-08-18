import React, { PureComponent } from 'react'
import { connect } from 'react-redux'    //连接组件和数据
import { TopicWrapper, TopicItem } from '../style.js'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className='topic-pic'
                  src={item.get('imgUrl')}
                  alt=''
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic)




