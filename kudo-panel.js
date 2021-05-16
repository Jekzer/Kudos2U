// Añade un kudo al issue
function addKudo(){  
    // Obtenemos la descripción a partir del input:
    var todo = parseInt($('#kudo-count').val());
    todo++;
    $('#kudo-count').val(todo);

    // // Obtenemos la 'issue key'
    // var issueId = getIssueKey();

    // // hacemos la petición a la API rest de JIRA
    // AP.require(['request'], function(request) {
    //     request({
    //         url: '/rest/api/2/issue/'+issueId+'/properties/kudos',
    //         success: function() {
    //             refreshTodoPanel();
    //         },
    //         error: function() {
    //             console.error("Error loading API" + response.status);
    //         },
    //         data: JSON.stringify(todo),
    //         type: "PUT",
    //         contentType: "application/json"
    //     });
    // });  
}

// Inicializamos el panel
$(function(){
    $('#create-button').click(addKudo);
    //refreshTodoPanel();
});

// Obtiene los todos y genera dinámicamente la tabla con los mismos
function refreshTodoPanel(){  
    var issueId = getIssueKey();
    AP.require(['request'], function(request) {
        request({
            url: '/rest/api/2/issue/'+issueId+'/properties/kudos',
            success: function(response) {
                // Convierte la respuesta a JSON
                response = JSON.parse(response);

                // Llamamos a una función auxiliar para construir la tabla
                //buildTodoTable(response.value.todos, "#kudo-count");
            },
            error: function() {
                //buildTodoTable([], "#kudo-count");
            },
            contentType: "application/json"
        });
    });
}

// Crea una tabla con los todos dentro del elemento identificado por
// el selector pasado en el parámetro
// function buildTodoTable(todos, selector) {

//     function buildTableAndReturnTbody(hostElement) {
//         var projTable = hostElement.append('table')
//             .classed({'aui': true});

//         // table > thead > tr
//         var projHeadRow = projTable.append("thead").append("tr");
//         // añadimos cabeceras a la tabla
//         projHeadRow.append("th").text("Description");
//         projHeadRow.append("th").text("Action");

//         return projTable.append("tbody");
//     }

//     var rootElement = d3.select(selector);
//     rootElement.html("");
//     var tableBody = buildTableAndReturnTbody(rootElement);

//     if (!todos.length){
//         tableBody
//             .append("div")
//             .append('span')
//             .classed({'aui-lozenge': true, 'aui-lozenge-success': true})
//             .text("No todos for this issue")
//         return;
//     }

//     // por cada uno de los todos:
//     var row = tableBody.selectAll("tr")
//         .data(todos)
//         .enter()
//         .append("tr");

//     // Añadimos un td para la descripción
//     row.append("td").append('span')
//         .classed({'aui-label': true})
//         // el contenido del td será el propio todo
//         .text(function(item) { return item; });

//     // Finalmente, un td con el 'enlace' de elminar
//     row.append("td").append('span')

//         .append("a")

//         .attr('href', "#")
//         .text("remove")
//         //personalizaremos el evento 'click'
//         .on("click", function (d){
//             removeTodo(d);
//         });
// }

// obtiene los todos cargados en la tabla HTML
function getData(){  
    return d3.select('#todo-list tbody').selectAll("tr").data();
}

// obtenemos la issuekey que hemos almacenando en un input oculto, a modo de metadato
function getIssueKey(){  
    return $('#kudo-issue-key').val();
}