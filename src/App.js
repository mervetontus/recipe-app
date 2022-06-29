import React from 'react';
import RecipeContextProvider from './contexts/RecipeContext';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import NewRecipeForm from './components/RecipeForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FilteredType from './components/Filtered';
import FilteredL from './components/FilteredL';

function App() {
return (
  
    <Router>

        <div className="App">
       
            <RecipeContextProvider>
            
              <Navbar /> 
              <Switch> 
                      
                <Route path="/" exact component={NewRecipeForm }/> 
                   
                <Route path="/allrecipes" component={RecipeList}/> 
            
                <Route path="/breakfast" component={FilteredType}/>

                <Route path="/lunchordinner" component={FilteredL}/>

             </Switch> 

            </RecipeContextProvider>
                       
        </div>

    </Router>

  );
}

export default App;
