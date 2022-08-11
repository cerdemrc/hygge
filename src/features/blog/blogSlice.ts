import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'; 
import { BlogState } from "./types";

const initialState:BlogState = {
    id: 0,
    title: '',
    author: '',
    image: '',
    category: '',
    content: ''
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers:{
        getBlogTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }
})

export const { getBlogTitle } = blogSlice.actions;

export default blogSlice.reducer;