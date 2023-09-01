import axios from 'axios'
import { backendUrl } from '../keys/keywords'
const baseUrl = `${backendUrl}/api/users`

export const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const create = async user => {
    const response = await axios.post(baseUrl, user)
    return response.data
}