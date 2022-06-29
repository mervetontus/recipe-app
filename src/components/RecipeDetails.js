import React, {useContext} from 'react'
import { RecipeContext } from '../contexts/RecipeContext';

const RecipeDetails = ({recipe}) => {
    const {dispatch} = useContext(RecipeContext);

     return(
         <li onClick={ () => dispatch({type: 'REMOVE_RECIPE', id: recipe.id})} >
             <div className="type">{recipe.type}</div>
             <div className="foodname">{recipe.foodname}</div>
             <div className="foodrecipe">{recipe.foodrecipe}</div>
         </li>
     );
}

export default RecipeDetails;