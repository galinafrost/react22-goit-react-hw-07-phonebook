import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./contacts/contact-slice";

const rootReducer = combineReducers({
    contacts: contactReducer
})

export default rootReducer