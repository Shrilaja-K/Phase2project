import { SET_SEARCH } from "./searchType";

export type searchAction = {
    type:typeof SET_SEARCH,
    payload:string
}
export const setSearch = (text:string) => ({
    type: SET_SEARCH,
    payload: text
})