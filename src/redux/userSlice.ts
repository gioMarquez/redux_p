import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    userName: "",
    reducers: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) = {
            const {name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
    }
})