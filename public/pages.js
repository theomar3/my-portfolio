var $titleRow = $('.title-row');
var $mainRow = $('.main-row');


$titleRow.on('click', function() {
  $mainRow.toggleClass('hidden');
})


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


$('.github-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: 'Visit my GitHub Page?',
    imageUrl: '/images/github-link.png',
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});

$('.codecamp-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: 'Visit fully responsive live website I did?',
    imageUrl: '/images/code-camp.jpg',
    imageSize: "500x300",
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});

$('.typefight-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: 'Visit my interactive Javascript game?',
    imageUrl: '/images/typefight.jpg',
    imageSize: "450x300",
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});

$('.getpunch-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: "Visit GetPunch's site which I helped create?" ,
    imageUrl: '/images/getpunch.png',
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
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

$('.youtube-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: "Visit my YouTube Channel - Code Rookie?" ,
    imageUrl: '/images/youtube-logo.png',
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});

$('.wordpress-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: "Visit my blog - TeachertoCoder?" ,
    imageUrl: '/images/wordpress.png',
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});

$('.linkedin-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: "Visit my LinkedIn page?" ,
    imageUrl: '/images/linkedin-logo.png',
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});

$('.email-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: "Email me?" ,
    imageUrl: '/images/gmail.png',
    showCancelButton: true
  },
  function() {
    window.location.href = link;
  });
});


$socialHomeTexxt.hover(function() {
  $socialHomeTexxt.html("<img class='home-icon'src='/images/home-icon.png'/>")
},
function() {
  $socialHomeTexxt.html('Where our story begins');
});
