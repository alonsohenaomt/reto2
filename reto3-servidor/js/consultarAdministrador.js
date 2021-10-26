// Función para consultar orthesis
function consultarAdministrador() {
    $.ajax({
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Admin/all",
        //url: "http://localhost:8090/api/Admin/all",
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].password}</td>
                   
                   </tr>`
    }

    tabla += `</table > `;

    $("#tabla").html(tabla);
}

