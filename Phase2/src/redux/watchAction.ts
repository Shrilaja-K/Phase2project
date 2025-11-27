export const ADD_LIST =  "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";



export interface Addlist{
    type:typeof ADD_LIST;
    payload:any []
}

export interface Removelist{
    type:typeof REMOVE_LIST;
    payload:any []
}

export const List = (post,userEmail) => ({
  type: ADD_LIST,
  payload: post,
  userEmail
});

export const Remlist = (post,userEmail) => ({
  type: REMOVE_LIST,
  payload: post,
  userEmail
});

