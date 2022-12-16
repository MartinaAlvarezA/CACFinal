// **** VARIABLES ****
const valor = 200;
document.getElementById("ticketsResumen").addEventListener("click", function(){
    let cantidad = document.getElementById('cantidad').value;
    if(cantidad > 0){
        let valorCantidad = valor * cantidad;
        let categoria = document.getElementById('categoria').value;
        console.log(categoria)
        if(categoria == 'Estudiante'){
            let descuento = valorCantidad * 0.2;
            document.getElementById('totalPagar').innerHTML = 'Total a pagar: $ '+ descuento;
        }
        else if(categoria == 'Trainee'){
            let descuento = valorCantidad * 0.5;
            document.getElementById('totalPagar').innerHTML = 'Total a pagar: $ '+ descuento;
        }
        else {
            let descuento = valorCantidad * 0.85;
            document.getElementById('totalPagar').innerHTML = 'Total a pagar: $ '+ descuento;
        }
    }
    else{
    alert('CANTIDAD MINIMA INCORRECTA !!');
    }
});

document.getElementById("ticketsBorrar").addEventListener("click", function(){
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('totalPagar').innerHTML = 'Total a pagar: $ ';
});





