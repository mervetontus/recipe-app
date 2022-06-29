import React, {useContext} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import RecipeDetails from './RecipeDetails';

const RecipeList = () => {
   
  const {recipes} =  useContext(RecipeContext);

  return recipes.length ? (
        <div className="recipe-list">
            <ul>
                {recipes.map(recipe => {
                    return ( <RecipeDetails recipe ={ recipe } key={recipe.id} />);
                })}
            </ul>
        </div>
    ) : (
        <div className ="empty"> No recipes has been entered yet.</div>

    ) 
}

export default RecipeList;


