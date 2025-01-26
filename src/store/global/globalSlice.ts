import { createSlice } from "@reduxjs/toolkit";

//  Definir Tipado
interface GlobalState {
    isOpenLogin: boolean;
    isOpenRegister: boolean;
}

//  Definir valores iniciales
const initialState: GlobalState = {
    isOpenLogin: false,
    isOpenRegister: false,
}

export const  globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        toggleLogin: (state) => {
            state.isOpenLogin = !state.isOpenLogin;
        },
        toggleRegister: (state) => {
            state.isOpenRegister = !state.isOpenRegister;
        },
    }
});

export const {
    toggleLogin,
    toggleRegister,
} = globalSlice.actions;