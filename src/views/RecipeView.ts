/**
 *
 * RecipeView
 * Affiche les recettes et leurs détails.
 *
 */

class RecipeView {
    private recipeDetail : HTMLElement;

    constructor() {
        // @ts-ignore
        this.mainContent  = document.getElementById('main-content');
        // @ts-ignore
        this.recipeDetail = document.getElementById('recipe-detail');
    }

    public displayRecipe(recipe : any) {
        this.recipeDetail.innerHTML = '';

        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-detail');

        const title = document.createElement('p');
        title.textContent = recipe.title;
        title.classList.add('title');
        recipeItem.appendChild(title);


        const img = document.createElement('img');
        img.setAttribute('src', recipe.image_url);
        recipeItem.appendChild(img);

        const p  = document.createElement('p');
        p.textContent = recipe.publisher;
        recipeItem.appendChild(p);


        this.recipeDetail.appendChild(recipeItem);

        console.log(this.recipeDetail);
    }
}

export default RecipeView;