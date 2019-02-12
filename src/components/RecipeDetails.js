import React, { Component } from 'react';
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
//     constructor(props){
//           super(props);
    
//           this.state={
//             recipe:recipe,
//             url:`https://www.food2fork.com/api/get?key=d3187323b2f39c6c707dd4b6f2ee98be&rId=${this.props.id}`
//           };
//       }
    
//  async componentDidMount(){
    
//    try{
//            const data = await fetch(this.state.url);
//            const jsonData = await data.json();
//            this.setState({     /*no state, props coz we are fetching data only */
//               recipe:jsonData.recipe        
//             });
//       } catch(error){
//             console.log(error);
//       }
//  }
  
/*BELOW IS AN ALTERATIVE WAY TO FETCH API FOR  RECIPE DETAILS */
state={
  recipe:recipe
}
async  componentDidMount(){
  //console.log(this.props.id);
  const id = this.props.id;
  const url = `https://www.food2fork.com/api/get?key=d3187323b2f39c6c707dd4b6f2ee98be&rId=${id}`;
  try{
    const data = await fetch(url);
    const jsonData = await data.json();
    this.setState((state,props) => { /*we use this state, props if we update the data */
      return {recipe:jsonData.recipe }            
    }, ()=>{}/*this is a call back function */);
    } catch(error){
        console.log(error);
      }
}
  render() {
      console.log(this.state.recipe);
      const{
        image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe;
      const{handleIndex} = this.props;
        
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <button className="btn btn-warning mb-5 text-capitalize" type="button" onClick={()=>handleIndex(1)}> back to recipe list</button>
            <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            {/*Details*/}
            <div className="col-10 col-md-6 mx-auto  my-3">
             <h6 className="text-uppercase">{title}</h6>
             <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
             <a href={publisher_url} className="btn btn-primary mt-2 mx-3text-capitalize" target="_blank" rel="noopener noreferrer">Publisher Webpage</a>
             <a href={source_url} className="btn btn-success mx-3 mt-2 text-capitalize" target="_blank" rel="noopener noreferrer">Recipe Link</a>
             <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {
                ingredients.map((item,index)=>{
                  return(
                    <li key={index} className="list-group-item text-slanted"> {item}
                    </li>
                  )
                })
              }

             </ul>
            </div>            
          </div>
        </div>
         
      </React.Fragment>        
    );
  }
}
