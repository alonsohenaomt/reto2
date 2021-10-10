// Función para registrar nuevo mensaje
function guardarMensaje() {
    console.log("ejecutando guardar");

    let mensaje = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),
    };

    console.log(mensaje);

    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode: {
            201: function () {
                alert('Se ha registrado un nuevo mensaje');
            }
        },
    });


}