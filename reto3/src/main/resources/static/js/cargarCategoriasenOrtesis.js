//Carga las categoriás en el menú desplegable de ortesis
function cargarCatenOrt() {
    $.ajax({
        // Cambiar dirección para reto
        //url: "http://140.238.185.119:8080//api/Category/all",
        url: "http://localhost:8090/api/Category/all",
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
    let idaandCat = [];
    function mostrarRespuesta2(categorias) {
        var select = document.getElementById("select"),
            arr = categorias;
        categoria = { id: "", name: "", description: "", ortopedics: "" };
        const keys = Object.keys(categoria);

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