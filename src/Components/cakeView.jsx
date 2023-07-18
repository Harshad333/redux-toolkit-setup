import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../redux/feaures/cake/cakeSlice'


const CakeView = () => {
    const numOFcake = useSelector((state) => state.cake.numberOfcake)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cake ={numOFcake}</h2>
            <button onClick={() => dispatch(ordered())}>order cake</button>
            <button onClick={() => dispatch(restocked(2))}>restock cake</button>
        </div>
    )
}

export default CakeView