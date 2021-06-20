import { createReducer, on } from "@ngrx/store";
import { getUserList, getUserListFailed, getUserListSuccess } from "./user.actions";
import { User } from "./user.model";

export interface UserState {
    users:User[]
}

export const initialState:UserState = {
    users:[]
}

export const userReducer = createReducer(
    initialState,
    on(getUserList , (state)=>{
        return {
            ...state
        }
    }),
    on(getUserListSuccess, (state,action)=>{
        return {
            ...state,
            users:action.users
        }
    }),
    on(getUserListFailed, (state)=>{
        return {
            ...state
        }
    })
)