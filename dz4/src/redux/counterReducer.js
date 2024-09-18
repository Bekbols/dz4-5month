import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementTen: (state, action) => {
            state.count += action.payload
        },
        decrementTen: (state, action) => {
            state.count -= action.payload
        },
        reset:(state) => {
                state.count = 0;
        }
    }
})
export const {increment,decrement,incrementTen,decrementTen,reset} = counterReducer.actions
export default counterReducer.reducer