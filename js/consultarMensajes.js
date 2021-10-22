// Función para consultar mensaje
function consultarMensajes() {
    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items);
            mostrarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });

}

function mostrarRespuesta(items) {
    var tabla = `<table border="1" class="table table-striped table-hover">
                  <tr>
                    <th>ID</th>
                    <th>Mensaje</th>
                    <th>Acciones</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].messagetext}</td>
                   <td>
                   
                   <a href="#" onclick="eliminarMensaje(${items[i].id})" title="Eliminar" class="btn btn-light"><i class="bi bi-trash"></i></a>
                   <a href="detalleMensaje.html?id=${items[i].id}" title="Editar" class="btn btn-light"><i class="bi bi-pencil"></i></a>
                   </td> 
                </tr>`;
    }
    tabla += `</table>`;

    $("#tabla").html(tabla);
}