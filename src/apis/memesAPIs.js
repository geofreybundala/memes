import axios from 'axios';
const url ='https://icanhazdadjoke.com';

const instance = axios.create({
                        baseURL:url,
                        headers:{ 'Accept': 'application/json'}
                        });


export default instance