import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './FeaturesComponents/counter/counterSlice';

export const store = configureStore({
    reducer: {
       counter: counterReducer 
    }
})



export default store;