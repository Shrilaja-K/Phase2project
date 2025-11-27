export const ADD_FAV =  "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";



export interface Addfav{
    type:typeof ADD_FAV;
    payload:any []
}

export interface Removefav{
    type:typeof REMOVE_FAV;
    payload:any []
}

export const Fav = (post,userEmail) => ({
  type: ADD_FAV,
  payload: post,
  userEmail
});

export const Remfav = (post,userEmail) => ({
  type: REMOVE_FAV,
  payload: post,
  userEmail
});

