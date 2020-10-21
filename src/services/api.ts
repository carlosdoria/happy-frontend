import axios from 'axios'

const api = axios.create({
    baseURL: 'https://happy-app-deploy.herokuapp.com/',
})

export default api
