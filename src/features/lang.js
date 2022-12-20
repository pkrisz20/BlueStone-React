import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "lang",
    initialState: { value: "en" },
    reducers: {
        changeLanguage: (state, actions) => {
            state.value = action.lang;
        },
    }
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;