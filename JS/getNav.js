//get the file (replace with your own url)
$.get('http://huntlaura0110.github.io/Partials/nav.html', function(data){

$(document).ready(function(){

$('.container').prepend(data);

})
})


$.get('http://huntlaura0110.github.io/Partials/footer.html', function(foot){

$(document).ready(function(){

$('.container').prepend(foot);
$('.container').fadeIn('slow');

})
})
