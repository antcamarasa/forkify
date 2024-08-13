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
    // 1. Propriété
    private recipes: Recipe[] = []; // Stockage privé des recettes


    // 2. Constructor
    constructor() {
        // Initialisation si nécessaire, peut être étendu plus tard
    }


    // 3. Méthodes
    addRecipe(newRecipe: Recipe[]) {
        this.recipes.push(...newRecipe); // Ajoute les nouvelles recettes à la liste existante
    }

    getAllRecipe(): Recipe[] {
        return [...this.recipes]; // Return une cope du tableau de recette pour éviter la mutation direct.
    }

    getRecipeById(id: string): Recipe | undefined {
        return this.recipes.find((recipe) => recipe.id === id);
    }

    // @ts-ignore
    updateRecipe(recipeToUpdate : Recipe){
       // TODO
    }
}

export default RecipeModel;