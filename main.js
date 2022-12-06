const root = document.querySelector('#root');

/* commentaire sur
plusieurs lignes */

// commantaire sur une ligne

// Ctrl + / pour commenter toutes les lignes sélectionnées

const button = document.createElement('button');
button.textContent = 'Cocktail of the day !';

const cocktail = document.createElement('div');
const h3 = document.createElement('h3');
const category = document.createElement('p');
const ingredients = document.createElement('p');
const img = document.createElement('img');
const description = document.createElement('p');
const br = document.createElement('br');


root.appendChild(button);
root.appendChild(cocktail);

cocktail.appendChild(h3);
cocktail.appendChild(category);
cocktail.appendChild(ingredients);
cocktail.appendChild(img);
cocktail.appendChild(description);


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

    cocktail.setAttribute('id', 'cocktail');

    h3.textContent = randomDrink.strDrink;
    category.textContent = randomDrink.strCategory;

    img.setAttribute('src', randomDrink.strDrinkThumb)
    description.textContent = randomDrink.strInstructions;

})

const listIngredient = async () => {
    for (let i = 0; i < 15; i++) {
        const res = await fetchRandomCocktail();
        const randomDrink = res.drinks[0];
        const value = i + 1;


        const actualIngredient = 'strIngredient' + value;
        const actualIngredientQMeasure = 'strMeasure' + value;
        console.log(actualIngredient);
        console.log(randomDrink[actualIngredient]);


        if (randomDrink[actualIngredient] != null) {
            ingredients.textContent += randomDrink[actualIngredient] + " " + randomDrink[actualIngredientQMeasure] + "\n";
            console.log(i + " " + ingredients.textContent);
        }
        else {
            break
        }

    }
}


