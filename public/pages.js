var $homeIcon = $('.home-icon');


// about section
var $aboutHomeText = $('.about-home-text');


$aboutHomeText.hover(function() {
  $aboutHomeText.html("<img class='home-icon'src='/images/home-icon.png'/>")
},
function() {
  $aboutHomeText.html('No place like it');
});

// resume section
var $resumeHomeText = $('.resume-home-text');


$resumeHomeText.hover(function() {
  $resumeHomeText.html("<img class='home-icon'src='/images/home-icon.png'/>")
},
function() {
  $resumeHomeText.html('Where the heart is');
});

// projects section
var $projectsHomeText = $('.projects-home-text');
var $myGitText = $('.my-git-text');
var $codeCampText = $('.code-camp-text');
var $typefightText = $('.typefight-text');

var $gitIcon = $('.git-icon');
var $codeCampPic = $('.code-camp-pic');
var $typefightPic = $('.type-fight-pic');



$myGitText.hover(function() {
  $myGitText.html("<img class='git-icon'src='/images/github-big.png'/>")
},
function() {
  $myGitText.html('Git it?');
});

$codeCampText.hover(function() {
  $codeCampText.html("<img class='code-camp-pic'src='/images/code-camp.jpg'/>")
},
function() {
  $codeCampText.html('Fully responsive online site');
});

$typefightText.hover(function() {
  $typefightText.html("<img class='typefight-pic'src='/images/typefight.jpg'/>")
},
function() {
  $typefightText.html('Interactive Javascript game');
});

$projectsHomeText.hover(function() {
  $projectsHomeText.html("<img class='home-icon'src='/images/home-icon.png'/>")
},
function() {
  $projectsHomeText.html('Place of love, hope, and dreams');
});

// social section
var $myYoutubeText = $('.my-youtube-text');
var $myBlogText = $('.blog-text');
var $myLinkedinText = $('.linkedin-text');
var $emailText = $('.email-me-text');
var $socialHomeTexxt = $('.social-home-text');

var $youtubeIcon = $('.youtube-icon');
var $wordpressIcon = $('.wordpress-icon');
var $linkedinIcon = $('.linkedin-icon');

$myYoutubeText.hover(function() {
  $myYoutubeText.html("<img class='youtube-icon'src='/images/youtube.png'/>")
},
function() {
  $myYoutubeText.html('Code Rookie YouTube Channel');
});

$myBlogText.hover(function() {
  $myBlogText.html("<img class='wordpress-icon'src='/images/wordpress.png'/>")
},
function() {
  $myBlogText.html('TeachertoCoder Wordpress');
});

$myLinkedinText.hover(function() {
  $myLinkedinText.html("<img class='linkedin-icon' src='https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png' width='50'/>")
},
function() {
  $myLinkedinText.html('Omar Ahmad LinkedIn');
});

$emailText.hover(function() {
  $emailText.html("<img src='/images/gmail.png' width='150'/>")
},
function() {
  $emailText.html('Email me anytime');
});

$socialHomeTexxt.hover(function() {
  $socialHomeTexxt.html("<img class='home-icon'src='/images/home-icon.png'/>")
},
function() {
  $socialHomeTexxt.html('Where our story begins');
});
