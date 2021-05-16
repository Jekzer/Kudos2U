// // Añade un kudo al issue
// function addKudo(){  
//     // Obtenemos el conteo actual, incrementamos y actualizamos
//     var todo = parseInt($('#kudo-count').val());
//     todo++;
//     $('#kudo-count').val(todo);

//     // Obtenemos la 'issue key'
//     var issueId = getIssueKey();

//     // hacemos la petición a la API rest de JIRA
//     AP.require(['request'], function(request) {
//         request({
//             url: '/rest/api/2/issue/'+issueId+'/properties/kudos',
//             success: function() {
//                 refreshTodoPanel();
//             },
//             error: function() {
//                 console.error("Error loading API" + response.status);
//             },
//             data: JSON.stringify(todo),
//             type: "PUT",
//             contentType: "application/json"
//         });
//     });  
// }

// // Al clickar botón, incrementamos el contador de Kudos
// $(function(){
//     $('#create-button').click(addKudo);
// });

// // obtenemos la issuekey que hemos almacenando en un input oculto, a modo de metadato
// function getIssueKey(){  
//     return $('#kudo-issue-key').val();
// }