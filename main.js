// const root = document.querySelector('#root');


// const randomCocktailButton = document.createElement('button');
// randomCocktailButton.textContent = 'Cocktail of the day !';

// const cocktailDiv = document.createElement('div');
// // const cocktailH1 = document.createElement('h1');
// // const categoryParagraph = document.createElement('p');
// const ulIngredients = document.createElement('ul');
// // const cocktailImg = document.createElement('img');
// // const descriptionParagraph = document.createElement('p');


// root.appendChild(randomCocktailButton);
// root.appendChild(cocktailDiv);






// /*
// randomCocktailButton.addEventListener('click', () => {
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data);
//             const randomDrink = data.drinks[0];

//             cocktail.setAttribute('id', 'cocktail');

//             h3.textContent = randomDrink.strDrink;
//             img.setAttribute('src', randomDrink.strDrinkThumb)
//             description.textContent = randomDrink.strInstructions;


//         })
//         .catch((error) => {
//             error = 'Erreur lors du Fetch';
//             alert(error)
//         });
// });
// */
// const cleanContainer = (element) => {
//     element.textContent = "";
// }

// const fetchRandomCocktail = async () => {
//     const responseCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
//     return await responseCocktail.json();
// }


// const collectData = async () => {
//     const res = await fetchRandomCocktail();
//     const randomDrink = res.drinks[0];
//     return randomDrink;
// }


// const isIngredient = (ingredient, measure) => {
//     if (ingredient) {
//         const liIngredients = document.createElement('li');
//         liIngredients.textContent = `${ingredient} - ${measure}`;
//         ulIngredients.appendChild(liIngredients);
//         appendChildToElement(cocktailDiv, ulIngredients);
//     }
//     else { }
// }


// const listIngredient = async () => {
//     for (let i = 1; i <= 15; i++) {
//         const drink = await collectData();
//         const actualIngredient = drink[`strIngredient${i}`];
//         const actualIngredientMeasure = drink[`strMeasure${i}`];
//         isIngredient(actualIngredient, actualIngredientMeasure);
//     }
// }

// const addElement = async (element, injectionType, value, parentElement, parameter) => {

//     const newElement = document.createElement(element);

//     if (injectionType == 'setAttribute') {
//         newElement.setAttribute(parameter, value);
//     }
//     if (injectionType == 'textContent') {
//         newElement.textContent = value;
//     }

//     appendChildToElement(parentElement, newElement);

// }


// const showRandomCocktail = async () => {
//     const drink = await collectData();

//     addElement('h1', 'textContent', drink.strDrink, cocktailDiv);
//     addElement('p', 'textContent', drink.strCategory, cocktailDiv);
//     addElement('img', 'setAttribute', drink.strDrinkThumb, cocktailDiv, 'src');
//     addElement('p', 'textContent', drink.strInstructions, cocktailDiv);

//     //addElement('div', 'setAttribute', 'cocktail', 'id')

// }

// const appendChildToElement = (parentElement, element) => {
//     parentElement.appendChild(element);
// }


// randomCocktailButton.addEventListener('click', async () => {
//     cleanContainer(cocktailDiv);

//     showRandomCocktail();
//     await listIngredient();

// })

// // créer un nouveau bouton
// // au clic sur ce bouton, faire un appel fetch vers https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
// // afficher les résultats dans le DOM
// // intégrer la notion de class js
// // créez vos différentes fonctions dans une ou plusieurs classes
// // Si vous avez terminé, tentez de refactoriser votre classe en plusieurs classes
// // en utilisant le principe SRP de SOLID
// // https://www.freecodecamp.org/news/solid-principles-single-responsibility-principle-explained/



// /*
// class Cocktail {
//     fetchRandomdrink() {}

//     clear Container() {}

// }
// */


