(function ($) {
    "use strict";
    var $w = $(window),
        headerFixed = false,
        $body = $("body"),
        $navbar = $(".navbar");
    function wWidth() {
        return $w.width();
    }
    var wNow = wWidth();
    $w.on("resize", function () {
        wNow = wWidth();
    });

    //=========== Dropdown Menu =============
    $(".mainmenu li.dropdown").hover(
        function () {
            if ($w.width() > 991) {
                $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(300);
            }
        },
        function () {
            if ($w.width() > 991) {
                $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(300);
            }
        }
    );

    // Active page menu when click
    var CurURL = window.location.href,
        urlSplit = CurURL.split("#");
    var $nav_link = $(".mainmenu li a");
    if ($nav_link.length > 0) {
        $nav_link.each(function () {
            if (CurURL === this.href && urlSplit[1] !== "") {
                $(this).closest("li").addClass("active").parent().closest("li").addClass("active");
            }
        });
    }

    // Sticky Menu
    var $is_sticky = $(".is-sticky");
    if ($is_sticky.length > 0) {
        var $mmenu = $("#mainmenu").offset();
        $w.scroll(function () {
            var $scroll = $w.scrollTop();
            if ($w.width() > 991) {
                if ($scroll > $mmenu.top) {
                    if (!$is_sticky.hasClass("has-fixed")) {
                        $is_sticky.addClass("has-fixed");
                    }
                } else {
                    if ($is_sticky.hasClass("has-fixed")) {
                        $is_sticky.removeClass("has-fixed");
                    }
                }
            } else {
                if ($is_sticky.hasClass("has-fixed")) {
                    $is_sticky.removeClass("has-fixed");
                }
            }
        });
    }

    // OnePage Scrolling
    $('a.nav-link[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var toHash = $(this.hash),
                toHashN = this.hash.slice(1) ? $("[name=" + this.hash.slice(1) + "]") : false,
                nbar = wNow >= 992 ? $navbar.height() - 1 : 0;

            toHash = toHash.length ? toHash : toHashN;
            if (toHash.length) {
                $("html, body").animate(
                    {
                        scrollTop: toHash.offset().top - nbar,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Ajax Form Submission
    var contactForm = $("#contactForm"),
        formReturn = $(".formReturn");
    contactForm.submit(function (event) {
        event.preventDefault(); //prevent default action
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission
        $.ajax({
            url: post_url,
            type: request_method,
            data: form_data,
        }).done(function (response) {
            var returnClass = response.result === "error" ? "alert-danger" : "alert-success";
            formReturn
                .removeClass("alert-danger alert-success")
                .addClass("alert " + returnClass)
                .html(response.message)
                .slideDown(400);
            if (response.result !== "error") {
                contactForm.find("input[type=text], input[type=email],  textarea").val("");
            }
        });
    });

    // Ajax Mailchimp Subscribe
    var subscribeForm = $("#subscribeForm"),
        subscribeReturn = $(".subscribeReturn");
    subscribeForm.submit(function (event) {
        event.preventDefault(); //prevent default action
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission
        $.ajax({
            type: subscribeForm.attr("method"),
            url: subscribeForm.attr("action"),
            data: subscribeForm.serialize(),
            cache: false,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            error: function (err) {
                alert("Could not connect to the registration server. Please try again later.");
            },
            success: function (data) {
                $("#subscribeButton").val("subscribe");
                if (data.result === "success") {
                    // Yeahhhh Success
                    console.log(data.msg);
                    //subscribeReturn.removeClass( 'text-danger' ).addClass('text-danger').html('Thank you for subscribing.').slideDown(400);
                    subscribeReturn.removeClass("text-success text-danger").addClass("text-success").html("Thank you for subscribing.");
                    $("#mce-EMAIL").val("");
                } else {
                    // Something went wrong, do something to notify the user.
                    console.log(data.msg);
                    subscribeReturn.html(data.msg.substring(4)).addClass("text-danger");
                }
            },
        });
    });

    // + to top btn
    var scrollTop = $(".scrollTop");
    $w.scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });
    $(scrollTop).click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
    // - to top btn

    // Count Down
    // var $count_token = $(".countdown .row");
    // if ($count_token.length > 0) {
    //     $count_token.each(function () {
    //         var date = new Date();
    //         var $self = $(this),
    //             datetime = new Date("2021-06-01T00:00:00.000+08:00");
    //         $self.countdown(datetime).on("update.countdown", function (event) {
    //             $(this).html(
    //                 event.strftime(
    //                     "" +
    //                         '<div class="col"> <div class="ico-time">%D <span>Days</span> </div> </div>  <div class="col"> <div class="ico-time">%H <span>Hours</span> </div> </div> <div class="col"> <div class="ico-time">%M <span>Minuts</span> </div> </div>  <div class="col"> <div class="ico-time">%S <span>Seconds</span> </div> </div>'
    //                 )
    //             );
    //             //$(this).html(event.strftime('' + '<div class="col"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">Days</span></div>' + '<div class="col"><span class="countdown-time">%H</span><span class="countdown-text">Hours</span></div>' + '<div class="col"><span class="countdown-time">%M</span><span class="countdown-text">Minutes</span></div>' + '<div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">Seconds</span></div>'));
    //         });
    //     });
    // }
    // Preloader
    var $preload = $("#preloader"),
        $loader = $(".loader");
    if ($preload.length > 0) {
        $w.on("load", function () {
            $loader.fadeOut(300);
            $preload.addClass("loaded");
            $preload.delay(100).fadeOut(300);
        });
    }
    // particlesJS
    var $particles_js = $("#particles-js");
    if ($particles_js.length > 0) {
        particlesJS(
            "particles-js",
            // Update your personal code.
            {
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#333eb1",
                    },
                    shape: {
                        type: "circle",
                        opacity: 1,
                        stroke: {
                            width: 0,
                            color: "#78e5de",
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100,
                        },
                    },
                    opacity: {
                        value: 0.3,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.12,
                            sync: false,
                        },
                    },
                    size: {
                        value: 6,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.08,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#2b56f5",
                        opacity: 0.5,
                        width: 1.3,
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }
            // Stop here.
        );
    }

    $(".switchCtrl").click(function (e) {
        e.preventDefault();
        $(".switchCtrl").parent(".styleSwitcher").toggleClass("open");
    });
})(jQuery);
