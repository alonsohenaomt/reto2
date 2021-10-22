// Función para consultar orthesis
function consultarOrthesis() {
    $.ajax({
        // Cambiar dirección para reto
        url: "http://localhost:8090/api/Ortopedic/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
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
                    <th scope="col">Acciones</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].brand}</td>
                   <td>${items[i].year}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].description}</td>
                   <td>${items[i].category.name}</td>
                   <td>
                        <a href="#" onclick="eliminar(${items[i].id})" title="Eliminar" class="btn btn-light"><i class="bi bi-trash"></i></a>
                        <a href="detalleOrtesis.html?id=${items[i].id}" title="Editar" class="btn btn-light"><i class="bi bi-pencil"></i></a>
                   </td> 
                </tr>`;
    }
    tabla += `</table>`;

    $("#tabla").html(tabla);
}

