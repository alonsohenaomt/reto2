//Carga los clientes en el menú desplegable de reservaciones
function cargarClientesEnReservaciones() {
    $.ajax({
        // Cambiar dirección para reto
        //url: "http://140.238.185.119:8080/api/Client/all",
        url: "http://localhost:8090/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            mostrarRespuestaCliente(respuesta);

        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });

    let idC = [];
    let idandName = [];
    function mostrarRespuestaCliente(clientes) {
        var select = document.getElementById("selectClient"),
            arr = clientes;
        cliente = { idClient: "", email: "", password: "", name: "", age: "" };
        const keys = Object.keys(cliente);

        arr.forEach((Element) => {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(Element.name);
            idC.push(Element.idClient);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
        });
    }
}