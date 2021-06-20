import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.reducer";

export const selectPostState = createFeatureSelector<PostState>("posts");

export const selectPosts = createSelector(
    selectPostState,
    posts=>posts.posts
)