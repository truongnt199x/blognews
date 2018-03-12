import {
    API_CALL_REQUEST,
    API_CALL_SUCCESS,
    API_CALL_FAILURE,
    FETCH_COMMENT
} from '../actions/actionTypes';


export const apiReducer = (state=null,action) => {
    switch(action.type){
        case API_CALL_SUCCESS:
        return {...state,data:action.payload};
        break;
        case API_CALL_FAILURE:
        return {...state,error:"error"};
        break;
        case FETCH_COMMENT:
        return {state,data:action.payload};
        break;
        default:
        return state;
    }
};

