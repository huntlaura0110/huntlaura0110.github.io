$(document).ready(function(){

$("#getClients").on("click", function() {

var url = "http://huntlaura0110.github.io/otherprojects/ajaxExamples/jsonDatabase/clients.json";

  $.getJSON(url, function (data){

var html = "<table>" + "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

    $.each(data, function(index, item){

    html += "<tr><th>"+item.name+"</th><th>"+item.email+"</th><th>"+item.company+"</th></tr>";
  }) //each

    html += "</table>";

    $("#data").append(html);



  }) //getJSON

}) //Click

}) // document ready
