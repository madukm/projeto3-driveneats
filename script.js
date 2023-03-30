let dish, drink, dessert;

function selectFirstDish() {
    document.getElementById("first-dish").style.borderColor = "#32B72F";
    document.getElementById("second-dish").style.borderColor = "white";
    document.getElementById("third-dish").style.borderColor = "white";
    dish = "first";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectSecondDish() {
    document.getElementById("first-dish").style.borderColor = "white";
    document.getElementById("second-dish").style.borderColor = "#32B72F";
    document.getElementById("third-dish").style.borderColor = "white";
    dish = "second";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectThirdDish() {
    document.getElementById("first-dish").style.borderColor = "white";
    document.getElementById("second-dish").style.borderColor = "white";
    document.getElementById("third-dish").style.borderColor = "#32B72F";
    dish = "third";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectFirstDrink() {
    document.getElementById("first-drink").style.borderColor = "#32B72F";
    document.getElementById("second-drink").style.borderColor = "white";
    document.getElementById("third-drink").style.borderColor = "white";
    drink = "first";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectSecondDrink() {
    document.getElementById("first-drink").style.borderColor = "white";
    document.getElementById("second-drink").style.borderColor = "#32B72F";
    document.getElementById("third-drink").style.borderColor = "white";
    drink = "second";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectThirdDrink() {
    document.getElementById("first-drink").style.borderColor = "white";
    document.getElementById("second-drink").style.borderColor = "white";
    document.getElementById("third-drink").style.borderColor = "#32B72F";
    drink = "third";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectFirstDessert() {
    document.getElementById("first-dessert").style.borderColor = "#32B72F";
    document.getElementById("second-dessert").style.borderColor = "white";
    document.getElementById("third-dessert").style.borderColor = "white";
    dessert = "first";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectSecondDessert() {
    document.getElementById("first-dessert").style.borderColor = "white";
    document.getElementById("second-dessert").style.borderColor = "#32B72F";
    document.getElementById("third-dessert").style.borderColor = "white";
    dessert = "second";
    if(dish != null && drink != null && dessert != null) {
        enableButton();
    }
}

function selectThirdDessert() {
    document.getElementById("first-dessert").style.borderColor = "white";
    document.getElementById("second-dessert").style.borderColor = "white";
    document.getElementById("third-dessert").style.borderColor = "#32B72F";
    dessert = "third";
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
    // mandar para whatsapp
}
