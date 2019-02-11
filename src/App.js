import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes:[],
    url:"https://www.food2fork.com/api/search?key=d3187323b2f39c6c707dd4b6f2ee98be"
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

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
