import axios from "axios";
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./actionsType";



export const fetchDataRequest = ()=>{
    return{
        type: FETCH_POST_REQUEST
    }
}

export const fetchDataSuccess = (data)=>{
    return{
        type: FETCH_POST_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error)=>{
    return{
        type: FETCH_POST_FAILURE,
        payload: error
    }
}

export const fetchData = (dispatch)=>{
    return (dispatch) => {
        dispatch(fetchDataRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            dispatch(fetchDataSuccess(response.data))
           // console.log(response.data)
        })

        .catch(error => dispatch(fetchDataFailure(error)))
    }
}



/*
dispatch(fetchDataRequest());

    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchDataSuccess(response.data))
    }catch(error){
        dispatch(fetchDataFailure(error.message))
    }*/