import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./contacts/contact-reducer";

const rootReducer = combineReducers({
    contacts: contactReducer
})

export default rootReducer