import './style.css';

// @ts-ignore
import RecipeController from "./controller/RecipeController.ts";

// @ts-ignore
import RecipeModel from "./models/RecipeModel.ts";

// @ts-ignore
import SearchView from './views/SearchView';

// @ts-ignore
import ApiService from './services/ApiService';

import RecipeView from "./views/RecipeView.ts";


// Initialisation des composants :
const recipeModel = new RecipeModel();
const searchView = new SearchView();
const apiService = new ApiService();
const recipeView = new RecipeView();


// Créer le controller avec les composants.
// @ts-ignore
const recipeController = new RecipeController(recipeModel, searchView, apiService, recipeView);

searchView.setController(recipeController);