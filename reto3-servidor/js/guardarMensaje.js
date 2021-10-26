// Función para registrar nuevo mensaje
var codigoOrtopedic;
var codigoClient;

function buscarId(ortesis) {

    var selectOrtopedics = document.getElementById("selectOrtopedics").value;
    const idOrt = ortesis.find(ort => ort.name === selectOrtopedics);
    return idOrt.id;

}
function buscarIdClient(clientes) {

    var selectClient = document.getElementById("selectClient").value;
    const idCli = clientes.find(cli => cli.name === selectClient);
    return idCli.idClient;
}

console.log("ejecutando guardar");

function guardarMensaje() {

    console.log(codigoOrtopedic);
    $.ajax({
        async: false,
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Ortopedic/all",
        //url: "http://localhost:8090/api/Ortopedic/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuestaOrtopedic) {
            console.log(respuestaOrtopedic);
            codigoOrtopedic = buscarId(respuestaOrtopedic);
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });

    $.ajax({
        async: false,
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Client/all",
        //url: "http://localhost:8090/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuestaClient) {
            console.log(respuestaClient);
            codigoClient = buscarIdClient(respuestaClient);
        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });


    console.log(codigoOrtopedic);




    let mensaje = {
        messageText: $("#messagetext").val(),
        client: { "idClient": +codigoClient },
        ortopedic: { "id": +codigoOrtopedic }

    };
    console.log(mensaje);


    $.ajax({
        // Cambiar dirección para reto
        url: "http://140.238.185.119:8080/api/Message/save",
        //url: "http://localhost:8090/api/Message/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode: {
            201: function () {
                alert('Se ha registrado un nuevo mensaje');
            }

        }

    });


}