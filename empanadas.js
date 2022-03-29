let boton = document.getElementById("boton")

boton.addEventListener("click" , function(event){

    event.preventDefault()

    let cantidad = document.getElementById("cantidad").value
    let tipo = document.getElementById("tipo").value

    if (tipo == "1") {
        alert("Su pedido costara $" + 700 * cantidad)
    }

    else if (tipo == "2") {
        alert("Su pedido costara $" + 650 * cantidad)
    }

    else if (tipo == "3") {
        alert("Su pedido costara $" + 800 * cantidad)

    }

    else if (tipo == "4") {
        alert("Su pedido costara $" + 550 * cantidad)
    }

    else {
        alert("Su pedido costara $" + 400 * cantidad)
    }

})
