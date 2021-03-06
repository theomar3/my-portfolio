var $titleRow = $('.title-row');
var $mainRow = $('.main-row');
var $width = $(window).width();



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

// $('.resume-link').click(function(e) {
//   e.preventDefault();
//   var link = $(this).attr('href');
//
//   swal({
//     title: "View my resume?",
//     showCancelButton: true;
//   },
//   function() {
//     window.open(link, "_blank");
//   });
// });

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
    window.open(link, "_blank");
  });
});


$('.codecamp-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: 'Visit fully responsive live website I pair-programmed?',
    imageUrl: '/images/code-camp.jpg',
    imageSize: "300x100",
    showCancelButton: true
  },
  function() {
    window.open(link, "_blank");
  });
});


$('.typefight-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: 'Visit my interactive Javascript game?',
    imageUrl: '/images/typefight.jpg',
    imageSize: "280x100",
    showCancelButton: true
  },
  function() {
    window.open(link, "_blank");
  });
});

$('.tuo-link').click(function(e) {
  e.preventDefault();
  var link = $(this).attr('href');

  swal({
    title: "Coming Soon! (In Progress)" ,
    // imageUrl: '/images/getpunch.png' pic coming soon,
    // imageSize: "300x300"
    showCancelButton: false
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
    window.open(link,"_blank");
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
    window.open(link, "_blank");
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
    window.open(link, "_blank");
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
