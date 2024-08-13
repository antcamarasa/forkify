/**
 *
 * RecipeView
 * Affiche les recettes et leurs détails.
 *
 */

// TODO A REFAIRE
export default class RecipeView {
    private recipeListElement: HTMLElement;

    constructor() {
        // @ts-ignore
        this.recipeListElement = document.getElementById('recipe-list');
    }

    public displayRecipes(recipes: any[]): void {
        this.recipeListElement.innerHTML = ''; // Effacer la liste existante

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe');

            const title = document.createElement('p');
            title.textContent = recipe.title;
            recipeCard.appendChild(title);

            const publisher = document.createElement('p');
            publisher.textContent = recipe.publisher;
            recipeCard.appendChild(publisher);

            const img = document.createElement('img');
            img.setAttribute('src', recipe.image_url);
            recipeCard.appendChild(img);

            this.recipeListElement.appendChild(recipeCard);
        });
    }
}