import { SET_SEARCH } from "./searchType";

export const setSearch = (text) => ({
    type: SET_SEARCH,
    payload: text
})