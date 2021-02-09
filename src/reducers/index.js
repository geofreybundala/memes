import {combineReducers} from 'redux'


export const randomReducer = (state=[],action)=>{
    switch(action.type){
        case 'RANDOM_MEME':
            return [...state,action.payload];
        default: 
          return state 
    }
}

export default combineReducers({
    random:randomReducer
})