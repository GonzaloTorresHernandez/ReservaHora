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
        openLogin: (state) => {
            state.isOpenLogin = true;
        },
        openRegister: (state) => {
            state.isOpenRegister = true;
        },
        closeLogin: (state) => {
            state.isOpenLogin = false;
        },
        closeRegister: (state) => {
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
    openLogin,
    closeLogin,
    openRegister,
    closeRegister,
    detaultValues,
} = globalSlice.actions;