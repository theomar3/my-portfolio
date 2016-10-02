var $ball = $('.ball');
var $verticalTitle = $('.vertical-titles');
var $aboutSubHeading = $('.about-sub-heading');



$ball.mouseover(function() {
  $ball.toggleClass('animated swing');
});

$ball.on('click', function() {
  $ball.addClass('animated hinge');
});

$verticalTitle.mouseover(function() {
  $verticalTitle.toggleClass('animated swing');
});

$verticalTitle.on('click', function() {
  $ball.addClass('animated hinge');
});

$subHeading.mouseover(function() {
  $subHeading.toggleClass('animated swing');
});
