/**
 *
 *  RecipeModel.ts
 *  Gère la logique pour récupérer les données des recettes de l'API et les stocker temporairement.
 */

interface Recipe {
    id: string;
    title: string;
    image_url: string;
    publisher: string;
}

class RecipeModel {
    private recipes: Recipe[] = []; // Stockage privé des recettes


    constructor() {}

    addRecipe(newRecipe: Recipe[]) {
        this.recipes.push(...newRecipe); // Ajoute les nouvelles recettes à la liste existante
    }

    getAllRecipe(): Recipe[] {
        return [...this.recipes]; // Return une cope du tableau de recette pour éviter la mutation direct.
    }

    getRecipeById(id: string): Recipe | undefined {
        return this.recipes.find((recipe) => recipe.id === id);
    }
}

export default RecipeModel;