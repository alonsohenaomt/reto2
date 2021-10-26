// Función para registrar nueva calificacion
function guardarCalificacion() {
    console.log("ejecutando guardar");

    let calificacion = {
        score: $("#score").val(),
        message: $("#message").val(),
    };
    console.log(calificacion);
    $.ajax({
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Score/save",
        //url: "http://localhost:8090/api/Score/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(calificacion),
        statusCode: {
            201: function () {
                alert('Se ha registrado una nueva categoria');
            }
        },
    });


}