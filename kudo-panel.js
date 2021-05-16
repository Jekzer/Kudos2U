// Script que permite añadir kudos a un issue

function addKudo(){  
    // Obtenemos el conteo actual de kudos y lo actualizamos
    var kudos = parseInt($('#kudo-count').val());
    kudos++;
    $('#kudo-count').val(kudos);

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
    //         data: JSON.stringify(kudos),
    //         type: "PUT",
    //         contentType: "application/json"
    //     });
    // });  
}

// Inicializamos el panel
$(function(){
    $('#kudo-button').click(addKudo);
    //refreshTodoPanel();
});

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


// obtenemos la issuekey que hemos almacenando en un input oculto, a modo de metadato
function getIssueKey(){  
    return $('#kudo-issue-key').val();
}