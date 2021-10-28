// Función para mostrar detalles de mensaje
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
        url: "http://localhost:8090/api/Message/get/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            llenarDatos(respuesta);
            
        },
        error: function (xhr, status) {
            alert('Ha ocurrido un problema');
        }
    });
}

function llenarDatos(item) {
    $("#idMessageact").val(item.idMessage);
    $("#messagetextact").val(item.messageText);
}