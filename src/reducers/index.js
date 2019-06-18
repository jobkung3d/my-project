import { combineReducers } from 'redux';
import ProductReducer from './ProjectReducer';

const rootReducer = combineReducers({
    project: ProductReducer
})

export default rootReducer