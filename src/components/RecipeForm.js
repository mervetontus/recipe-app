import React, {useContext, useState} from 'react';
import { RecipeContext } from '../contexts/RecipeContext';


const NewRecipeForm = () => {
   
    const {dispatch} = useContext(RecipeContext);   

    const[type, setType]= useState('Breakfast','Lunch or Dinner', 'Dessert', 'Snacks');
    const [foodname, setFoodName] = useState('');
    const [foodrecipe, setFoodRecipe] = useState('');    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch({type: 'ADD_RECIPE',
        recipe:{type, foodname, foodrecipe}
      });
        setType('');
        setFoodName('');
        setFoodRecipe('');  
    }
    
    return(
    <form onSubmit={handleSubmit} >
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="Breakfast" >Breakfast</option>
        <option value="Lunch or Dinner" >Lunch or Dinner</option>
        <option value="Dessert" >Dessert</option>
        <option value="Snacks" >Snacks</option>   
      </select>
             
       <input type="text"  placeholder="Food name" value={foodname}
        onChange={(e) => setFoodName(e.target.value)} required />

       <input type="text"  placeholder="Food recipe" value={foodrecipe}
        onChange={(e) => setFoodRecipe(e.target.value)} required />   

      <input type="submit"  value="Add Recipe" />
      
    </form>
     
    );    

    
}

export default NewRecipeForm;

