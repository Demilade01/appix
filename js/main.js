// Open Sub Menu
$('.drp_btn').click(function () {
  $(this).siblings('.sub_menu').slideToggle(500);
})

// Preloader JS

function preloader_fade() {
  $("#preloader").fadeOut('slow');
}

$(document).ready(function () {
  window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
}
)


// All Slider Js
$('#frmae_slider').owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  smartSpeed: 1500,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// Company Slider
$('#company_slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  smartSpeed: 1500,
  dots: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

// Testimonial Slider
$('#testimonial_slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  smartSpeed: 2500,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// Screen Slider
$('#screen_slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 2500,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})

// Feature Slider
$('#feature_slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 2500,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1400: {
      margin: 60
    }
  }
})

// text List Flow 
$('#text_list_flow').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  center: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoWidth: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

// text List Flow 
$('#text_list_flow_download').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  center: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoWidth: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})


// About Client Slider 
$('#client_slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  center: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoWidth: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

// text List Flow 
$('#about_slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  center: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  autoWidth: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})


// Feature Slider
$('#value_slider').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 2500,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1400: {
      margin: 60
    }
  }
})

// Feature Slider
$('#testimonial_slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: true,
  smartSpeed: 2500,
  items: 1
})


// Number Count
let counter_find = document.querySelector('#counter');
if (typeof (counter_find) != 'undefined' && counter_find != null) {
  window.addEventListener('scroll', function () {
    var element = document.querySelector('#counter');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
    }

    if (position.top < window.innerHeight && position.bottom >= 0) {
      //console.log('Element is partially visible in screen');
    } else {
      //console.log('Element is not visible');
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = 0;
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 100,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
    }
  });
}




// --------Magnify-popup

// $(function () {
//   $('.popup-youtube').magnificPopup({
//     disableOn: 700,
//     type: 'iframe',
//     mainClass: 'mfp-fade',
//     removalDelay: 160,
//     preloader: false,
//     fixedContentPos: false
//   });
// });


$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".icon_faq")
      .addClass("icofont-minus")
      .removeClass("icofont-plus");
  });


  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on("show.bs.collapse", function () {
    $(this).prev(".card-header").find(".icon_faq").removeClass("icofont-plus").addClass("icofont-minus");
  })
    .on("hide.bs.collapse", function () {
      $(this).prev(".card-header").find(".icon_faq").removeClass("icofont-minus").addClass("icofont-plus");
    });

  $(".collapse").on("show.bs.collapse", function () {
    $(this).prev(".card-header").children('h2').children('.btn').addClass("active");
  })
    .on("hide.bs.collapse", function () {
      $(this).prev(".card-header").children('h2').children('.btn').removeClass("active");
    });
});


// Scrool-top
// Go Top 
$(document).ready(function () {
  $('#Gotop').click(function () {
    let windiowTop = $(window).scrollTop();
    if (windiowTop <= 1000) {
      $('body,html').animate({ scrollTop: 0 }, 1000);
    } else if (windiowTop <= 2000 && windiowTop > 1000) {
      $('body,html').animate({ scrollTop: 0 }, 2000);
    } else {
      $('body,html').animate({ scrollTop: 0 }, 2500);

    }
  })
})

$(window).scroll(function () {
  let windiowTop = $(window).scrollTop();
  // console.log(windiowTop)
  if (windiowTop > 300) {
    $('#Gotop').fadeIn(500);
  } else {
    $('#Gotop').fadeOut(500);

  }
})


//YOUTUBE VIDEO
$('.play-button').click(function (e) {
  var iframeEl = $('<iframe>', { src: $(this).data('url') });
  $('#youtubevideo').attr('src', $(this).data('url'));
})

$('#close-video').click(function (e) {
  $('#youtubevideo').attr('src', '');
});

$(document).on('hidden.bs.modal', '#myModal', function () {
  $('#youtubevideo').attr('src', '');
});



// Close btn on click 

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    if ($(this).children('span').children('.ico_menu').hasClass('icofont-navigation-menu')) {
      $(this).children('span').children('.ico_menu').removeClass('icofont-navigation-menu').addClass('icofont-close');
    } else {
      $(this).children('span').children('.ico_menu').removeClass('icofont-close').addClass('icofont-navigation-menu');
    }
  });
});

(function () {
  $('.toggle-wrap').on('click', function () {
    $(this).toggleClass('active');
    $('aside').animate({ width: 'toggle' }, 200);
  });
})();


// INITIALIZE AOS

AOS.init();

