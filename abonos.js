let boton = document.getElementById("boton")

boton.addEventListener("click" , function(event){

    event.preventDefault()

    let cantidad = document.getElementById("cantidad").value
    let tipo = document.getElementById("tipo").value

    if (tipo == "Sur") {
        alert("Su abono sera de $" + 144000 * cantidad+ " a la tribuna " + tipo)
    }

    else if (tipo == "Norte") {
        alert("Su abono sera de $" + 144000 * cantidad + " a la tribuna " + tipo)
    }

    else if (tipo == "Oriental") {
        alert("Su abono sera de $" + 215000 * cantidad + " a la tribuna " + tipo)

    }

    else {
        alert("Su abono sera de $" + 444000 * cantidad + " a la tribuna " + tipo)
    }

})