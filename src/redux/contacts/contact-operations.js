import { getContacts, remoweContacts, addContacts } from "../../shared/api/contacts";

import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, thunkAPI) => {
        try {
            const result = await getContacts()
            return result
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const addContactsFetch = createAsyncThunk(
    'contacts/add',
    async (data, thunkAPI) => {
        try {
            const result = await addContacts(data)
            return result
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const deleteContacts = createAsyncThunk(
    'contacts/remove',
    async (id, thunkAPI) => {
        try {
            const result = await remoweContacts(id)
            return result
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)