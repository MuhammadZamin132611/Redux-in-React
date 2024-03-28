import {ADD_TO_CATR} from '../constants'

export const addToCart=(data)=>{
    console.warn("action", data)
    return {
        type:ADD_TO_CATR,
        data:data
    } 
}


// export const removeToCart=(data)=>{
//     return {
//         type:'REMOVE_TO_CAtR',
//         data:data
//     } 
// }