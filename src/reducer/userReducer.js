import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name:'users',
    initialState: [],
    reducers:{
        adduser:(state, action)=>{
            state.push(action.payload)
        }
    }
});

const { reducer, actions} =UserSlice;
export const {adduser}=actions;
export default reducer
export const UserReducer= UserSlice.reducer

