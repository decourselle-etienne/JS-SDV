const root = document.querySelector('#root');

/* commentaire sur
plusieurs lignes */

// commantaire sur une ligne

// Ctrl + / pour commenter toutes les lignes sélectionnées

const button = document.createElement('button');
button.textContent = 'Cocktail of the day !';

const cocktailDiv = document.createElement('div');
const h3 = document.createElement('h3');
const categoryParagraph = document.createElement('p');
const ulIngredients = document.createElement('ul');
const img = document.createElement('img');
const description = document.createElement('p');


root.appendChild(button);
root.appendChild(cocktail);

cocktailDiv.appendChild(h3);
cocktailDiv.appendChild(categoryParagraph);
cocktailDiv.appendChild(ulIngredients);
cocktailDiv.appendChild(img);
cocktailDiv.appendChild(description);


/*
button.addEventListener('click', () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            const randomDrink = data.drinks[0];

            cocktail.setAttribute('id', 'cocktail');

            h3.textContent = randomDrink.strDrink;
            img.setAttribute('src', randomDrink.strDrinkThumb)
            description.textContent = randomDrink.strInstructions;


        })
        .catch((error) => {
            error = 'Erreur lors du Fetch';
            alert(error)
        });
});
*/

const fetchRandomCocktail = async () => {
    const responseCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await responseCocktail.json();
}

button.addEventListener('click', async () => {
    const response = await fetchRandomCocktail();
    await listIngredient();

    const randomDrink = response.drinks[0];

    cocktailDiv.setAttribute('id', 'cocktail');

    h3.textContent = randomDrink.strDrink;
    categoryParagraph.textContent = randomDrink.strCategory;

    img.setAttribute('src', randomDrink.strDrinkThumb)
    description.textContent = randomDrink.strInstructions;

})

const listIngredient = async () => {
    for (let i = 1; i <= 15; i++) {
        const res = await fetchRandomCocktail();
        const randomDrink = res.drinks[0];

        const actualIngredient = randomDrink[`strIngredient${i}`];
        const actualIngredientMeasure = randomDrink[`strMeasure${i}`];


        if (actualIngredient) {
            const ingredients = document.createElement('li');
            ingredients.textContent = `${actualIngredient} - ${actualIngredientMeasure}`;
            ulIngredients.appendChild(ingredients);
        }
        else {
            break
        }
    }
}


