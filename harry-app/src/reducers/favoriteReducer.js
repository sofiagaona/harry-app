//import { types } from "../types/types";



export const favoriteReducer=(state=[], action)=>{

    switch(action.type){
        case 'ADD':
               return [ ...state, action.payload ];
          
        default:
         return state
    }

}