import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    reducers: {}
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // addUser: (state, action) = {
        //     const {name, username, email } = action.payload;
        //     state.name = name;
        //     state.username = username;
        //     state.email = email;
        // },


        addUser: (state, action) => {
            const { name, username, email } = action.payload;
            return {
                ...state,
                name,
                username,
                email,
            };
        },
        
    }
})