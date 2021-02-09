import memesAPIs from '../apis/memesAPIs'

export const randomAction =()=>{
    return async dispatch =>{
        const response =await  memesAPIs.get('/');
        dispatch({type:'RANDOM_MEME',payload:response.data})
    }
}


