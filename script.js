let Dish, Drink, Dessert;
let dishPrice, drinkPrice, dessertPrice;

function checkSelected(){
    if (Dish != null && Drink != null && Dessert != null){
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

function convertPriceToFloat(str) {
    let price = str.match(/[.\d]+/g).toString();
    price = +(price.replace(/,/,'.'));
    return price;
}

function selectDish(dish) {
    const alreadySelected = document.querySelector('.dish .selected');
    if(alreadySelected !== null) {
        alreadySelected.classList.remove('selected');
    }
    dish.classList.add('selected');
    Dish = document.querySelector('.dish .selected h5' )
    dishPrice = convertPriceToFloat(document.querySelector('.dish .selected h6').innerHTML);
    
    checkSelected();

}

function selectDrink(drink) {
    const alreadySelected = document.querySelector('.drink .selected');
    if(alreadySelected !== null) {
        alreadySelected.classList.remove('selected');
    }
    drink.classList.add('selected');
    Drink = document.querySelector('.drink .selected h5' );
    drinkPrice = convertPriceToFloat(document.querySelector('.drink .selected h6').innerHTML);
    
    checkSelected();
}

function selectDessert(dessert){
    const alreadySelected = document.querySelector('.dessert .selected');
    if(alreadySelected !== null) {
        alreadySelected.classList.remove('selected');
    }
    dessert.classList.add('selected');
    Dessert = document.querySelector('.dessert .selected h5' );
    dessertPrice = convertPriceToFloat(document.querySelector('.dessert .selected h6').innerHTML);
    checkSelected();
}

function sendOrder() {
    let total = dishPrice + drinkPrice + dessertPrice;
    let message = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada- Sobremesa: Pudim\nTotal: R$ " + total.toFixed(2));
    let link = "https://wa.me/5599999999999?text=" + message;
    window.open(link, "_self");
}