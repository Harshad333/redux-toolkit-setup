import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfcake: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfcake--
        },
        restocked: (state, action) => {
            state.numberOfcake += action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions