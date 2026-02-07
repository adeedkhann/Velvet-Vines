import { configureStore } from "@reduxjs/toolkit";
import Product from "../components/Product";
import productReducer from "../features.js/productSlice";
import cartReducer from '../features.js/cartSlice'
import { BiCategory } from "react-icons/bi";
import ShopByCatReducer  from "../features.js/shopByCatSlice";

export const store = configureStore({
    reducer:{
        product : productReducer,
        cart : cartReducer,
        Category : ShopByCatReducer,
    }
})
