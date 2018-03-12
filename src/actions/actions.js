import {API_CALL_SUCCESS, FETCH_COMMENT} from './actionTypes'
import axios from 'axios';
export const fetchData = () => {
    return async dispatch => {
        const res = await axios.get("https://api.myjson.com/bins/q23ih");
        if(res){
            return dispatch({type:API_CALL_SUCCESS,payload:res.data});
        }else{
           return dispatch({type:API_CALL_FAILURE});
        }
    }
};

export const fetchComment = () => {
    return async dispatch => {
        const res = await axios.get("https://api.myjson.com/bins/mgx4l");
        if(res){
            return dispatch({type:FETCH_COMMENT,payload:res.data});
        }else{
            return dispatch({type:API_CALL_FAILURE});
        }
    }
}