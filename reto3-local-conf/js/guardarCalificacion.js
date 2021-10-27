// Función para registrar nueva calificacion
var codigoReserva;

function buscarIdReserva(reservas) {

    var selectReservas = document.getElementById("selectReservas").value;
    return selectReservas;


}

function guardarCalificacion() {


    $.ajax({
        async: false,
        // Cambiar dirección para reto
        //url: "http://140.238.185.119:8080/api/Ortopedic/all",
        url: "http://localhost:8090/api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            codigoReserva = buscarIdReserva(respuesta);
            console.log(codigoReserva);
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });


    let calificacion = {
        score: $("#score").val(),
        message: $("#message").val(),
        idReserva: codigoReserva
    };
    console.log(calificacion);





    $.ajax({
        // Cambiar dirección para reto
        //url: "http://140.238.185.119:8080/api/Score/save",
        url: "http://localhost:8090/api/Score/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(calificacion),
        statusCode: {
            201: function () {
                alert('Se ha registrado una nueva calificación');
            }
        },
    });


}