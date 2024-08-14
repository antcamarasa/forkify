/**
 *
 * RecipeController.ts
 * Coordonne les interactions entre les modèles et les vues, gérant les événements utilisateur et la mise à jour de l'affichage.
 *
 */
// @ts-ignore
import { RecipeModel } from '../models/RecipeModel';
// @ts-ignore
import { SearchView } from '../views/SearchView';

// @ts-ignore
import RecipeView  from '../views/RecipeView';

// &ts-ignore
import ApiService from '../services/ApiService'; // Import par défaut

// @ts-ignore
class RecipeController {

    // @ts-ignore
    private recipeModel: RecipeModel;

    //@ts-ignore
    private recipeView: RecipeView

    // @ts-ignore
    private searchView: SearchView;

    // @ts-ignore
    private apiService: ApiService;


    // @ts-ignore
    constructor(recipeModel: RecipeModel, searchView: SearchView, apiService: ApiService, recipeView: RecipeView) {
        this.recipeModel = recipeModel;
        this.searchView = searchView;
        this.apiService = apiService;
        this.recipeView = recipeView;

        // initialise l'écouteur d'évènement pour la recherche
        this.configureSearchListener();
    }

    public configureSearchListener() {
        this.searchView.onSearch((searchTerm: string) => {
            this.handleSearch(searchTerm)
        })
    }


    // @ts-ignore
    handleSearch(searchTerm: string): void {
        try {
            this.apiService.fetchRecipes(searchTerm)
                .then((recipesData: any) => {
                    this.updateModel(recipesData);
                })
        } catch (error) {
            console.error("Error fetching recipes: ", error);
        }
    }

    // @ts-ignore
    updateModel(recipeData: any) {
        console.log(recipeData)
        // @ts-ignore
        const recipes = recipeData.data.recipes.map((data: any) => ({
            id: data.id,
            title: data.title,
            image_url: data.image_url,
            publisher: data.publisher,
        }))

        this.recipeModel.addRecipe(recipes)
        this.updateView();
    }

    //@ts-ignore
    updateView(): void {
        const recipes = this.recipeModel.getAllRecipe();
        this.searchView.displayRecipes(recipes);
    }


    handleRecipeClick(id: string) {
        const recipe = this.recipeModel.getRecipeById(id);
        console.log(recipe)
        this.recipeView.displayRecipe(recipe);
    }
}
export default RecipeController;