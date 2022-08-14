import { BlogState } from './../../types';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'; 

const LOCAL_STORAGE_KEY = "blog-list";

function getBlogListFromLocalStorage()
{
  const localStorageBlog = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if(localStorageBlog) return JSON.parse(localStorageBlog);
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
  return []
}

const initialState = {
    blogList: getBlogListFromLocalStorage(),
    filteredBlogList: []
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
        },
        getFilteredBlogList: (state, action: PayloadAction<string | undefined>) => {
            const blogList = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
            const filteredBlogList = blogList.filter((item: any) => item.category == action.payload)
            state.filteredBlogList = filteredBlogList;
        }
    }
})

export const { addBlog, getFilteredBlogList } = blogSlice.actions;

export default blogSlice.reducer;