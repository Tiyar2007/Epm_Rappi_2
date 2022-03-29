let boton = document.getElementById("boton")

boton.addEventListener("click" , function(event){

    event.preventDefault()

    let cantidad = document.getElementById("cantidad").value
    let tipo = document.getElementById("tipo").value

    if (tipo == "1") {
        alert("En medellín el concierto sera en Agosto 8 y el precio de sus entradas son $" + 1000000 * cantidad  )
    }

    else if (tipo == "2") {
        alert("En Bogotá el concierto sera en Agosto 11 y el precio de sus entradas son $" + 1100000 * cantidad  )
    }

    else {
        alert("En Cali el concierto sera en Agosto 15 y el precio de sus entradas son $" + 900000 * cantidad  )
    }
        
        
})