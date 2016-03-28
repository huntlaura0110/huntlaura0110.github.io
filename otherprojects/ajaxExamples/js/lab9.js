$(document).ready(function(){

$("#getOther").on("click", function() {

var url = "http://huntlaura0110.github.io/otherprojects/ajaxExamples/jsonDatabase/lab9.json";

  $.getJSON(url, function (data){

var html = "<table class= 'table table-hover table-striped'>" +
"<tr><th>Age</th><th>Phone Number</th><th>Address</th></tr>";

    $.each(data, function(index, item){

    html += "<tr>" +
    "<td>"+item.age+"</td>" +
    "<td>"+item.phone+"</td>" +
    "<td>"+item.address+"</td>" +
    "</tr>";
  }) //each

    html += "</table>";

    $("#data").append(html);



  }) //getJSON

}) //Click

}) // document ready
