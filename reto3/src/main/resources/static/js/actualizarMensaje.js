// Función para actualizar mensaje
function actualizarMensaje() {
    console.log("ejecutando actualizar mensaje");

    let mensaje = {
        idMessage: +$("#idMessageact").val(),
        messageText: $("#messagetextact").val(),
    };

    console.log(mensaje);

    $.ajax({
        // Cambiar dirección para reto
        url: "http://localhost:8090/api/Message/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode: {
            201: function () {
                alert('Se ha actualizado el mensaje');
            }
        },
    });


}