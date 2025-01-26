import { createSlice } from "@reduxjs/toolkit";

//  Definir Tipado
interface GlobalState {
    isModalOpen: boolean;
    isOpenLogin: boolean;
    isOpenRegister: boolean;
}

//  Definir valores iniciales
const initialState: GlobalState = {
    isModalOpen: false,
    isOpenLogin: false,
    isOpenRegister: false,
}

export const  globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        toggleLogin: (state) => {
            state.isOpenLogin = !state.isOpenLogin;
        },
        toggleRegister: (state) => {
            state.isOpenRegister = !state.isOpenRegister;
        },
        loginDefault: (state) => {
            state.isOpenLogin = false;
        },
        registerDefault: (state) => {
            state.isOpenRegister = false;
        },
        detaultValues: (state) => {
            state.isModalOpen = false;
            state.isOpenLogin = false;
            state.isOpenRegister = false;
        } 
    }
});

export const {
    toggleModal,
    toggleLogin,
    toggleRegister,
    loginDefault,
    registerDefault,
    detaultValues,
} = globalSlice.actions;