import { createAction, props } from "@ngrx/store";
import { Post } from "./post.model";

const GET_POSTS = "[POSTS] Get Posts";

const GET_POSTS_SUCCESS = "[POSTS] Posts successfully loaded";

const GET_POSTS_FAILED = "[POSTS] Posts load failed";



export const getPosts = createAction(
    GET_POSTS
    
);


export const getPostsSuccess = createAction(
    GET_POSTS_SUCCESS,
    props<{posts:Post[]}>()
    
);

export const getPostsFailed = createAction(
    GET_POSTS_FAILED,
   
    
);
