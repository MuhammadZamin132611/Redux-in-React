import {ADD_TO_CATR, REMOVE_TO_CATR} from '../constants'

export const addToCart=(data)=>{
    console.warn("action", data)
    return {
        type:ADD_TO_CATR,
        data:data
    } 
}


export const removeToCart=()=>{
    console.warn("action")
    return {
        type: REMOVE_TO_CATR,
    } 
}