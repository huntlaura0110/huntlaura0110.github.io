$(document).ready(function(){

  $("#getOther").on("click",function(){

    $.getJSON("http://huntlaura0110.github.io/otherprojects/ajaxExamples/jsonDatabase/lab9.json", function(data) {

                console.dir(data);

                  var html="<table class='table table-hover table-striped'>"+
                "<tr><th>Name</th><th>age</th><th>Company</th></tr>";
                  $.each(data, function(index, item){
                  //  $("#data").append(item.name);
                html+="<tr>"+
                "<td>" +item.name +"</td>"+
                "<td>"+item.phone + "</td>"+
                "<td>"+item.email + "</td>"+
                "<td>"+item.address + "</td>"+

                "</tr>";
                  }) // each end
                      html+="</table>";
                      $("#data").append(html);
                    html += '</div>' + //panel
                      '</div>'; //col-md-4
                  }) //each person

}) //click end

}) // doc end
