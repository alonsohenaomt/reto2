// Función para eliminar registro de cliente
function eliminarCliente(identificador) {

    let cliente = {
        id: +identificador
    };

    console.log(cliente);

    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode: {
            204: function () {
                alert('Se ha eliminado los datos del cliente');
            }
        },
    });

}