import { createReducer, on } from "@ngrx/store";
import { getPosts, getPostsFailed, getPostsSuccess } from "./post.actions";
import { Post } from "./post.model";

export interface PostState{
    posts:Post[]
};

export const initialState:PostState = {
    posts:[]
}

export const postReducer = createReducer(
    initialState,
    on(getPosts, (state)=>{
        return {
            ...state
        }
    }),
    on(getPostsSuccess, (state,action)=>{
        return {
            ...state,
            posts:action.posts
        }
    }),
    on(getPostsFailed, (state)=>{
        return {
            ...state
        }
    })
)