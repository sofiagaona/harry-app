
 
export const favoriteReducer=(state=[], action)=>{
       console.log(state);


    switch(action.type){
        case 'ADD':
             
               return [ ...state, action.payload ];

        case 'DELETE':
               return state.filter((character)=>character.name!==action.payload.name);
          
        default:
         return state
    }

    
     
       
 

}