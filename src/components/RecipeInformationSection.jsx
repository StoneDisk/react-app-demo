import {useState, useEffect} from "react";
import "../assets/styles/RecipeInformationSection.css";

function RecipeInformationSection() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Important! Provide a valid spoonacular api key or any api request will not work.
        const apiKey = "";

        async function getRecipes(recipeName) {
            const url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&number=2`;

            const response = await fetch(url, {
                headers: {
                    "x-api-key": apiKey
                }
            });

            const recipes = await response.json();
            console.log(recipes);
            const {results} = recipes
            setRecipes(results);
        }

        getRecipes("burrito");
    }, []);

    return (
        <section>
            <h2>Here Are Some Recipes</h2>
            <ul className="recipe-list">
                {recipes.map((recipe) => {
                    const {id, title, image} = recipe;
                    return (
                        <li key={id}>
                            <h3>{title}</h3>
                            <img src={image} alt="recipe image" />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default RecipeInformationSection;