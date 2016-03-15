
$("#getClients").on("click", function() {

var url = "http://huntlaura0110.github.io/otherprojects/ajaxExamples/jsonDatabase/clients.json";

  $.getJSON(url, function (data){

    alert(data);
    console.dir(data);

  }) //getJSON

}) //Click
