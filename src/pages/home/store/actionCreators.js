import axios from 'axios'
import * as constants from './constants'
import { fromJS } from  'immutable'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList,
})

const addHomeList = (result, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(result),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result))   //reducer接收这里dispatch过去的action
    })
  }
}

export const getMoreList = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + articlePage).then((res) => {
      const result = res.data.data;
      console.log(result)
      dispatch(addHomeList(result, articlePage+1))   
    })
  }
}

export const watchScrollTop = (isShow) => ({
  type: constants.SHOW_SCROLL,
  isShow
})

