// Función para eliminar registro de mensaje
function eliminarMensaje(identificador) {

    let mensaje = {
        id: +identificador
    };

    console.log(mensaje);

    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode: {
            204: function () {
                alert('Se ha eliminado el mensaje');
            }
        },
    });

}