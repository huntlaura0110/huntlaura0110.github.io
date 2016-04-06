$(document).ready(function(){

  //change button text (Order Form)
$("#myButton").on("mouseenter", function() {
    $(this).text("ORDER NOW!!!");
  }) //mouse enter end

  .on("mouseleave", function() {
    $(this).text("Buy Now!");
  }); //mouse leave end


  //give the user a message about their selection (Order Form)
    $("#mySelect").on("change", function() {

     var val = $(this).val();
      $("#mySelectMessage").html(val + " is a great selection!");

    }); //change end



//radio buttons show depending on which Genre was chosen (Order Form)
$('#mySelect').on('change', function() {

var choice = $(this).find("option:selected").attr("id");

$(".radio-inline").hide();

if( choice == "animation-genre" ){
$('.animation-list').show();
}

else if (choice == "comedy-genre"){
$('.comedy-list').show();
}

else if (choice == "drama-genre"){
$('.drama-list').show();
}

else if (choice == "fantasy-genre"){
$('.fantasy-list').show();
}

else if (choice == "horror-genre"){
$('.horror-list').show();
}
}); //radio buttons end




//Check boxes show depending on which Show was chosen (Order Form)
$('input[type="radio"]').on("click", function(){
var userValue = $(this).val();

$(".seasons").hide();

if( userValue == "South Park" ){
$("#south-seasons").show();
}

else if( userValue == "Simpsons" ){
$("#simpsons-seasons").show();
}

else if( userValue == "Family Guy" ){
$("#family-seasons").show();
}

else if( userValue == "Boondocks" ){
$("#boondocks-seasons").show();
}

else if( userValue == "Flintstones" ){
$("#flintsones-seasons").show();
}

else if( userValue == "American Dad" ){
$("#americandad-seasons").show();
}

else if( userValue == "Friends" ){
$("#friends-seasons").show();
}

else if( userValue == "The Office" ){
$("#office-seasons").show();
}

else if( userValue == "Parks and Recreation" ){
$("#parks-seasons").show();
}

else if(  userValue == "How I Met Your Mother"){
$("#mother-seasons").show();
}

else if( userValue == "Big Bang Theory" ){
$("#bang-seasons").show();
}

else if( userValue == "Cougar Town" ){
$("#cougar-seasons").show();
}

else if( userValue == "Friday Night Lights" ){
$("#friday-seasons").show();
}

else if( userValue == "Good Wife" ){
$("#wife-seasons").show();
}

else if( userValue == "Orange Is The New Black" ){
$("#orange-seasons").show();
}

else if( userValue == "Breaking Bad" ){
$("#breakingbad-seasons").show();
}

else if( userValue == "Homeland" ){
$("#homeland-seasons").show();
}

else if( userValue == "Grey's Anatomy" ){
$("#greys-seasons").show();
}

else if( userValue == "Game Of Thrones" ){
$("#thrones-seasons").show();
}

else if( userValue == "Lost" ){
$("#lost-seasons").show();
}

else if( userValue == "Heroes" ){
$("#heroes-seasons").show();
}

else if( userValue == "Supernatural" ){
$("#super-seasons").show();
}

else if( userValue == "Vampire Diaries" ){
$("#vampire-seasons").show();
}

else if( userValue == "Shannara Chronicles" ){
$("#shannara-seasons").show();
}

else if( userValue == "Dexter" ){
$("#dexter-seasons").show();
}

else if( userValue == "Walking Dead" ){
$("#walking-seasons").show();
}

else if( userValue == "American Horror Story" ){
$("#american-seasons").show();
}

else if( userValue == "True Blood" ){
$("#trueblood-seasons").show();
}

else if( userValue == "X-Files" ){
$("#xfiles-seasons").show();
}

else if( userValue == "Sleepy Hollows" ){
$("#hollows-seasons").show();
}
});//Check Box end


//Get table of all info when click the button (Table)
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


  //user click button (Order Form)
  $("#myButton").on("click", function() {

  var myInput = $(".mySingleLineText").val();
  var securityCode = $('#securityCode').val();
  var expire = $("#expiryYear").val();
  var address = $("#address1").val();
  var zip = $("#zip").val();
  var state = $("#state").val();
  var country = $("#country").val();
  var mySelect = $("#mySelect").val();
  var month = $("#expirymonth").val();
  var myRadio = $("[name='title']:checked").val();
  var myCheckValues = [];
  //each is a jquery loop for objects/arrays
  $("[name='season']:checked").each(function() {
    myCheckValues.push($(this).val());
  }); //each end

  $("#log").append("<br>Value of select is: " + mySelect);
  $("#log").append("<br>Value of radio button is: " + myRadio);
  $("#log").append("<br>Value of checkbox is: " + myCheckValues);
  $("#log").append("<br>Value of input is: " + myInput);
  $("#log").append("<br>Value of input is: " + securityCode);
  $("#log").append("<br>Value of input is: " + month);
  $("#log").append("<br>Value of input is: " + expire);
  $("#log").append("<br>Value of input is: " + address);
  $("#log").append("<br>Value of input is: " + state);
  $("#log").append("<br>Value of input is: " + zip);
  $("#log").append("<br>Value of input is: " + country);
  //$("#log").append("<br>Value of textarea is: " + myTextArea);

}) //my button click end


// Payment & Button
$("#myButton").on("click",function (){
   //alert("Please Fill in the required space");
    // alert for final order if not filled out properly

// to put red boxes
 $("input, select").filter(function(){
 return !this.value;
   }).closest("div").addClass("has-error");


// to remove the red error
 $("input, select").filter(function(){
return this.value;
 }).closest("div").removeClass("has-error") ;

var errors = $(".has-error");

  if (errors.length < 1) {
                sendConfirmation();
              }

          }) //click


function sendConfirmation(){
//make an object to record data for database
var order={};
var formData = $("input, select");
// for each jquery object
formData.each(function(){
  //get the id
    var id = $(this).attr("id");
    //set the ofeld and the value
    order[id] = $(this).val();
})

 alert("sending to our database" + JSON.stringify(order));
 $("#successMsg").html("Order Received<br></br> ");

} // end conf.

}) //doc end
