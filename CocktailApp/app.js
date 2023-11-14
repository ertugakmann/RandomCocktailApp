const callButton = document.querySelector(".call");
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const container = document.querySelector('.container');

runEventListener();

function runEventListener() {
    callButton.addEventListener("click", call);
}

async function call(e) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const cocktail = result.drinks[0];

        e.preventDefault();

        // Önceki içeriği temizle
        clearContainer();

        // Yeni içeceği ekleyin
        addToUI(cocktail);
    } catch (error) {
        console.error(error);
    }
}

function clearContainer() {
    const mainWrapper = document.querySelector(".main-wrapper");
    mainWrapper.innerHTML = ""; // Tüm içeriği temizle
}

function addToUI(cocktail) {
    const mainWrapper = document.querySelector(".main-wrapper");
    const cocktailDiv = document.createElement("div");
    cocktailDiv.className = "cocktail";
    cocktailDiv.innerHTML = `<span><h3 id="cocktail-name">${cocktail.strDrink}</h3></span>
    <img id="image" src="${cocktail.strDrinkThumb}">`;

    mainWrapper.appendChild(cocktailDiv);
}