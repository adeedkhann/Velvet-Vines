import { configureStore } from "@reduxjs/toolkit";
import Product from "../components/Product";
import productReducer from "../features.js/productSlice";

export const store = configureStore({
    reducer:{
        product : productReducer,
    }
})
