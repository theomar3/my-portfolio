var $homeText = $('.about-home-link');
var $homeIcon = $('.home-icon');

$homeText.hover(function() {
  $homeText.html("<img class='home-icon'src='/images/home-icon.png'/>")
},
function() {
  $homeText.html('No place like it');
});
