/*
Theme Name: Magro
Theme URI: http://themewar.com/html/magro/
Author: ThemeWar
Author URI: http://themewar.com/
Description: Magro - Blog & News Magazine HTML5 Responsive Template.
Version: 1.0
License:
License URI:
*/
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Vars
 2. All Slider
 3. Inner Column Inside
 4. Video Play
 5. Skills
 6. Suffle
 7. Count Down
 8. Custom Google Maps
 9. Price Slider Range
 10. Qty
 11. Popup Menu and Mobile Menu
 12. Back To Top
 13. preloader
 14. Contact Form Submission
*/
(function($){
    'use strict';
    /* Init Vars */
    var tr_slider = $('.tr_slider'),
        tr_slider_2 = $('.tr_slider_2'),
        featured_slider_1 = $('.featured_slider_1'),
        tw2_list_slide = $('.tw2_list_slide'),
        featured_slider_2 = $('.featured_slider_2'),
        popup_video = $('.popup_video'),
        popup_img = $('.popup_img'),
        modern_slide = $('.modern_slide'),
        fs_single_sSlider = $('.fs_single_sSlider'),
        rc_post_slide = $('.rc_post_slide'),
        trending_rcpost_slide = $('.trending_rcpost_slide'),
        cate_slider = $('.cate_slider'),
        feature_slider_2 = $('.feature_slider_2'),
        feature_slider_3 = $('.feature_slider_3'),
        pro_realtedSlider = $('.pro_realtedSlider'),
        video_slider = $('.video_slider'),
        gallery_photo = $('.gallery_photo'),
        gallery_news_photo = $('.gallery_news_photo'),
        feature_slider_active = $('.feature_slider_active'),
        vfp_active = $('.vfp_active'),
        photography_slider = $('.photography_slider'),
        sb_photo_slider = $('.sb_photo_slider'),
        twitter_feed = $('.twitter_feed'),
        slider_post = $('.slider_post'),
        countdown = $('#countdown_dashboard');
    
    /*--------------------------------------------------------
    / 1. All Slider
    /--------------------------------------------------------*/
    tr_slider.owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin:0,
        dots: false,
        autoplayTimeout: 5000,
        touchDrag: false,
        loop: true,
        nav: true,
        navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>']
    });
    tr_slider_2.owlCarousel({
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed: 350,
        items:1,
        margin:0,
        dots: false,
        loop: true,
        nav: false
    });
    featured_slider_1.owlCarousel({
        autoplay: true,
        items:1,
        margin:0,
        dots: false,
        nav: true,
        navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
        loop: true
    });
    tw2_list_slide.owlCarousel({
        autoplay: true,
        items: 1,
        margin:0,
        dots: false,
        smartSpeed: 700,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
        loop: true
    });
    featured_slider_2.owlCarousel({
        loop:true,
        margin: 0,
        dots: true,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'slideOutUp',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    var i = 1;
    $('.featured_slider_2 .owl-dot').each(function(){
      $(this).html('<span>0' + i+'</span>');
      i++;
    });
    modern_slide.owlCarousel({
        autoplay: false,
        items: 2,
        margin: 20,
        dots: false,
        nav: true,
        navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
        loop: false
    });
    $(document).on('ready', function() {
        $('.editor_slide').slick({
          dots: true,
          arrows: false,
          vertical: true,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          verticalSwiping: true
        });
    });
    rc_post_slide.owlCarousel({
        loop:true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="twi-arrow-left"></i>', '<i class="twi-arrow-right"></i>'],
        items: 5,
        mouseDrag: false,
        autoplay: true,
        animateIn: 'slideInLeft',
        animateOut: 'slideOutRight',
        responsive:{
            0:{
                items: 1
            },
            500:{
                items: 2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1024:{
                items:5
            }
        }
    });
    trending_rcpost_slide.owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
        items: 4,
        mouseDrag: false,
        autoplay: true,
        animateIn: 'fadeInLeft',
        animateOut: 'fadeOutRight',
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    cate_slider.owlCarousel({
        loop:true,
        margin: 10,
        dots: false,
        nav: false,
        items: 5,
        autoplay: true,
        animateIn: 'slideInLeft',
        animateOut: 'slideOutRight',
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            992:{
                items:3
            },
            1024:{
                items:4
            },
            1400:{
                items:5
            }
        }
    });
    $(window).on('load', function () {
        feature_slider_2.owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: false,
            autoWidth: true,
            items: 3,
            autoplay: true,
            autoplayHoverPause: true,
            animateIn: 'fadeInLeft',
            animateOut: 'fadeOutRight',
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                760: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });
    });
    $(window).on('load', function () {
        feature_slider_3.owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoWidth: true,
            autoplayHoverPause: true,
            navText: ['<i class="twi-arrow-left"></i><span>Prev Post</span>', '<i class="twi-arrow-right"></i><span>Next Post</span>'],
            items: 2,
            autoplay: false,
            animateIn: 'fadeInLeft',
            animateOut: 'fadeOutRight',
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                767: {
                    items: 2,
                    margin: 20,
                    autoWidth: false
                },
                992: {
                    items: 2
                }
            }
        });
    });
    if (pro_realtedSlider.length > 0) {
        pro_realtedSlider.owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: false,
            items: 4,
            autoplay: true,
            animateIn: 'fadeInLeft',
            animateOut: 'fadeOutRight',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    if (video_slider.length > 0) {
        video_slider.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 300,
            slidesToShow: 3,
            dots: true,
            arrows: true,
            nextArrow: '<button class="slick-next"><i class="twi-angle-right2"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="twi-angle-left2"></i></button>',
            centerPadding: '30px',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if (gallery_photo.length > 0) {
         gallery_photo.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.gallery_slider'
          });
          $('.gallery_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.gallery_photo',
            dots: false,
            nextArrow: '<button class="slick-next"><i class="twi-angle-right2"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="twi-angle-left2"></i></button>',
            centerMode: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
          });
    }
    if (gallery_news_photo.length > 0) {
         gallery_news_photo.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 800,
            fade: true,
            asNavFor: '.gallery_news_slide'
          });
          $('.gallery_news_slide').slick({
            slidesToShow: 3,
            autoplay: true,
            arrows: false,
            slidesToScroll: 1,
            centerPadding: '0',
            autoplaySpeed: 4000,
            speed: 300,
            asNavFor: '.gallery_news_photo',
            dots: false,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
          });
    }
    if (feature_slider_active.length > 0) {
         feature_slider_active.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 300,
            fade: true,
            asNavFor: '.feature_item_slide'
          });
          $('.feature_item_slide').slick({
            slidesToShow: 2,
            autoplay: true,
            arrows: false,
            slidesToScroll: 2,
            vertical: true,
            infinite: true,
            focusOnSelect: true,
            verticalSwiping: true,
            centerPadding: '0',
            autoplaySpeed: 4000,
            speed: 300,
            asNavFor: '.feature_slider_active',
            dots: false,
            centerMode: true
          });
          $('.feature_item_slide').on('afterChange', function(event, slick, currentSlide, nextSlide){
                var sl_no = currentSlide + 1;
                $('.counting_bar h1').html(sl_no+'.');
          });
    }
    if (vfp_active.length > 0) {
         vfp_active.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 300,
            fade: true,
            asNavFor: '.side_video_area'
          });
          $('.side_video_area').slick({
            slidesToShow: 3,
            autoplay: false,
            arrows: false,
            vertical: true,
            infinite: true,
            focusOnSelect: true,
            verticalSwiping: true,
            centerPadding: '0px',
            autoplaySpeed: 4000,
            speed: 300,
            asNavFor: '.vfp_active',
            dots: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
          });
    }
    if (photography_slider.length > 0) {
        photography_slider.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            margin: 0,
            autoplay: false,
            nav: true,
            navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
            dots: false
        });
    }
    if (sb_photo_slider.length > 0) {
        sb_photo_slider.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            margin: 0,
            autoplay: false,
            nav: true,
            navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
            dots: false
        });
    }
    if (twitter_feed.length > 0) {
        twitter_feed.owlCarousel({
            items: 1,
            animateIn: 'fadeInLeft',
            animateOut: 'fadeOutRight',
            margin: 0,
            autoplay: false,
            nav: true,
            navText: false,
            dots: true
        });
    }
    if (slider_post.length > 0) {
        slider_post.owlCarousel({
            items: 1,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            margin: 0,
            autoplay: false,
            nav: true,
            loop: true,
            navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
            dots: false
        });
    }
    
    /*--------------------------------------------------------
    / 2. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
	transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        controls: true
    });
    popup_img.lightcase({
	transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    $('.colse_popup').on('click', function (e) {
        e.preventDefault();
        $('.show_popup').fadeOut('medium');
    });
    
    /*--------------------------------------------------------
    / 3. Inner Column Inside
    /--------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".row"),
                    cols = $this.closest('[class^="col-"]'),
                    colsheight = $this.closest('[class^="col-"]').height(),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    tw_stretch();
    /*--------------------------------------------------------
    / 4. Video Play
    /--------------------------------------------------------*/
    var vid = document.getElementById("myVideo");
    function playPause() {
        if (vid.paused) {
            vid.play();
        }
        else {
            vid.pause();
        }
    }
    if ($('#myVideo').length > 0) {
        $('#playVideo').on('click', function (e) {
            e.preventDefault();
            playPause();
            if ($(this).hasClass('playing'))
            {
                $(this).removeClass('playing').html('<i class="magro-play-button"></i>');
                vid.pause();
            }
            else
            {
                $(this).addClass('playing').html('<i class="twi-pause"></i>');
                vid.play();
            }
        });
    }
    
    /*--------------------------------------------------------
    / 5. Skills
    /--------------------------------------------------------*/
    if ($(".single_skill").length > 0)
    {
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }
    /*--------------------------------------------------------
    / 6. Suffle 
    /--------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shafull_container").length > 0)
        {
            var $grid = $('.shafull_container');
            $grid.shuffle({
                itemSelector: '.shaf_item',
                sizer: '.shaf_sizer'
            });
            /* reshuffle when user clicks a filter item */
            $('.shaf_filter li').on('click', function () {
                // set active class
                $('.shaf_filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
    });
    
    /*--------------------------------------------------------
    / 7. Count Down
    /----------------------------------------------------------*/
    if (countdown.length > 0) {
        var d = countdown.attr('data-day');
        var m = countdown.attr('data-month');
        var y = countdown.attr('data-year');
        countdown.countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    /*--------------------------------------------------------
    / 8. Custom Google Maps
    /----------------------------------------------------------*/
    if ($("#magro_map").length > 0)
    {
        var map;
        map = new GMaps({
            el: "#magro_map",
            lat: -37.815340,
            lng: 144.963230,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: -37.815340,
            lng: 144.963230,
            icon: "images/map_marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#f2b95e"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#aacbd9"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#ffffee"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2c2c2c"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#f5eac5"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#2c2c2c"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }
    /*--------------------------------------------------------
    / 9. Price Slider Range
    /----------------------------------------------------------*/
    if ($("#slider-range").length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 100,
            values: [18, 49],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    }
    
     /*--------------------------------------------------------
     / 10. Qty
     /----------------------------------------------------------*/
    if ($(".qtyBtn").length > 0)
    {
        $(".btnMinus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);

            if (vals > 1)
            {
                vals -= 1;
                $(this).next(".carqty").val(vals);
            } else
            {
                $(this).next(".carqty").val(vals);
            }
            return false;
        });
        $(".btnPlus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }
    $('.search_btn a').on('click', function (e) {
        e.preventDefault();
        $('.search_btn').toggleClass('active');
    });
    /*--------------------------------------------------------
    / 11. Popup Menu and Mobile Menu
    /---------------------------------------------------------*/
    $('.popup_togggle_menu').on('click', function (e) {
        e.preventDefault();
        $('.popup_menu').addClass('active').fadeIn();
        setTimeout(function () {
            if ($('.popup_menu').hasClass('active')) {
                var tlMenu = new TimelineLite();
                tlMenu.set($(".animated_menu"), {y: 80, opacity: 0});
                $(".animated_menu").each(function (index, element) {
                    tlMenu.to(element, 0.5, {y: 0, opacity: 1, delay: 0.4, ease: Power2.easeOut}, index * 0.1)
                });
            } else {
                var tlMenu = new TimelineLite();
                $(".animated_menu").each(function (index, element) {
                    tlMenu.to(element, 0.25, {y: -80, opacity: 0, ease: Power2.easeIn}, index * 0.05)
                });
            }

        }, 20)
    });
    $('#close_menu').on('click', function () {
        var tlMenu = new TimelineLite();
        $(".animated_menu").each(function (index, element) {
            tlMenu.to(element, 0.25, {y: -80, opacity: 0, ease: Power2.easeIn}, index * 0.05)
        });
        $(".popup_menu ul.sub-menu").slideUp('slow', function () {
            $(".menu-item-has-children.active").removeClass("active");
            $('.popup_menu').removeClass('active');
        });
        setTimeout(function () {
            $('.popup_menu').fadeOut()
        }, 500)
    });
    
    if ($(".row").length > 0)
    {
        $(".menu_popup ul li.menu-item-has-children > a").on('click', function (e) {
            e.preventDefault();
            if ($(this).parent('li').hasClass('active'))
            {
                $(this).parent('li').removeClass('active');
                $(this).next('ul.sub-menu').slideUp('slow');
            } else
            {
                $(".menu-item-has-children ul.sub-menu").slideUp('slow');
                $(".menu-item-has-children.active").removeClass("active");
                $(this).parent().toggleClass('active');
                $(this).next('ul.sub-menu').slideToggle('slow');
            }
        });
    }
    $(window).on("load resize", function (e) {
        if ($(window).width() < 991) {
            $('.mobileMenuBar a').on('click', function (e) {
                e.preventDefault();
                $('.mobile_menu > ul').slideToggle();
            });
            $('.mobile_menu ul li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu_toggler"><i class="twi-caret-down"></i></span>');
            });
            $('.mobile_menu ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('twi-caret-up').addClass('twi-caret-down');
                } else {
                    $('i', $this).addClass('twi-caret-up').removeClass('twi-caret-down');
                }

                $(this).prev('ul.sub-menu, .megamenu, .megamenu_2').slideToggle();
                $(this).toggleClass('active-span');
            });
        }
    });
    /*--------------------------------------------------------
    / 12. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    /*--------------------------------------------------------
    / 13. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function(){
        var preload = $('.preloader');
        if(preload.length > 0){
            preload.delay(800).fadeOut('slow');
        }
    });
    /*--------------------------------------------------------
    / 14. Contact Form Submission
    /--------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('input[type="submit"]', this).attr('disabled', 'disabled');
        $('.ast_loader', this).fadeIn();

        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === '')
            {
                $(this).addClass('reqError');
                required += 1;
            } else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'ajax/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('input[type="submit"]', $this).removeAttr('disabled');
                    $('.ast_loader', $this).fadeOut();

                    $this.remove('.ast_con_message');
                    $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
                    setTimeout(function () {
                        $('.ast_con_message', $this).fadeOut().html('');
                    }, 5000);
                }
            });
        } else {
            $('input[type="submit"]', $this).removeAttr('disabled');
            $('.ast_loader', $this).fadeOut();
            $('.ast_con_message', $this).fadeOut().html('');
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });
    
})(jQuery);