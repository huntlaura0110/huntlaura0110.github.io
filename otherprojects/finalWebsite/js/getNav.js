
//Nav for all pages
$.get('http://huntlaura0110.github.io/otherprojects/finalWebsite/partials/nav.html', function(data){

$(document).ready(function(){

$('.container').prepend(data);

})
})

//Footer for all pages
$.get('http://huntlaura0110.github.io/otherprojects/finalWebsite/partials/footer.html', function(foot){

$(document).ready(function(){

$('.container').prepend(foot);
$('.container').fadeIn('slow');

})
})
