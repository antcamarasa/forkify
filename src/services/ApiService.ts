/**
 *
 * ApiService.ts
 * Centralise les appels AJAX à l'API forkify pour une maintenance et une réutilisation faciles.
 *
 *
 */


export default class ApiService {
    // Propriété
    private baseUrl : string;
    private apiKey : string;

    // Constructor
    constructor() {
        this.baseUrl =  "https://forkify-api.herokuapp.com/api/v2/recipes?search=";
        this.apiKey = "a44145b7-53a8-47b0-b650-d5e5737299b1";
    }


    // Méthodes
    async fetchRecipes(searchTerm : string) : Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${searchTerm}&key=${this.apiKey}`);

            if (!response.ok) {
                throw new Error("Network reponse status is not ok!");
            }
            const data = await response.json();
            return data; // return les données sous forme de JSON.
        } catch (error){
            console.log("Error fetching recipes: ", error);
            return null;
        }
    }
}