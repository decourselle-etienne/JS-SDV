const root = document.querySelector('#root');


const randomCocktailButton = document.createElement('button');
randomCocktailButton.textContent = 'Cocktail of the day !';

const cocktailDiv = document.createElement('div');
const cocktailH1 = document.createElement('h1');
const categoryParagraph = document.createElement('p');
const ulIngredients = document.createElement('ul');
const cocktailImg = document.createElement('img');
const descriptionParagraph = document.createElement('p');


root.appendChild(randomCocktailButton);
root.appendChild(cocktailDiv);

cocktailDiv.appendChild(cocktailH1);
cocktailDiv.appendChild(categoryParagraph);
cocktailDiv.appendChild(ulIngredients);
cocktailDiv.appendChild(cocktailImg);
cocktailDiv.appendChild(descriptionParagraph);


/*
randomCocktailButton.addEventListener('click', () => {
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

randomCocktailButton.addEventListener('click', async () => {
    const response = await fetchRandomCocktail();
    await listIngredient();

    const randomDrink = response.drinks[0];

    cocktailDiv.setAttribute('id', 'cocktail');

    cocktailH1.textContent = randomDrink.strDrink;
    categoryParagraph.textContent = randomDrink.strCategory;

    cocktailImg.setAttribute('src', randomDrink.strDrinkThumb)
    descriptionParagraph.textContent = randomDrink.strInstructions;

})

const listIngredient = async () => {
    ulIngredients.textContent = "";
    for (let i = 1; i <= 15; i++) {
        const res = await fetchRandomCocktail();
        const randomDrink = res.drinks[0];

        const actualIngredient = randomDrink[`strIngredient${i}`];
        const actualIngredientMeasure = randomDrink[`strMeasure${i}`];


        if (actualIngredient) {
            const liIngredients = document.createElement('li');
            liIngredients.textContent = `${actualIngredient} - ${actualIngredientMeasure}`;
            ulIngredients.appendChild(liIngredients);
        }
        else {
            break
        }
    }
}


