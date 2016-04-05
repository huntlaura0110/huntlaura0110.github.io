$(document).ready(function(){

  //change button text
$("#myButton").on("mouseenter", function() {
    $(this).text("ORDER NOW!!!");
  }) //mouse enter end

  .on("mouseleave", function() {
    $(this).text("Click Me!");
  }); //mouse leave end

  //give the user a message about their selection
    $("#mySelect").on("change", function() {

      var val = $(this).val();
      $("#mySelectMessage").html(val + " is a great selection!");

    }); //change end


  //user click button
  $("#myButton").on("click", function() {

  var myInput = $("#mySingleLineText").val();
  var myTextArea = $("#myTextArea").val();
  var mySelect = $("#mySelect").val();
  var myRadio = $("[name='title']:checked").val();
  var myCheckValues = [];
  //each is a jquery loop for objects/arrays
  $("[name='season']:checked").each(function() {
    myCheckValues.push($(this).val());
  }); //each end

  $("#log").append("<br>Value of input is: " + myInput);
  $("#log").append("<br>Value of textarea is: " + myTextArea);
  $("#log").append("<br>Value of select is: " + mySelect);
  $("#log").append("<br>Value of radio button is: " + myRadio);
  $("#log").append("<br>Value of checkbox is: " + myCheckValues);
}) //my button click end



//radio buttons show depending on which Genre was chosen
$('.form-control').change(function() {

if( "#animation-genre" === "click"){
$('#animation-genre').show();
}

else{
  $('#comedy-genre').hide();
  $('#drama-genre').hide();
  $('#fantasy-genre').hide();
  $('#horror-genre').hide();
}  //else end
}); //radio buttons end




//Check boxes show depending on which Show was chosen
//$('.checkbox').hide();

$('#friends-selection').click(function(){
$('#friends-seasons').show();
});

// Check boxes ended


//Get table of all info when click the button
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

}) //doc end
