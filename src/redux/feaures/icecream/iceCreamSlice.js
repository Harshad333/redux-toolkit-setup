import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIcecreams: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions