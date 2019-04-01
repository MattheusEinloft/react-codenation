import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar handleInput={this.handleInputChange} />
        <div className="container mt-10">
          <div className="row">
          {this.state.searchString === '' ?
            recipes.results.map((recipe, index) => {
              return <RecipeItem key={index} title={recipe.title} ingredients={recipe.ingredients} image={recipe.thumbnail} />
            }) :
            recipes.results.filter((recipe) => {
              return new RegExp(this.state.searchString, "i").test(recipe.title) || new RegExp(this.state.searchString, "i").test(recipe.ingredients)
            }).map((recipe, index) => {
                return <RecipeItem key={index} title={recipe.title} ingredients={recipe.ingredients} image={recipe.thumbnail} />
              })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
