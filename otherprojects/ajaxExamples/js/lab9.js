$(document).ready(function(){

$('#getOther').click(function(){
  $.getJSON("../jsonDatabase/lab9.json", function(data) {

              console.dir(data);
              var html = "";

              $.each(data, function(index, item) {
                  html += '<div class="col-md-4">' +
                    '<div class="Name">' + item.name + '</div>' +
                    '<div class="email"><small>email </small>' + item.email + '</div>' +
                    '<div class="gender"><small>gender</small>' + item.gender + '</div>' +
                    '<div class="phone"><small> phone </small>' + item.phone + '</div>' +
                    //deleted commentsContainer
                    '<div class="panel panel-default">' + //added
                    '<div class="panel-heading">Renter Comments</div>'; //added
                  $.each(item.comments, function(ind, i) {
                      html += '<div class="panel-body">' + //added
                        '<div class="renterName">' + i.username + '</div>' +
                        '<div class="renterComment">' + i.comment + '</div>' +
                        '<div class="renterStars">';



                        '</div>'; //panel body
                    }) //each comment

                  html += '</div>' + //panel
                    '</div>'; //col-md-4
                }) //each cat

          }); //click

}); // document ready
