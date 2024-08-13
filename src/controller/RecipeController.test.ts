// @ts-ignore
import RecipeController from "./RecipeController";

// @ts-ignore
import RecipeModel from "../models/RecipeModel";

// @ts-ignore
import SearchView from "../views/SearchView";

// @ts-ignore
import ApiService from "../services/ApiService";

// Mocking des dépendances
// remplace les modules importés par des versions simulées.
jest.mock("../models/RecipeModel");
jest.mock("../services/ApiService");
jest.mock("../views/SearchView");

describe("RecipeController", () => {
    // 1.Data
    // @ts-ignore
    let recipeController: RecipeController;
    // @ts-ignore
    let mockSearchView: SearchView;
    // @ts-ignore
    let mockApiService : ApiService;
    // @ts-ignore
    let mockRecipeModel : RecipeModel;

    // 2. Initialisation
    beforeEach(() => {

        // Création d'instances pour les mocks
        mockRecipeModel = new RecipeModel();
        mockApiService = new ApiService();
        mockSearchView = new SearchView();

        // Création de l'instance du recipeController avec les mocks
        recipeController = new RecipeController(mockRecipeModel, mockApiService, mockSearchView);

        // Setup pour simuler la fonction onSearch
        // Simule l'appel à la methode onSearch de la classe SearchView et return la bonne valeur : "Pizza"
        mockSearchView.onSearch = jest.fn().mockImplementation((callBack) => {
            callBack("pizza");
        });

        // Réinitialise-les mocks avant chaque test
        jest.clearAllMocks()
    })

    // 3. Test
    test("handleSearch is triggered when input in searchView", () => {
        // Simuler une entrée utilisateur déclenchant la recherche
        recipeController.configureSearchListener();
        expect(mockApiService.fetchRecipes).toHaveBeenCalledWith("pizza");
    })
})