var owl = jQuery('.owl-popular');
owl.owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText: ["<span class='dashicons dashicons-arrow-left-alt2'></span>","<span class='dashicons dashicons-arrow-right-alt2'></span>"],
    margin:30,

    responsive:{
        0:{
            items:1,
            margin:16,
            center: true
        },
        600:{
            items:2,
            margin:16,
            center: true
        },
        960:{
            items:4
        },
        1200:{
            items:4
        }
    }
});

var owl1 = jQuery('.owl-apparel');
owl1.owlCarousel({
    loop:true,
    nav:true,
    dots:false,
  navText: ["<span class='dashicons dashicons-arrow-left-alt2'></span>","<span class='dashicons dashicons-arrow-right-alt2'></span>"],
    margin:30,

    responsive:{
        0:{
            items:1
        },
        567:{
            items:2,
            margin:16,
            center: true
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});


var owl2 = jQuery('.owl-seller');
owl2.owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoWidth:true,
    navText: ["<span class='dashicons dashicons-arrow-left-alt2'></span>","<span class='dashicons dashicons-arrow-right-alt2'></span>"],
    margin:30,

    responsive:{
        0:{
            items:1
        },
        567:{
            items:2,
            margin:16,
            center: true
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});


var owl3 = jQuery('.owl-testimonials');
owl3.owlCarousel({
  center: true,
  nav:false,
  items:2,
  loop:true,
  margin:30,
  autoWidth:true,
  responsive:{
    0:{
        items:1,
        margin:16
    },
    567:{
        items:2,
        margin:16
    },
    992:{
        items:3
    },
    1200:{
        items:4
    }
  }
});




var owlsg = jQuery('.owl-testimonials_sg');
owlsg.owlCarousel({
  nav:false,
  items:2,
  loop:true,
  margin:30,
  responsive:{
    0:{
        items:2
    },
    567:{
        items:3
    },
    992:{
        items:3
    },
    1200:{
        items:3
    }
  }
});

jQuery('.woof_price_filter').click(function(){
    //alert('hello');
    jQuery('.widget_price_filter form').slideToggle();
});

jQuery('.woof_container_pa_colorway').click(function(){
    //alert('hello');
    jQuery('.woof_container_pa_colorway .woof_block_html_items').slideToggle();
});

jQuery('.filter-btn').click(function(){
    jQuery('.shop-filter').addClass('filter-active');
});


jQuery('.mobile-close').click(function(){
    jQuery('.shop-filter').removeClass('filter-active');
});
