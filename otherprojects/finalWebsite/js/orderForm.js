$(document).ready(function(){

  //change button text
$("#myButton").on("mouseenter", function() {
    $(this).text("ORDER NOW!!!");
  })
  .on("mouseleave", function() {
    $(this).text("Click Me!");
  });

  //give the user a message about their selection
    $("#mySelect").on("change", function() {

      var val = $(this).val();
      $("#mySelectMessage").html(val + " is a great selection!");

    });

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
  });

  $("#log").append("<br>Value of input is: " + myInput);
  $("#log").append("<br>Value of textarea is: " + myTextArea);
  $("#log").append("<br>Value of select is: " + mySelect);
  $("#log").append("<br>Value of radio button is: " + myRadio);
  $("#log").append("<br>Value of checkbox is: " + myCheckValues);
})

})
