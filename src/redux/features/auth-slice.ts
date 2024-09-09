//slices are used hold a group of related states and variables that are accessed by the store

//initial state is an object containing all initial values of all the states related to a given slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean;
    username: string;
    id: string;
    isModerator: boolean;
}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        id: "",
        isModerator: false,
    } as AuthState
} as initialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    id: "a1",
                    isModerator: false,
                } ,
            };
        },

        toggleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator;
        },
    },
});

//to be able to use the states and functions in the slice
export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;




