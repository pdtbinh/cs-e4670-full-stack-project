import axios from 'axios'
const baseUrl = '/api/projects'

let token = null
export const setToken = newToken => token = `Bearer ${newToken}`

export const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export const create = async project => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, project, config)
    return response.data
}

export const edit = async (id, project) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(`${baseUrl}/${id}`, project, config)
    return response.data
}

export const remove = async id => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}