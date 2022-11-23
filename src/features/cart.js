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
        // deleteItem: (state, actions) => {
            // console.log(state);
            // state.value.filter(element => { return element.id !== actions.payload });
            // console.log(state.value.filter(element => element !== action.payload));
        // },
        addCart: (state, actions) => {
            state.value.push(actions.payload);
        }
    }
});

export const { increment, decrement, incrementByAmount, clearCart, addCart } = cartSlice.actions;

export default cartSlice.reducer;