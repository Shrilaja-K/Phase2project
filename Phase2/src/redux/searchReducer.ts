import { SET_SEARCH } from "./searchType";

const initialState = {
    search: ""
}

export default function searchReducer(state = initialState, action) {
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