

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.header').addClass('sticky');
    }

    else {
      $('.header-box').removeClass('sticky');
    }

  })
});

$(document).ready(function () {
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });
});

$(document).ready(function(){
  
  $('.menu ul li a').on('click', function(){
    $('.menu ul li a.active').removeClass('active');
    $(this).addClass('active');
});
});



$(document).ready(function () {
  $('.scroll_to_top').hide();

  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.scroll_to_top').show(500);
    }

    else {
      $('.scroll_to_top').hide(500);

    }

  })
});




$(document).ready(function () {
  $('.scroll_to_top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);

    return false;

  })
});




$('.testimonial_flex').slick({
  dots: false,
  infinite: false,
  speed: 300,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// gallery for product
$(document).ready(function () {
  $('.thumbimg').click(function () {
    $('.thumbimg').removeClass('thumbnail-active');
    // add active class
    $(this).addClass('thumbnail-active');
  });

});


function myfunction(smallImg) {
  var fullImg = document.getElementById('main-img');
  fullImg.src = smallImg.src;
}

$(document).ready(function(){
  $('.open_form').click(function(){
    $('.form_popup').addClass('formactive');
  });
 
})


$(document).ready(function(){
  $('.close_btn').click(function(){
    $('.form_popup').removeClass('formactive');
  });
 
})
