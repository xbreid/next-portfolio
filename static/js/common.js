$(document).ready(function() {

  function hashchanged(){
    var hash = location.hash.replace( /^#/, '' );
    if (hash === 'work') {
      $(".scrollDown").addClass("scrollDown-disabled");
    } else if (hash === 'contact') {
      $(".scrollDown").addClass("scrollDown-disabled");
    } else if (hash === 'about') {
      $(".scrollDown").addClass("scrollDown-disabled");
    }else if (hash === 'home') {
      $(".scrollDown").removeClass("scrollDown-disabled");
    }
  }

  hashchanged();

  window.addEventListener("hashchange", hashchanged, false);

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  if (/about/.test(window.location.href)) {
    $("#nav-toggle span").css("background-color", "white");
  }

  if (/tac/.test(window.location.href)) {
    $("#nav-toggle span").css("background-color", "white");

    $(document).scroll(function() {
      if($(window).scrollTop() !== 0) {
        $(".scrollDown").addClass("scrollDown-disabled");
      } else {
        $(".scrollDown").removeClass("scrollDown-disabled");
      }
    });

    var distance = $('.work-content').offset().top;

    $(window).scroll(function() {
      if ( $(this).scrollTop() >= distance ) {
        $("#nav-toggle span").css("background-color", "#333");
      }
    });

    $(window).on('resize scroll', function() {
      if ($('.hero').isInViewport()) {
        $("#nav-toggle span").css("background-color", "#fff");
      }
    });
  }


  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;

  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    $(".title").css({"background-position": traX + "%" + traY + "%"});
    $(".space-card").css({"background-position": traX + "%" + traY + "%"});
    $(".space-card-tac").css({"background-position": (traX - 10) + "%" + (traY - 20) + "%"});
    $(".space-card-about").css({"background-position": (traX + 20) + "%" + (traY + 20) + "%"});
    $(".space-card-contact").css({"background-position": (traX - 30) + "%" + (traY + 30) + "%"});
  });
});

function resizeNav() {
// Set the nav height to fill the window
$("#nav-fullscreen").css({"height": window.innerHeight});

// Set the circle radius to the length of the window diagonal,
// this way we're only making the circle as big as it needs to be.
var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
var diameter = radius * 2;
$("#nav-overlay").width(diameter);
$("#nav-overlay").height(diameter);
$("#nav-overlay").css({"margin-top": -radius, "margin-right": -radius});
}

// Set up click and window resize callbacks, then init the nav.
$(document).ready(function() {
  $("#nav-toggle").click(function() {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
    $("body").toggleClass("overflow-hidden");
  });

  $(".home-head").click(function() {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

  $(".about-head").click(function() {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

  $(".works-head").click(function() {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

  $(".resume-head").click(function() {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

  $(".contact-head").click(function() {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

$(window).resize(resizeNav);

resizeNav();
});

var makeWinHeight = function(){
var vh = $(window).height();
var projects = vh/2 + vh/4;
var main = projects * 2;
$('#scene, .layer.gradient, #canvas-basic').height(vh);
$('#scene .col a, #scene .col').height(projects);
$('.layer.main').height(main);
}
$(document).ready(function(){
makeWinHeight();

});
$(window).resize(function(){
makeWinHeight();
});
