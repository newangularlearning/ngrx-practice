import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>("users");


export const selectUsers = createSelector(
    selectUserState,
    user=>user.users
)