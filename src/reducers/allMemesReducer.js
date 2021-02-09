
export const getMemesReducer = (state=[],action)=>{
    switch(action.type){
        case 'GET_MEMES':
            return [...state,action.payload]
        default: 
          return state 
    }
}