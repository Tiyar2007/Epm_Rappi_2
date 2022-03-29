let etiquetaBoton = document.getElementById("boton")
etiquetaBoton.addEventListener ("click", escuchar)
function escuchar (event){
    event.preventDefault ()
    console.log ("hizo click")
    let direccion = document.getElementById("direccion").value
    console.log (direccion)
    let email = document.getElementById("email").value
    console.log (email)
    let selector = document.getElementById("rappi").value
    let cantidad = document.getElementById("cantidad").value
    

    if(selector == "Torta de chocolate -El portal"){

    alert("por el dia de la madre usted tiene un descuento de 10.000 pesos en postres por lo que su valor a pagar sera de:" + cantidad*5000)
    }
    if(selector == "Pizza  -Dominos"){
        alert("El precio de la pizza dominos es de $40.000 por lo tanto su valor a pagar sera de: $" + cantidad*40000)
    }
    if(selector == "Pollo  -Frisby"){
        alert("El precio del pollo Frisby es de $50.000 por lo tanto su valor a pagar sera de: $" + cantidad*50000)
    }
    if(selector == "Pollo  -KFC"){
        alert("El precio del pollo KFC es de $45.000 por lo tanto su valor a pagar sera de: $" + cantidad*45000)
    }
    if(selector == "Bandeja paisa  -Rancherito"){
        alert("El precio de la bandeja paisa es de $70.000 por lo tanto su valor a pagar sera de: $" + cantidad*70000)
    }
    if(selector == "Empanadas  -El Machetico"){
        alert("El precio de las empanadas es de $5.000 por lo tanto su valor a pagar sera de: $" + cantidad*5000)
    }
}
