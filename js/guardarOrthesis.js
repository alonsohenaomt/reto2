// Función para registrar nueva orthesis
function guardarOrthesis() {
    console.log("ejecutando guardar");

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
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(orthesis),
        statusCode: {
            201: function () {
                alert('Se ha registrado la ortesis');
            }
        },
    });


}