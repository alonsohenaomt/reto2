// Función para eliminar registro de cliente
function eliminarCliente(identificador) {
//var eliminar = function (id) 
    //let cliente = {
      //  id: +identificador
    //};

    console.log(identificador);

    $.ajax({
        // Cambiar dirección para reto
        url: "http://localhost:8090/api/Client/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(identificador),
        statusCode: {
            204: function () {
                alert('Se ha eliminado los datos del cliente');
                consultarCliente();
            }
        },
    });

}