import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store/index';
import { reducer as homeReducer } from '../pages/home/store/index';
import { reducer as DetailReducer } from '../pages/detail/store/index';
import { reducer as LoginReducer } from '../pages/login/store/index';
const reducer =  combineReducers({  //整合reducer
    header: headerReducer,
    home: homeReducer,
    detail: DetailReducer,
    login: LoginReducer
});

export default reducer;