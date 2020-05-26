import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://random-workout-app.firebaseio.com/'
});

export default instance;