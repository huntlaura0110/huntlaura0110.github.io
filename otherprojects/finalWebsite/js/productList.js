$(document).ready(function(){

$('.basic-info').hide();
$('.extended-info').hide();
$('.basic-info h3').hide();

$("getInfo").on("click", function() {

var url = "http://huntlaura0110.github.io/otherprojects/finalWebsite/jsonDatabase/finalWebsite.json";

  $.getJSON(url, function (data){

var html = "<table class= 'table table-hover table-striped'>" +
"<tr><th>Name</th><th>Seasons</th><th>Description</th></tr>";

    $.each(data, function(index, item){

    html += "<tr>" +
    "<td>"+item.name+"</td>" +
    "<td>"+item.seasons+"</td>" +
    "<td>"+item.description+"</td>" +
    "</tr>";
  }) //each

    html += "</table>";

    $("#data").append(html);



  }) //getJSON

}) //click


}); //end
