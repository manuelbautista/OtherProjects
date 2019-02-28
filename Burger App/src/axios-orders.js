import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-14dcb.firebaseio.com/'
});

export default instance;