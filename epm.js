let boton = document.getElementById ("boton")
boton.addEventListener("click", recibirDatos)
function recibirDatos (event){
    event.preventDefault()

    let valor = document.getElementById("deuda").value

    let estrato = document.getElementById("selector").value


    switch(estrato) {
        case "1" : alert("Usted tiene un descuento del 40% por lo que su valor a pagar sera de: $" + valor*0.6)
        break

        case "2" : alert("Usted tiene un descuento del 30% por lo que su valor a pagar sera de: $" + valor*0.7)
        break

        case "3" : alert("Usted tiene un descuento del 20% por lo que su valor a pagar sera de: $" + valor*0.8)
        break

        case "4" : alert("Usted no tiene un descuento, por lo que su valor a pagar sera de: $" + valor)
        break

        case "5" : alert("Usted no tiene un descuento, por lo que su valor a pagar sera de: $" + valor)
        break

        case "6" : alert("Usted no tiene un descuento, por lo que su valor a pagar sera de: $" + valor)
        break

        default : alert("Opción no valida")
    }
    }