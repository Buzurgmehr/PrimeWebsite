$ (function(){
    new WOW().init();
});

$(function(){
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
        enabled:true
  }
    });
});

$(function(){
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
    });
  });
  
$(function(){
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
    });
  });


  $(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
  })

  $(function(){
    $("#clients-list").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
    });
  });

  // Activate scrollspy to add active class to navbar items on scroll
   