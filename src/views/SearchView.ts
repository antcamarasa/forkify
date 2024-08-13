/**
 * SearchView.ts
 * Gère les éléments de l'interface utilisateur relatifs à la barre de recherche.
 */

class SearchView {
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
}

export default SearchView;