// Función para mostrar detalles de cliente
$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')) {
        let id = searchParams.get('id');
        consultarById(id);
    }
});

function consultarById(id) {
    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/client/client/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items);
            if (respuesta.items.length == 1) {
                llenarDatos(respuesta.items[0]);
            } else {
                $("#boton").hide();
                alert('No se encuentra el gato con el id ' + id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item) {
    $("#id").val(item.id);
    $("#name").val(item.name);
    $("#email").val(item.email);
    $("#age").val(item.age);
}