import memesAPIs from '../apis/memesAPIs'

export const randomAction =()=>{
    return async dispatch =>{
        const response =await  memesAPIs.get('/');
        dispatch({type:'RANDOM_MEME',payload:response.data})
    }
}


export const allMemeAction=(page=1)=>{
        return async dispatch=>{
            const response = await memesAPIs.get(`/search?page=${page}`)
            console.log(response.data)
            dispatch({type:'GET_MEMES',payload:response.data})
        }
}


