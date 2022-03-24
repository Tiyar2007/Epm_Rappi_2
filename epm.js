let boton = document.getElementById ("boton")
boton.addEventListener("click", recibirDatos)
function recibirDatos (event){
    event.preventDefault()

    let valor = document.getElementById("deuda").value

    let estrato = document.getElementById("selector").value


    if(estrato== "1"){
        alert("usted tiene un descuento del 40%")
        alert("su valor a pagar es de $" + valor*0.4)
    }
}