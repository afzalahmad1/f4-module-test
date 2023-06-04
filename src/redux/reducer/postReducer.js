import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "../actions/actionsType";

let initialState = {
    loading : true,
    data : [],
    error : ''
}


export const postReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return({
                ...state,
                loading: true
            });
        case FETCH_POST_SUCCESS:
            return({
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            });
        case FETCH_POST_FAILURE:
            return({
                ...state,
                loading: false,
                error: action.payload,
                data: []
            })
        default: return state
            
    }
}