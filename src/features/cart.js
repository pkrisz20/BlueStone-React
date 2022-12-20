import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: { value: [] },
    reducers: {
        increment: (state, actions) => {
            state.value.filter(item => item.id === actions.payload).map(item => item.quantity += 1);
        },
        decrement: (state, actions) => {
            state.value.filter(item => item.id === actions.payload).map(item => item.quantity -= 1);
        },
        incrementByAmount: (state, actions) => {
            state.value.filter(item => item.id === actions.payload[0]).map(item => item.quantity = actions.payload[1]);
        },
        clearCart: (state) => {
            state.value = [];
        },
        deleteItem: (state, actions) => { state.value = state.value.filter(item => item.id !== actions.payload); },
        addCart: (state, actions) => {
            state.value.push(actions.payload);
        }
    }
});

export const { increment, decrement, incrementByAmount, clearCart, addCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;