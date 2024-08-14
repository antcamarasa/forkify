/**
 * SearchView.ts
 * Gère les éléments de l'interface utilisateur relatifs à la barre de recherche.
 */
import RecipeController from "../controller/RecipeController"


class SearchView {
    private recipeListElement: HTMLElement;
    private recipeController : RecipeController | undefined;

    constructor(recipeController?: RecipeController) {
        // @ts-ignore
        this.recipeListElement = document.getElementById('recipe-list');
        this.recipeController = recipeController;
    }

    public displayRecipes(recipes: any[]): void {
        this.recipeListElement.innerHTML = ''; // Effacer la liste existante

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-item');
            recipeCard.setAttribute('data-id', recipe.id);

            const title = document.createElement('p');
            title.textContent = recipe.title;
            recipeCard.appendChild(title);

            const publisher = document.createElement('p');
            publisher.textContent = recipe.publisher;
            recipeCard.appendChild(publisher);

            const img = document.createElement('img');
            img.setAttribute('src', recipe.image_url);
            recipeCard.appendChild(img);

            // Ajouter un écouteur d'événements à chaque carte
            recipeCard.addEventListener('click', () => {
                // @ts-ignore
                this.recipeController.handleRecipeClick(recipeCard.getAttribute('data-id'));
                console.log(recipeCard.getAttribute('data-id'));
            });

            this.recipeListElement.appendChild(recipeCard);
        });
    }

    // Méthodes
    public onSearch(callback : (value : string) => void): void {
        // @ts-ignore
        const btn : HTMLElement | null = document.getElementById("button-search-input");

        // @ts-ignore
        const input : any = document.getElementById("search-input");

        if(btn && input) {
            btn!.addEventListener("click", () => {
                callback(input.value)
            })
        }
    }


    // Ajouter à SearchView.ts
    public setController(controller: RecipeController): void {
        this.recipeController = controller;
    }
}

export default SearchView;