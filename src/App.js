import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {    
    recipes: recipes,
    url:"https://www.food2fork.com/api/search?key=d3187323b2f39c6c707dd4b6f2ee98be",
    details_id:35301,
    pageIndex:1
  };
    async getRecipes(){
     try{
        const data = await fetch(this.state.url);
        const jsonData = await data.json();
        this.setState({
          recipes:jsonData.recipes
        });
      }
      catch(error){
        console.log(error);
      }
    };

    componentDidMount(){
      this.getRecipes()
    };

    displayPage = index =>{
      switch (index) {
        default:
        case 1:
        return <RecipeList recipes={this.state.recipes} />;
        case 0:
        return <RecipeDetails id={this.state.details_id} />;
      }
    }

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
