$(document).ready(function(){

$("#getClients").on("click", function() {

var url = "http://huntlaura0110.github.io/otherprojects/ajaxExamples/jsonDatabase/lab9.json";

  $.getJSON(url, function (data){

var html = "<table class= 'table table-hover table-striped'>" +
"<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

    $.each(data, function(index, item){

    html += "<tr>" +
    "<td>"+item.name+"</td>" +
    "<td>"+item.email+"</td>" +
    "<td>"+item.company+"</td>" +
    "</tr>";
  }) //each

    html += "</table>";

    $("#data").append(html);



  }) //getJSON

}) //Click

}) // document ready
