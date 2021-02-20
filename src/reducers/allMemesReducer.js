
export const getMemesReducer = (state=[],action)=>{
    switch(action.type){
        case 'GET_MEMES':
            let newState =[...state,action.payload]
            console.log(newState)
            return newState
        default: 
          return state 
    }
}