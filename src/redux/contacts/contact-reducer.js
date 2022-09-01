import { createReducer } from '@reduxjs/toolkit'

import { addContact, removeContact } from './contact-actions'

const initialStore = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const contactReducer = createReducer(initialStore, {
    [addContact]: (store, { _, payload }) => [...store, payload],
    [removeContact]: (store, { _, payload }) => store.filter(item => item.id !== payload),
})

export default contactReducer