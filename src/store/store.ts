import { configureStore } from '@reduxjs/toolkit';
import { globalSlice } from './global/globalSlice';

export const store = configureStore({
    reducer: {
        'global': globalSlice.reducer,
  
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

// Tipando el estado global (RootState)
export type RootState = ReturnType<typeof store.getState>

// Tipando el dispatch
export type AppDispatch = typeof store.dispatch