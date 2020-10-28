// $(document).ready(function() {
//   $(".cv")[0]._tippy.show(1500); // 200ms
//   setTimeout(function() {
//     $(".cv")[0]._tippy.hide(1500);
//   }, 3000); // 200ms
// });

function openNav() {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementsByTagName("body")[0].style.overflow = "initial";
  document.getElementsByTagName("html")[0].style.overflow = "initial";
  document.getElementById("myNav").style.width = "0%";
}

$("#myNav a").click(function() {
  document.getElementsByTagName("body")[0].style.overflow = "initial";
  document.getElementsByTagName("html")[0].style.overflow = "initial";
  document.getElementById("myNav").style.width = "0%";
});

$(document).ready(function() {
  $("#downloadCVbtn").click(function(e) {
    e.preventDefault(); //stop the browser from following
    window.open('./CV.pdf', '_blank');
  });
  $("#nameBtn").click(function(e) {
    e.preventDefault(); //stop the browser from following
    window.location.reload();
  });
});

$(document).ready(function() {
  $(".timeline-panel").hover(
    function() {
      $(this)
        .siblings(".timeline-badge")
        .addClass("badge_active");
    },
    function() {
      $(this)
        .siblings(".timeline-badge")
        .removeClass("badge_active");
    }
  );
  $(".view_more").hover(
    function() {
      $(this)
        .siblings("img")
        .addClass("img");
    },
    function() {
      $(this)
        .siblings(".img")
        .removeClass("badge_active");
    }
  );
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          500,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

// $(".nav .nav-link").on("click", function () {
//     $(".nav").find(".active").removeClass("active");
//     $(this).addClass("active");
// });

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$elem1 = $(".progress-bar");
var scrollState = "top";

$(document).on("scroll", function() {
  if ($(this).scrollTop() + 500 >= $("#home2").position().top) {
    $(".progress-bar").each(function() {
      var each_bar_width = $(this).attr("aria-valuenow");
      console.log(each_bar_width);
      $(this).width(each_bar_width + "%");
    });
  }
});

function getBgUrl(el) {
  var bg = "";
  if (el.currentStyle) {
    // IE
    bg = el.currentStyle.backgroundImage;
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    // Firefox
    bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
  } else {
    // try and get inline style
    bg = el.style.backgroundImage;
  }
  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

if (window.innerWidth >= 1024) {
  var image = document.createElement("img");
  image.src = getBgUrl(document.getElementById("home"));
  image.onload = function() {
    $("#profile").addClass("animated zoomInLeft");
    $("#profile").show();
    // $(".typewriter h1").css(
    //   "animation",
    //   "typing 1.5s steps(35, end), blink-caret .5s step-end"
    // );
    // $(".typewriter h1").fadeIn();
  };
} else {
  $("#profile").addClass("animated zoomIn");
}

$(document).ready(function() {
  setTimeout(() => {
    $("#msg1").addClass("animated fadeIn");
    $("#msg1").show();
  }, 500);

  setTimeout(() => {
    $("#msg2").addClass("animated fadeIn");
    $("#msg2").show();
  }, 1500);

  setTimeout(() => {
    $("#msg3").addClass("animated fadeIn");
    $("#msg3").show();
  }, 2500);

  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
});

// this is the id of the form
$("#mailForm").submit(function(e) {
  var url = "./mail.php"; // the script where you handle the form input.

  $.ajax({
    type: "POST",
    url: url,
    data: $("#mailForm").serialize(), // serializes the form's elements.
    success: function(data) {
      swal(
        "Thank You!",
        "Your email has been received. We will contact you soon!",
        "success"
      );
    }
  });

  e.preventDefault(); // avoid to execute the actual submit of the form.
});

var projects_loaded = false;
var contact_loaded = false;

$(document).on("scroll", function() {
  if (!projects_loaded)
    if ($(this).scrollTop() + 500 >= $("#home1").position().top) {
      $("#containerTimeline").addClass("animated fadeIn");
      $("#containerTimeline").show();
      projects_loaded = true;
    }
  if (!contact_loaded)
    if ($(this).scrollTop() + 500 >= $("#home3").position().top) {
      $("#contact_me_text").addClass("animated fadeInLeft");
      $("#contact_me_text").show();
      setTimeout(() => {
        $("#contact_form").addClass("animated swing");
      }, 1000);
      setTimeout(() => {
        $("#find_me").addClass("animated fadeIn");
        $("#find_me").show();
      }, 1500);
      contact_loaded = true;
    }
});
