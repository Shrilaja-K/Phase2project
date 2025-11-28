import { SET_SEARCH } from "./searchType";
import type { searchAction } from "./searchAction";

const initialState = {
    search: ""
}

export default function searchReducer(state = initialState, action:searchAction) {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}