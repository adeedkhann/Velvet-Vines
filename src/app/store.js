import { configureStore } from "@reduxjs/toolkit";
import Product from "../components/Product";
import productReducer from "../features.js/productSlice";
import cartReducer from '../features.js/cartSlice'


export const store = configureStore({
    reducer:{
        product : productReducer,
        cart : cartReducer
    }
})
