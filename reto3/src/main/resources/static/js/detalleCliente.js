// Función para mostrar detalles de cliente
$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')) {
        let id = searchParams.get('id');
        consultarById(id);
console.log(id);
    }
});

function consultarById(id) {
    $.ajax({
        // Cambiar dirección para reto
        url: "http://localhost:8090/api/Client/get/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
             llenarDatos(respuesta);
            
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item) {
    $("#idClient").val(item.idClient);
    $("#name").val(item.name);
    $("#email").val(item.email);
    $("#age").val(item.age);
}