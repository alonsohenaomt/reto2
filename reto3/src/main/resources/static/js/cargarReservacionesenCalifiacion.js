//Carga las ortesis en el menú desplegable de reservaciones
function cargarReservacionesenCalificacion() {
    $.ajax({
        // Cambiar dirección para reto
        //url: "http://140.238.185.119:8080/api/Ortopedic/all",
        url: "http://localhost:8090/api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            mostrarRespuesta2(respuesta);

        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });

    let ids = [];
    let idandName = [];
    function mostrarRespuesta2(reserva) {
        var select = document.getElementById("selectReservas"),
            arr = reserva;
        res = { idReservation: "", startDate: "", devolutionDate: "", status: "", ortopedic: "", client: "", score: "" };
        const keys = Object.keys(res);

        arr.forEach((Element) => {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(Element.idReservation);
            ids.push(Element.idReservation);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
        });
    }
}