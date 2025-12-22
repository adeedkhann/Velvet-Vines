import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    quantity : 0,
    id : null,
}


export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setQuantity : (state, action)=>{
            state.quantity = action.payload;
        },
        setId : (state , action)=>{
            state.id =action.payload
        },
    }
})

export const  {setQuantity , setId} = productSlice.actions
export default productSlice.reducer