//Carga las categoriás en el menú desplegable
function cargarCatenOrt() {
    $.ajax({
        // Cambiar dirección para reto
        url: "http://localhost:8090/api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuesta2(respuesta);

        },
        error: function (xhr, status) {
            alert('Ha sucedido un problema');
        }
    });

    let ids = [];
    let idaandCat = [];
    function mostrarRespuesta2(categorias) {
        var select = document.getElementById("select"),
            arr = categorias;
        categoria = { id: "", name: "", description: "", ortopedics: "" };
        const keys = Object.keys(categoria);
        console.log(keys);

        arr.forEach((Element) => {
            console.log(Element.name);
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(Element.name);
            ids.push(Element.id);
            console.log(idaandCat);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
            console.log(ids);
        });
    }
}