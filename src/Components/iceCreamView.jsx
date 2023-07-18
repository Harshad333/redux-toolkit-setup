import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../redux/feaures/icecream/iceCreamSlice'

const IceCreamView = () => {
    const numIceCream = useSelector((state) => state.iceCream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of ice cream - {numIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>order ice cream</button>
            <button onClick={() => dispatch(restocked(4))}>restock ice cream</button>
        </div>
    )
}

export default IceCreamView