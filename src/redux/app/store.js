import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger';
import cakeReducer from '../feaures/cake/cakeSlice';
import iceCreamReducer from '../feaures/icecream/iceCreamSlice';
import userReducer from '../feaures/user/userSlice';


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store