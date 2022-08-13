import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'; 
import { BlogState } from '../../types';

const LOCAL_STORAGE_KEY = "blog-list";

function getBlogListFromLocalStorage()
{
  const localStorageBlog = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if(localStorageBlog) return JSON.parse(localStorageBlog);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
  return []
}

const initialState = {
    blogList: getBlogListFromLocalStorage()
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers:{
        addBlog: (state, action: PayloadAction<BlogState>) => {
            state.blogList.push(action.payload);
            const blogList = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            if(blogList)
            {
                const blogListArr = JSON.parse(blogList);
                blogListArr.push({...action.payload});  
                window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogListArr));

            }
            else {
                window.localStorage.setItem(
                    LOCAL_STORAGE_KEY,
                    JSON.stringify([
                        {
                        ...action.payload,
                        },
                    ])
                );
              }
        }
    }
})

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;