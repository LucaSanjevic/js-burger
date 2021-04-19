var priceFormaggio = false;
var priceUova = false;
var priceMostarda = false;
var pricePomodoro = false;
var priceLattuga = false;
var priceKetchup = false;


document.getElementById("btnFormaggio").addEventListener("click", function(priceFormaggio) {
    return true
})

document.getElementById("btnUova").addEventListener("click", function(priceUova) {
    return true
})

document.getElementById("btnMostarda").addEventListener("click", function(priceMostarda) {
    return true
})

document.getElementById("btnPomodoro").addEventListener("click", function(pricePomodoro) {
    return true
})

document.getElementById("btnLattuga").addEventListener("click", function(priceLattuga) {
    return true
})

document.getElementById("btnKetchup").addEventListener("click", function(priceKetchup) {
    return true
})

document.getElementById("btnPrice").addEventListener("click", function() {
    var price = 0;

    if(priceFormaggio == true) {
        price = price + 2;
    }

    if(priceUova == true) {
        price = price + 2.50;
    }

    if(priceMostarda == true) {
        price = price + 0.50;
    }

    if(pricePomodoro == true) {
        price = price + 1;
    }

    if(priceLattuga == true) {
        price = price + 0.50;
    }

    if(priceKetchup == true) {
        price = price + 0.10;
    }
    document.getElementById("price").innerHTML = price;
})
