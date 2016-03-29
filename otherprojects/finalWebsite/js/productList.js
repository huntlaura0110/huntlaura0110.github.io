$(document).ready(function(){
$('.extended-info').hide();

$("#getInfo").on("click", function() {

var url = "http://huntlaura0110.github.io/otherprojects/finalWebsite/jsonDatabase/finalWebsite.json";

  $.getJSON(url, function (data){

var html = "<table class= 'table table-hover table-striped'>" +
"<tr><th>Name</th><th>Genre</th><th>Release Date</th><th>Seasons</th><th>Description</th><th>Rated</th></tr>";

    $.each(data, function(index, item){

    html += "<tr>" +
    "<td>"+item.name+"</td>" +
    "<td>"+item.genre+"</td>" +
    "<td>"+item.release+"</td>" +
    "<td>"+item.seasons+"</td>" +
    "<td>"+item.description+"</td>" +
    "<td>"+item.rated+"</td>" +
    "</tr>";
  }) //each

    html += "</table>";

    $("#data").append(html);

  }) //getJSON

}) //Click

$('.basic-info img').hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
}) //end
