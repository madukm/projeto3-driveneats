let dish, drink, dessert;

var dishPrice = 0;
var drinkPrice = 0;
var dessertPrice = 0;

function selectFirstDish() {
    document.getElementById("first-dish").style.borderColor = "#32B72F";
    document.getElementById("second-dish").style.borderColor = "white";
    document.getElementById("third-dish").style.borderColor = "white";
    dish = "first";
    dishPrice = 14.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectSecondDish() {
    document.getElementById("first-dish").style.borderColor = "white";
    document.getElementById("second-dish").style.borderColor = "#32B72F";
    document.getElementById("third-dish").style.borderColor = "white";
    dish = "second";
    dishPrice = 18.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectThirdDish() {
    document.getElementById("first-dish").style.borderColor = "white";
    document.getElementById("second-dish").style.borderColor = "white";
    document.getElementById("third-dish").style.borderColor = "#32B72F";
    dish = "third";
    dishPrice = 16.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectFirstDrink() {
    document.getElementById("first-drink").style.borderColor = "#32B72F";
    document.getElementById("second-drink").style.borderColor = "white";
    document.getElementById("third-drink").style.borderColor = "white";
    drink = "first";
    drinkPrice = 4.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectSecondDrink() {
    document.getElementById("first-drink").style.borderColor = "white";
    document.getElementById("second-drink").style.borderColor = "#32B72F";
    document.getElementById("third-drink").style.borderColor = "white";
    drink = "second";
    drinkPrice = 3.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectThirdDrink() {
    document.getElementById("first-drink").style.borderColor = "white";
    document.getElementById("second-drink").style.borderColor = "white";
    document.getElementById("third-drink").style.borderColor = "#32B72F";
    drink = "third";
    drinkPrice = 3.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectFirstDessert() {
    document.getElementById("first-dessert").style.borderColor = "#32B72F";
    document.getElementById("second-dessert").style.borderColor = "white";
    document.getElementById("third-dessert").style.borderColor = "white";
    dessert = "first";
    dessertPrice = 7.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectSecondDessert() {
    document.getElementById("first-dessert").style.borderColor = "white";
    document.getElementById("second-dessert").style.borderColor = "#32B72F";
    document.getElementById("third-dessert").style.borderColor = "white";
    dessert = "second";
    dessertPrice = 8.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectThirdDessert() {
    document.getElementById("first-dessert").style.borderColor = "white";
    document.getElementById("second-dessert").style.borderColor = "white";
    document.getElementById("third-dessert").style.borderColor = "#32B72F";
    dessert = "third";
    dessertPrice = 9.90;
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}


function enableButton() {
    const btn = document.getElementById("placeOrder");
    btn.textContent = "Fechar pedido";
    btn.style.backgroundColor = "green";
    btn.style.fontWeight = 700; 
    btn.disabled = false;
}

function sendOrder() {
    let total = dishPrice + drinkPrice + dessertPrice;
    let message = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada- Sobremesa: Pudim\nTotal: R$ " + total.toFixed(2));
    let link = "https://wa.me/5599999999999?text=" + message;
    window.open(link, "_self");
    // mandar para whatsapp
}
