import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice"

const store=configureStore({
    reducer:{
        store:authReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export default store