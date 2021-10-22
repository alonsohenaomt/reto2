// Función para eliminar registro de orthesis
function eliminar(identificador) {

    let orthesis = {
        id: +identificador
    };

    console.log(orthesis);

    $.ajax({
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(orthesis),
        statusCode: {
            204: function () {
                alert('Se ha eliminado la orthesis');
                consultarOrthesis();
            }
        },
    });

}