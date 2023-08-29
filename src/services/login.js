import axios from 'axios'
const baseUrl = '/api/auth/login'

export const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}