import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    items : [],
    totalQuantity:0,
    totalAmount:0
}


export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart(state , action){
            const newItem = action.payload
            const existItem = state.items.find((item)=> item.id === newItem.id)

            state.totalQuantity += newItem.quantity
            state.totalAmount += newItem.price * newItem.quantity

            if(!existItem){
                state.items.push({
                    id :newItem.id,
                    title : newItem.title,
                    price : newItem.price,
                    image : newItem.image,
                    quantity : newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity
                })
                
            }else{
                existItem.quantity +=newItem.quantity
                existItem.totalPrice += newItem.price * newItem.quantity
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

        if (existingItem) {
            state.totalQuantity -= existingItem.quantity;
            state.totalAmount -= existingItem.totalPrice;
            state.items = state.items.filter((item) => item.id !== id);
        }
        },
        decQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
    
            if (existingItem) {
            if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id);
        } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
        }
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
        }
        },
        incQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
                state.totalQuantity++;
                state.totalAmount += existingItem.price;
             }
        },
        

    }
})

export const  {addToCart , removeFromCart , incQuantity , decQuantity} = cartSlice.actions
export default cartSlice.reducer