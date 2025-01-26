import { createSlice } from "@reduxjs/toolkit";

interface User {
    id?: string;
    email?: string;
    nombre?: string;
    apellido?: string;
}

interface AuthSlice {
    status: string;
    user: User;
    errorMessage: string | undefined;
}

//  Definir valores iniciales
const initialState: AuthSlice = {
    status: 'checking', //  authenticated - not-authenticated - checking
    user: {},
    errorMessage: undefined,
}

export const  authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {},
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload,
            state.errorMessage = undefined;
        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    }
});

export const {
    onChecking,
    onLogin,
    onLogout,
    clearErrorMessage,
} = authSlice.actions;