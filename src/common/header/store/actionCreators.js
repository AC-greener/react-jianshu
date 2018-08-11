import * as constants from './constants'
import {fromJS} from  'immutable';
import axios from 'axios';  //发送ajax数据

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),    //把这里的data也变成imuutable类型的数组
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});    //返回一个对象

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const pageChange = (page) => ({    //接收到传递过来的page
    type: constants.PAGE_CHANGE,
    page

})
export const getList = () => {
    return (dispatch) => {
        //返回一个函数  必须使用redux-thunk
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log("error");
        })
    }
};