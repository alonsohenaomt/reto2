// Función para eliminar registro de mensaje
function eliminarMensaje(identificador) {

    //let mensaje = {
      //  id: +identificador
    //};

    //console.log(mensaje);

    $.ajax({
        // Cambiar dirección para reto
        url: "http://localhost:8090/api/Message/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(identificador),
        statusCode: {
            204: function () {
                alert('Se ha eliminado el mensaje');
                consultarMensajes();
            }
        },
    });

}