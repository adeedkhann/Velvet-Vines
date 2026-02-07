import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Category : ""
}

export const shopByCatSlice = createSlice({
    name:"Category",
    initialState,
    reducers : {
        updateCategory(state,action){
            state.Category = action.payload;
        }
    }

})

export const {updateCategory} = shopByCatSlice.actions;
export default shopByCatSlice.reducer