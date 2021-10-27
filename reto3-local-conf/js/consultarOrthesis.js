// Función para consultar orthesis
function consultarOrthesis() {
    $.ajax({
        // Cambiar dirección para reto
        //url: "http://140.238.185.119:8080/api/Ortopedic/all",
        url: "http://localhost:8090/api/Ortopedic/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            mostrarRespuesta(respuesta);
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });

}

function mostrarRespuesta(items) {
    var tabla = `<table border="1" class="table table-striped table-hover">
                  <tr>
                    <th scope="col">Marca</th>
                    <th scope="col">Año</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Mensajes</th>
                    <th scope="col">Reservaciones</th>
                    <!--<th scope="col">Acciones</th>-->
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].brand}</td>
                   <td>${items[i].year}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].description}</td>
                   <td>${items[i].category.name}</td>
                   <td>${items[i].messages.length}</td>
                   <td>${items[i].reservations.length}</td>`;
    }

    tabla += `</tr></table>`;

    $("#tabla").html(tabla);
}

