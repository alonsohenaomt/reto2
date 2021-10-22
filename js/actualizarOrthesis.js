// Función para actualizar orthesis
function actualizarOrthesis() {
    console.log("ejecutando actualizar");

    let orthesis = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val(),
    };

    console.log(orthesis);

    $.ajax({
        // Cambiar dirección para reto
        url: "https://gffa906f6450705-orthesis.adb.eu-zurich-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(orthesis),
        statusCode: {
            201: function () {
                alert('Se ha actualizado la orthesis');
            }
        },
    });


}