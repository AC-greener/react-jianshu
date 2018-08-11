import {combineReducers} from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';

const reducer =  combineReducers({  //整合reducer
    header: headerReducer
});

export default reducer;