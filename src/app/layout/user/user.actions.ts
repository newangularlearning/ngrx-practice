import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

const GET_USER_LIST = "[USER] Get User list";

const GET_USER_LIST_SUCCESS = "[USER] User list successfully loaded";

const GET_USER_LIST_FAILED = "[USER] User list load failed";



export const getUserList = createAction(
    GET_USER_LIST
    
);


export const getUserListSuccess = createAction(
    GET_USER_LIST_SUCCESS,
    props<{users:User[]}>()
    
);

export const getUserListFailed = createAction(
    GET_USER_LIST_FAILED,
   
    
);
