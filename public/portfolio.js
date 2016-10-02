var $oBall = $('.ball.o');
var $aboutVerticalTitle = $('.vertical-titles.about');
var $aboutSubHeading= $('.sub-heading.about');

var $mBall = $('.ball.m');
var $resumeVerticalTitle = $('.vertical-titles.resume');
var $resumeSubHeading= $('.sub-heading.resume');

var $aBall = $('.ball.a');
var $projectsVerticalTitle = $('.vertical-titles.projects');
var $projectsSubHeading= $('.sub-heading.projects');

var $rBall = $('.ball.r');
var $socialVerticalTitle = $('.vertical-titles.social');
var $socialSubHeading= $('.sub-heading.social');



$oBall.mouseover(function() {
  $oBall.toggleClass('animated swing');
});
$oBall.on('click', function() {
  $oBall.addClass('animated hinge');
});
$aboutVerticalTitle.mouseover(function() {
  $aboutVerticalTitle.toggleClass('animated swing');
});
$aboutVerticalTitle.on('click', function() {
  $oBall.addClass('animated hinge');
});
$aboutSubHeading.mouseover(function() {
  $aboutSubHeading.toggleClass('animated swing');
});

$mBall.mouseover(function() {
  $mBall.toggleClass('animated swing');
});
$mBall.on('click', function() {
  $mBall.addClass('animated hinge');
});
$resumeVerticalTitle.mouseover(function() {
  $resumeVerticalTitle.toggleClass('animated swing');
});
$resumeVerticalTitle.on('click', function() {
  $mBall.addClass('animated hinge');
});
$resumeSubHeading.mouseover(function() {
  $resumeSubHeading.toggleClass('animated swing');
});

$aBall.mouseover(function() {
  $aBall.toggleClass('animated swing');
});
$aBall.on('click', function() {
  $aBall.addClass('animated hinge');
});
$projectsVerticalTitle.mouseover(function() {
  $projectsVerticalTitle.toggleClass('animated swing');
});
$projectsVerticalTitle.on('click', function() {
  $aBall.addClass('animated hinge');
});
$projectsSubHeading.mouseover(function() {
  $projectsSubHeading.toggleClass('animated swing');
});

$rBall.mouseover(function() {
  $rBall.toggleClass('animated swing');
});
$rBall.on('click', function() {
  $rBall.addClass('animated hinge');
});
$socialVerticalTitle.mouseover(function() {
  $socialVerticalTitle.toggleClass('animated swing');
});
$socialVerticalTitle.on('click', function() {
  $rBall.addClass('animated hinge');
});
$socialSubHeading.mouseover(function() {
  $socialSubHeading.toggleClass('animated swing');
});


$aboutVerticalTitle.click(function(){
    var self = $(this);
    self.next().slideToggle(2000, function() {
        window.location.href = self.attr('about.html'); // go to href after the slide animation completes
    });
    return false; // And also make sure you return false from your click handler.
});
