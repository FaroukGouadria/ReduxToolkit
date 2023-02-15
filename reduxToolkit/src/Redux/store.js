import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import logger from 'redux-logger'
import ApiSlice from './ApiReducer'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        ApiReducer: ApiSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})