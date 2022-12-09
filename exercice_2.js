const root = document.querySelector('#root');


const allCocktailButton = document.createElement('button');
const cocktailDiv = document.createElement('div');
allCocktailButton.textContent = 'Show all cocktails';

root.appendChild(allCocktailButton);
root.appendChild(cocktailDiv);


allCocktailButton.addEventListener('click', async () => {

    let clean = new cleanCocktails;
    let ingredients = new returnIngredients;
    let el = new returnElement;
    let fetchUrl = new returnFetch;

    clean.cleanContainer(cocktailDiv);

    const allDrinks = await fetchUrl.collectData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');

    cocktailDiv.setAttribute('id', 'cocktail');
    console.log(allDrinks, 'allDrinks');


    for (let i = 0; i < 25; i++) {
        ingredients.listIngredient(allDrinks[i]);

        el.addElement('h1', 'textContent', allDrinks[i].strDrink, cocktailDiv);
        el.addElement('p', 'textContent', allDrinks[i].strCategory, cocktailDiv);
        el.addElement('img', 'setAttribute', allDrinks[i].strDrinkThumb, cocktailDiv, 'src');
        el.addElement('p', 'textContent', allDrinks[i].strInstructions, cocktailDiv);
    }
})

class returnElement {

    appendChildToElement = (parentElement, element) => {
        parentElement.appendChild(element);
    }

    addElement(element, injectionType, value, parentElement, parameter) {
        const newElement = document.createElement(element);

        if (injectionType == 'setAttribute') {
            newElement.setAttribute(parameter, value);
        }
        if (injectionType == 'textContent') {
            newElement.textContent = value;
        }

        this.appendChildToElement(parentElement, newElement);

    }
}


class returnFetch {
    async fetchAllCocktail(link) {
        console.log(link);
        const results = await fetch(link);
        return await results.json();
    }

    async collectData(link) {
        const responseCocktails = await this.fetchAllCocktail(link);
        const allDrinks = responseCocktails.drinks;
        return allDrinks;
    }
}

class returnIngredients {
    async listIngredient(allDrinks) {
        const ulIngredients = document.createElement('ul');
        for (let i = 1; i <= 15; i++) {
            const actualIngredient = allDrinks[`strIngredient${i}`];
            const actualIngredientMeasure = allDrinks[`strMeasure${i}`];
            this.isIngredient(actualIngredient, actualIngredientMeasure, ulIngredients);
        }
    }

    isIngredient = (ingredient, measure, ul) => {
        if (ingredient) {
            const liIngredients = document.createElement('li');
            liIngredients.textContent = `${ingredient} - ${measure}`;
            ul.appendChild(liIngredients);
            cocktailDiv.appendChild(ul);
        }
        else { }
    }
}

class cleanCocktails {
    cleanContainer(element) {
        element.textContent = "";
    }
}