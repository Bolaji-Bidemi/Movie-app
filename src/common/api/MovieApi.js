import axios from 'axios'

const ApiClient = axios.create({
    baseURL: "https://www.omdbapi.com"
})
export default ApiClient