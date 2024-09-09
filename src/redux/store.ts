
//store is used for holding all states and variables

//a reducer is a function that takes in an action and
//previous state of the application to make some changes to the state
//according to the action and returns the new state



import { configureStore} from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        authReducer,
    },
});

export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch

//dispatch is the core function used to send actions to redux store

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;