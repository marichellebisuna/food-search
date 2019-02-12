import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    
  render() {
      const {recipes} = this.props;
    return (
        <React.Fragment > 
          
          <RecipeSearch />
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
            {
                recipes.map(recipe =>{
                    return(
                        <Recipe 
                            key={recipe.recipe_id}
                            recipe={recipe}/>
                    )
                })
            }
            
            </div>

          
          
        </React.Fragment>
    )
  }
}
