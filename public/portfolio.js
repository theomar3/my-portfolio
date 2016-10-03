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
// $aboutVerticalTitle.mouseover(function() {
//   $aboutVerticalTitle.toggleClass('animated swing');
// });
$aboutVerticalTitle.on('click', function() {
  $oBall.addClass('animated hinge');
});
$aboutSubHeading.mouseover(function() {
  $aboutSubHeading.toggleClass('animated swing');
});
$(function(){
    $oBall.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'about.html';
        }, 2000);
    });
    $aboutVerticalTitle.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'about.html';
        }, 2000);
    });
});

$mBall.mouseover(function() {
  $mBall.toggleClass('animated swing');
});
$mBall.on('click', function() {
  $mBall.addClass('animated hinge');
});
// $resumeVerticalTitle.mouseover(function() {
//   $resumeVerticalTitle.toggleClass('animated swing');
// });
$resumeVerticalTitle.on('click', function() {
  $mBall.addClass('animated hinge');
});
$resumeSubHeading.mouseover(function() {
  $resumeSubHeading.toggleClass('animated swing');
});
$(function(){
    $mBall.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'resume.html';
        }, 1800);
    });
    $resumeVerticalTitle.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'resume.html';
        }, 1800);
    });
});

$aBall.mouseover(function() {
  $aBall.toggleClass('animated swing');
});
$aBall.on('click', function() {
  $aBall.addClass('animated hinge');
});
// $projectsVerticalTitle.mouseover(function() {
//   $projectsVerticalTitle.toggleClass('animated swing');
// });
$projectsVerticalTitle.on('click', function() {
  $aBall.addClass('animated hinge');
});
$projectsSubHeading.mouseover(function() {
  $projectsSubHeading.toggleClass('animated swing');
});
$(function(){
    $aBall.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'projects.html';
        }, 1900);
    });
    $projectsVerticalTitle.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'projects.html';
        }, 1900);
    });
});

$rBall.mouseover(function() {
  $rBall.toggleClass('animated swing');
});
$rBall.on('click', function() {
  $rBall.addClass('animated hinge');
});
// $socialVerticalTitle.mouseover(function() {
//   $socialVerticalTitle.toggleClass('animated swing');
// });
$socialVerticalTitle.on('click', function() {
  $rBall.addClass('animated hinge');
});
$socialSubHeading.mouseover(function() {
  $socialSubHeading.toggleClass('animated swing');
});
$(function(){
    $rBall.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'social.html';
        }, 1900);
    });
    $socialVerticalTitle.click(function(evt){
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = 'social.html';
        }, 1900);
    });
});
