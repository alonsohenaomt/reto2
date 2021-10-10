// Función para registrar nuevo cliente
function guardarCliente() {
    console.log("ejecutando guardar");

    let cliente = {
        id: +$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val(),
    };

    console.log(cliente);

    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode: {
            201: function () {
                alert('Se ha registrado un nuevo cliente');
            }
        },
    });


}