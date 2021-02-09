export const randomReducer = (state=[],action)=>{
    switch(action.type){
        case 'RANDOM_MEME':
            return [...state,action.payload];
        case 'GET_MEMES':
            return [...state,action.payload]
        default: 
          return state 
    }
}