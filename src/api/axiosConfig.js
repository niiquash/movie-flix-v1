import axios from 'axios';

export default axios.create({
    baseURL: "https://1930-66-219-222-22.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning": "true"}
})