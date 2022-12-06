const root = document.querySelector('#root');


const randomCocktailButton = document.createElement('button');
randomCocktailButton.textContent = 'Cocktail of the day !';

// const cocktailDiv = document.createElement('div');
// const cocktailH1 = document.createElement('h1');
// const categoryParagraph = document.createElement('p');
const ulIngredients = document.createElement('ul');
// const cocktailImg = document.createElement('img');
// const descriptionParagraph = document.createElement('p');


root.appendChild(randomCocktailButton);





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
const cleanContainer = (element) => {
    element.textContent = "";
}

const fetchRandomCocktail = async () => {
    const responseCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await responseCocktail.json();
}


const collectData = async () => {
    const res = await fetchRandomCocktail();
    const randomDrink = res.drinks[0];
    return randomDrink;
}


const isIngredient = (ingredient, measure) => {
    if (ingredient) {
        const liIngredients = document.createElement('li');
        liIngredients.textContent = `${ingredient} - ${measure}`;
        ulIngredients.appendChild(liIngredients);
    }
    else { }
}


const listIngredient = async () => {
    for (let i = 1; i <= 15; i++) {
        const drink = await collectData();
        const actualIngredient = drink[`strIngredient${i}`];
        const actualIngredientMeasure = drink[`strMeasure${i}`];
        isIngredient(actualIngredient, actualIngredientMeasure);
    }
}

const addElement = async (element, injectionType, value, parameter) => {

    const newElement = document.createElement(element);

    if (injectionType == 'setAttribute') {
        newElement.setAttribute(parameter, value);
    }
    if (injectionType == 'textContent') {
        newElement.textContent = value;
    }
}


const showElement = async () => {
    const drink = await collectData();

    const cocktailH1 = await addElement('h1', 'textContent', drink.strDrink);
    const categoryParagraph = await addElement('p', 'textContent', drink.strCategory);
    const cocktailImg = await addElement('img', 'setAttribute', drink.strDrinkThumb, 'src');
    const descriptionParagraph = await addElement('p', 'textContent', drink.strInstructions);
}


randomCocktailButton.addEventListener('click', async () => {
    cleanContainer(ulIngredients);
    const cocktailDiv = await addElement('div', 'setAttribute', 'cocktail', 'id')
    await listIngredient();
    showElement();

    appendChildToElement(cocktailDiv, cocktailH1);
    appendChildToElement(cocktailDiv, categoryParagraph);
    appendChildToElement(cocktailDiv, ulIngredients);
    appendChildToElement(cocktailDiv, cocktailImg);
    appendChildToElement(cocktailDiv, descriptionParagraph);

    root.appendChild(div);

})

const appendChildToElement = (cocktailDiv, element) => {
    cocktailDiv.appendChild(element);
}


// const cocktailDiv = document.createElement('div');
// const cocktailH1 = document.createElement('h1');
// const categoryParagraph = document.createElement('p');
// const ulIngredients = document.createElement('ul');
// const cocktailImg = document.createElement('img');
// const descriptionParagraph = document.createElement('p');
