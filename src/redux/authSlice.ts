import {createSlice,type PayloadAction} from "@reduxjs/toolkit"

export type AuthState={
    auth:boolean | null,
    apiId:string | null
}

const initialState:AuthState={
    auth:null,
    apiId:null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuthorized:(state,action:PayloadAction<boolean | null>)=>{
            state.auth=action.payload
        },
        setAuthorizedId:(state,action:PayloadAction<string | null>)=>{
            state.apiId=action.payload
        }
    }
})

export const {setAuthorized,setAuthorizedId}=authSlice.actions

export default authSlice.reducer