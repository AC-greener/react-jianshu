import axios from 'axios'
import * as constants from './constants'
import { fromJS } from  'immutable'

const changeDetailData = (result) => ({
  type: constants.CHANGE_DETAIL,
  title: result.title,
  content: result.content
})

export const getDetail = (id) => {
  return (disptach) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      disptach(changeDetailData(result))
    })
  }
}