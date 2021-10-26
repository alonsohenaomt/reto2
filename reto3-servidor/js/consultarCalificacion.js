// Función para consultar calificacion
function consultarCalificacion() {
    $.ajax({
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Category/all",
        //url: "http://localhost:8090/api/Score/all",
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
                    <th scope="col">Calificacion</th>
                    <th scope="col">Mensaje</th>
                </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].score}</td>
                   <td>${items[i].message}</td>
                 
                                    
                   <!--<td>
                        <a href="#" onclick="eliminar(${items[i].id})" title="Eliminar" class="btn btn-light"><i class="bi bi-trash"></i></a>
                        <a href="detalleOrtesis.html?id=${items[i].id}" title="Editar" class="btn btn-light"><i class="bi bi-pencil"></i></a>
                   </td>--> 
                </tr>`;
    }
    tabla += `</table>`;

    $("#tabla").html(tabla);
}

