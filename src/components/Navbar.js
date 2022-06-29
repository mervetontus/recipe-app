import React, {useContext} from 'react';
import  {RecipeContext}  from '../contexts/RecipeContext';
import {Link} from 'react-router-dom';


const Navbar = () => {
  const {recipes} = useContext(RecipeContext);

    return(
     
        <div className="navbar" >
           
        <h1>Best Recipes</h1>
        <p>Currently {recipes.length} recipes in page...</p>
        
        <Link type="button" to="/" className="button-style" name="Home" > Home</Link>
        <Link type="button" to="/allrecipes"   className="button-style" > All recipes </Link>
        <Link type="button" to="/breakfast"  name="Breakfast" className="button-style"> Breakfast </Link>
        <Link type="button" to="/lunchordinner" name="Lunch or Dinner "className="button-style" > Lunch or Dinner</Link>
        <Link type="button" to="/dessert" name="Dessert" className="button-style"> Dessert</Link>
        <Link type="button" to="/snacks" name="Snacks " className="button-style">Snacks</Link>
        
        </div>   
    );
}

export default Navbar;