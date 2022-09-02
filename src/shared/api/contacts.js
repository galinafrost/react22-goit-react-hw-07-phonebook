import axios from 'axios'

const instance = axios.create({
    baseURL: "https://631075dd826b98071a41f20f.mockapi.io/contacts/contacts"
})

export const getContacts = async () => {
    const { data } = await instance.get('/')
    return data
}

export const remoweContacts = async (id) => {
    const { data } = await instance.delete(`/${id}`)
    return data
}

export const addContacts = async (data) => {
    const { data: result } = await instance.post(`/`, data)
    return result
}