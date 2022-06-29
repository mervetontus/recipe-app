import { v4 as uuidv4 } from 'uuid';

export const RecipeReducer = (state, action) => {

    switch(action.type){

     case 'ADD_RECIPE': 
     return [...state, {
         type: action.recipe.type,
         foodname: action.recipe.foodname,
         foodrecipe: action.recipe.foodrecipe,
         id: uuidv4()
     }]
    
     case 'REMOVE_RECIPE':
         return state.filter( recipe => recipe.id !== action.id)
    default:
        return state

    }
    
}
