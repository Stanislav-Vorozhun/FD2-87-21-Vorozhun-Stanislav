class HashStorage {
    constructor() {
        this.storage = {};
    }

    add(key, value) {
        this.storage[key] = value;
        console.log('Коктейль успешно добавлен!');
    }

    deleteValue(key) {
        if (!(key in this.storage)) {
            console.log("Такого коктейля нет или название введено неверно.")
            return false
        }
        console.log('Коктейль удален!');
        return delete this.storage[key];

    }

    getValue(key) {
        return this.storage[key];
    }

    getKeys() {
        return Object.keys(this.storage);
    }
}

const coctailsDatabase = new HashStorage();


const addButton = document.getElementById('add-coctail');
addButton.onclick = function() {

    const coctailName = window.prompt('Введите название коктеля');
    const alcohol = window.prompt('Напиток алкогольный?');
    const recipe = window.prompt('Напишите рецепт');

    coctailsDatabase.add(coctailName, { coctailName, alcohol, recipe });

}

const delButton = document.getElementById('dell-coctail');
delButton.onclick = function() {
    const coctailName = window.prompt('Введите название: ');
    coctailsDatabase.deleteValue(coctailName);



}

const listButton = document.getElementById('list-coctail');
listButton.onclick = function() {
    console.log(coctailsDatabase.getKeys());
}

const recipeButton = document.getElementById('recipe');
recipeButton.onclick = function() {
    const coctailRecipe = window.prompt('Рецепт какого напитка вас интересует? ');
    console.log(coctailsDatabase.getValue(coctailRecipe));
}