import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store/index';
import { reducer as homeReducer } from '../pages/home/store/index'
const reducer =  combineReducers({  //整合reducer
    header: headerReducer,
    home: homeReducer
});

export default reducer;