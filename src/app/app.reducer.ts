import { ActionReducerMap } from "@ngrx/store";
import { postReducer, PostState } from "./layout/post/post.reducer";
import { userReducer, UserState } from "./layout/user/user.reducer";

export interface AppState {
    users:UserState,
    posts:PostState
}

export const appReducer:ActionReducerMap<AppState> = {
    users:userReducer,
    posts:postReducer,
}