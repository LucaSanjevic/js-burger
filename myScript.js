
document.getElementById("btnPrice").addEventListener("click", function() {
    
    var btnFormaggio = document.getElementById("Formaggio")
    var btnUova = document.getElementById("Uova")
    var btnMostarda = document.getElementById("Mostarda")
    var btnPomodoro = document.getElementById("Pomodoro")
    var btnLattuga = document.getElementById("Lattuga")
    var btnKetchup = document.getElementById("Ketchup")
    var sconto = document.getElementById("coupon").value

var price = 1;

    if(btnFormaggio.checked) {
        price += 2.50
    }

    if(btnUova.checked) {
        price += 2
    }
    
     if(btnMostarda.checked) {
        price += 1
    }
    
    if(btnPomodoro.checked) {
        price += 1.50
    }
    
    if(btnLattuga.checked) {
        price += 0.50
    }
    
    if(btnKetchup.checked) {
        price += 0.10
    }

    if(sconto == "936193BSOBDW" || sconto == "739624FJCHEY") {
    price = (price/100) * 80
    }

        document.getElementById("price").innerHTML = price;
    })
    