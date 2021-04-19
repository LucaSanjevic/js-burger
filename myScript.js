
document.getElementById("btnPrice").addEventListener("click", function() {
    
    var btnFormaggio = document.getElementById("Formaggio")
    var btnUova = document.getElementById("Uova")
    var btnMostarda = document.getElementById("Mostarda")
    var btnPomodoro = document.getElementById("Pomodoro")
    var btnLattuga = document.getElementById("Lattuga")
    var btnKetchup = document.getElementById("Ketchup")
var price = 5;

    if(btnFormaggio.checked) {
        price += 2
    }

    if(btnUova.checked) {
        price += 2
    }
    
     if(btnMostarda.checked) {
        price += 2
    }
    
    if(btnPomodoro.checked) {
        price += 2
    }
    
    if(btnLattuga.checked) {
        price += 2
    }
    
    if(btnKetchup.checked) {
        price += 2
    }

        document.getElementById("price").innerHTML = price;
    })
    