import axios from 'axios'
import { backendUrl } from '../keys/keywords'
const baseUrl = `${backendUrl}/api/auth/login`

export const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}