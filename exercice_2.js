const root = document.querySelector('#root');


const allCocktailButton = document.createElement('button');
const cocktailDiv = document.createElement('div');
allCocktailButton.textContent = 'Show all cocktails';

root.appendChild(allCocktailButton);


allCocktailButton.addEventListener('click', async () => {

    let cocktailCleaner = new CocktailCleaner;
    let cocktailFetcher = new CocktailFetcher;
    let cocktailShow = new CocktailShow;

    cocktailCleaner.cleanContainer(cocktailDiv);

    const allDrinks = await cocktailFetcher.collectData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');

    cocktailShow.showCocktails(allDrinks);

})


class CocktailShow {
    async showCocktails(allDrinks) {
        for (let i = 0; i < 25; i++) {

            let ingredientsLister = new IngredientsLister;
            let elementCreator = new ElementCreator

            const cocktailDiv = document.createElement('div');
            cocktailDiv.setAttribute('class', 'cocktail');
            elementCreator.addElement('h1', 'textContent', allDrinks[i].strDrink, cocktailDiv);

            ingredientsLister.listIngredient(allDrinks[i], cocktailDiv);

            elementCreator.addElement('p', 'textContent', allDrinks[i].strCategory, cocktailDiv);
            elementCreator.addElement('img', 'setAttribute', allDrinks[i].strDrinkThumb, cocktailDiv, 'src');
            elementCreator.addElement('p', 'textContent', allDrinks[i].strInstructions, cocktailDiv);

            root.appendChild(cocktailDiv);
        }
    }
}

class ElementCreator {

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


class CocktailFetcher {
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

class IngredientsLister {
    async listIngredient(allDrinks, cocktailDiv) {
        const ulIngredients = document.createElement('ul');
        for (let i = 1; i <= 15; i++) {
            const actualIngredient = allDrinks[`strIngredient${i}`];
            const actualIngredientMeasure = allDrinks[`strMeasure${i}`];
            this.isIngredient(actualIngredient, actualIngredientMeasure, ulIngredients, cocktailDiv);
        }
    }

    isIngredient(ingredient, measure, ul, cocktailDiv) {
        if (ingredient) {
            const liIngredients = document.createElement('li');
            liIngredients.textContent = `${ingredient} - ${measure}`;
            ul.appendChild(liIngredients);
            cocktailDiv.appendChild(ul);
        }
    }
}

class CocktailCleaner {
    cleanContainer(element) {
        element.textContent = "";
    }
}