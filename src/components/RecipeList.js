import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    
  render() {
      const {error, recipes, handleDetails, handleChange, value, handleSubmit} = this.props;
    return (
        <React.Fragment > 
          
          <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className="container my-5">
        {/* title */}
            <div className="row">
                <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
                    <div className="text-slanted">
                       <h1>Recipe List</h1> 
                    </div>
                </div>
            </div>
        </div>
        {/* recipe list */}
            <div className="row">
            {error?<h1 className="text-danger text-center mx-5">{error}</h1>:recipes.map(recipe=>{
                return(
                    <Recipe key={recipe.recipe_id} recipe={recipe} /*handleDetails={()=>handleDetails(0, recipe.recipe_id)} */ handleDetails={handleDetails} 
                    />
                );
            }) }
                       
            </div>
        </React.Fragment>
    );
  }
}
