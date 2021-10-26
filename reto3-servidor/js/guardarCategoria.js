// Función para registrar nueva categoria
function guardarCategoria() {
    console.log("ejecutando guardar");

    let categoria = {
        name: $("#name").val(),
        description: $("#description").val(),
    };
    console.log(categoria);
    $.ajax({
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Category/save",
        //url: "http://localhost:8090/api/Category/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode: {
            201: function () {
                alert('Se ha registrado una nueva categoria');
            }
        },
    });


}