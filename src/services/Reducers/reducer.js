import {ADD_TO_CATR,REMOVE_TO_CATR} from '../constants'

const initialState={
    cardData:[]
}
export default function cardItem(state=initialState, action){
    switch(action.type){
        case ADD_TO_CATR:
            console.log("reducer", action)
        return{
            ...state,
            cardDate:action.data
        }
        case REMOVE_TO_CATR:
            console.log("reducer", action)
        return{
            ...state,
            cardDate:action.data
        }
        default:
            return state
    }
}