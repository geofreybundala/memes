import {combineReducers} from 'redux'
import {randomReducer} from './randomMemesReducer'
import {getMemesReducer} from './allMemesReducer'



export default combineReducers({
    random:randomReducer,
    memes:getMemesReducer
})