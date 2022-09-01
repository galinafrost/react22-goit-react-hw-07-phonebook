import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactReducer from './root-reducer'

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistContacts = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
    reducer: {
        contactReducer: persistContacts
    }
})

export const persistore = persistStore(store)