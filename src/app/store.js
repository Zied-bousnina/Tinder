import {configureStore} from '@reduxjs/toolkit'
import tinder from '../features/tinder/tinderSlice'
export const store = configureStore({
    reducer: {
        tinder
        
    }
})