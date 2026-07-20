const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("mobileOverlay");

document.getElementById("menuToggle").onclick = () => {
    menu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
};

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

document.getElementById("closeMenu").onclick = closeMenu;

overlay.onclick = closeMenu;

var swiper = new Swiper('.mySwiper-slider', {
        spaceBetween: 30,
        centeredSlides: true,
		loop: true,
		effect: 'fade',
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        // remove active
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        // add active
        this.classList.add("active");
        document.getElementById(this.dataset.tab).classList.add("active");
    });
});


// Sub Tabs (Packages)
document.querySelectorAll(".num-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        let parent = this.closest(".tab-content");

        // remove active inside current tab only
        parent.querySelectorAll(".num-btn").forEach(b => b.classList.remove("active"));
        parent.querySelectorAll(".package-box").forEach(p => p.classList.remove("active"));

        // activate selected
        this.classList.add("active");
        parent.querySelector("#" + this.dataset.package).classList.add("active");
    });
});

jQuery(function ($) {
    'use strict';
	
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});
	
	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: false,
		autoplay: false,
		items: 1,
		navText: [
			"<i class='flaticon-left-arrow-1'></i>",
			"<i class='flaticon-next'></i>"
		]
	});
	$(".home-slides").on("translate.owl.carousel", function(){
		$(".main-slides-content .sub-title").removeClass("animated fadeInDown").css("opacity", "0");
		$(".main-slides-content h1").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-slides-content p").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-slides-content .slides-btn .default-btn").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-slides-content .slides-btn .optional-btn").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0");
		$(".main-slides-content .slides-btn .checkup-content").removeClass("animated animate__animated animate__fadeInUp").css("opacity", "0");
	});
	$(".home-slides").on("translated.owl.carousel", function(){
		$(".main-slides-content .sub-title").addClass("animated fadeInDown").css("opacity", "1");
		$(".main-slides-content h1").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-slides-content p").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-slides-content .slides-btn .default-btn").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-slides-content .slides-btn .optional-btn").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1");
		$(".main-slides-content .slides-btn .checkup-content").addClass("animated animate__animated animate__fadeInUp").css("opacity", "1");
	});

	// Home Eye Care Slides JS New Demo
	$('.eye-care-slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		autoplayHoverPause: false,
		navText: [
			"<i class='flaticon-left-arrow-1'></i>",
			"<i class='flaticon-next'></i>"
		]
	});

	// Review Slides
	$('.review-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});
	
	// Tabs
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li a').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// FAQ Accordion
	$('.accordion').find('.accordion-title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} 
		else {
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub() {
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub() {
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg) {
		if(valid){
			var msgClasses = "validation-success";
		} 
		else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}

	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", 
		callback: callbackFunction
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 13, 2025 18:00:00 PDT");
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Nice Select JS
	$('select').niceSelect();
	
	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	
	// Go to Top
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
	
	// WOW JS
	$(window).on ('load', function (){
		if ($(".wow").length) { 
			var wow = new WOW({
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       20,          // distance to the element when triggering the animation (default is 0)
			mobile:       true, // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});
	
	// Preloader
	$(window).on('load', function () {
		$('.preloader').fadeOut();
	});

	// New Three Demo JS

	// Dental Tourism Services JS
	$('.dental-tourism-services-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 4,
			}
		}
	});

	// Dental Tourism Dentist JS
	$('.dental-tourism-dentist-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Dental Tourism Review JS
	$('.dental-tourism-review-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 2,
			}
		}
	});

	// Skin Care Review JS
	$('.skin-care-review-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Skin Care Before and After JS
	$('.skin-care-before-after-slides').owlCarousel({
		stagePadding: 200,
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		items: 1,
		lazyLoad: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive:{
			0:{
				items: 1,
				stagePadding: 60
			},
			600:{
				items:1,
				stagePadding: 100
			},
			1000:{
				items: 1,
				stagePadding: 200
			},
			1200:{
				items: 1,
				stagePadding: 250
			},
			1400:{
				items: 1,
				stagePadding: 300
			},
			1600:{
				items: 1,
				stagePadding: 350
			},
			1800:{
				items:1,
				stagePadding: 400
			}
		}
	});

	// Skin Care Partner Slides
	$('.skin-care-partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			1200: {
				items: 5,
			}
		}
	});

	// Skin Care Services Slides
	$('.eye-care-services-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Eye Care Team JS
	$('.eye-care-team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,

		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Eye Care Review JS
	$('.eye-care-review-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,
		items: 1,
	});
	try {
		$("#country_selector").countrySelect({
			preferredCountries: ['ca', 'gb', 'us']
		});
	} catch (err) {}

	// Covid Tracker JS
	$('.covid-tracker-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Covid Testimonials JS
	$('.covid-testimonials-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		items: 1,
	});
	$('.covid-testimonials-wrap-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Covid Blog JS
	$('.covid-blog-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Covid Doctors JS
	$('.covid-doctors-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	/* End "Covid 19 Vaccination Center Demo JS" */


	/* Start "Hospital Website Demo JS" */

	// Hospital Services JS
	$('.hospital-services-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 4,
			}
		}
	});

	// Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	// Hospital Team JS
	$('.hospital-team-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Hospital Testimonials JS
	$('.hospital-testimonials-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 35,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 2,
			}
		}
	});
	$('.hospital-testimonials-wrap-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 35,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 2,
			}
		}
	});

	/* End "Hospital Website Demo JS" */


	/* Start "Emergency & Trauma Care Demo JS" & "Orthopedic Care Demo JS" */

	// ETC Testimonials Slides JS
	$('.etc-testimonials-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		items: 1,
	});

	// OC Testimonial JS
	$('.oc-testimonials-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 195,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 2,
			}
		}
	});

	// OC Partner Slides
	$('.oc-partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,

		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1200: {
				items: 5,
			}
		}
	});

	/* End "Emergency & Trauma Care Demo JS" & "Orthopedic Care Demo JS" */


	/* Start "Research & Teaching Hospitals", "Telemedicine & Virtual Care" & "Rehabilitation Centers" Demo Style CSS
	==============================================================*/

	// RTH Testimonial Slides JS
	$('.rth-testimonial-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
	});

	// RTH Blog Slides
	$('.rth-blog-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});
	
	// TVC Testimonial Slides JS
	$('.tvc-testimonial-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 25,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
	});

	// Rehabilitation Center Slider JS
    var swiper = new Swiper(".rehabilitation-center-slider-thumb", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".rehabilitation-center-slider", {
        loop: true,
        spaceBetween: 25,
        effect: "fade",
        speed: 1200,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: swiper,
        },
		navigation: {
            prevEl: ".rehabilitation-center-slider-button-prev",
            nextEl: ".rehabilitation-center-slider-button-next",
        },
    });

	// Hover JS
    try {
        var elements = document.querySelectorAll("[id^='rc-offer-element']");
            elements.forEach(function(element) {
            element.addEventListener("mouseover", function() {
                elements.forEach(function(el) {
                el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });
    } catch (err) {}

	/* End "Research & Teaching Hospitals", "Telemedicine & Virtual Care" & "Rehabilitation Centers" Demo Style CSS
	==============================================================*/

	/* Start "Maternity Clinic" & "Cardiac Care Clinic" CSS
	==============================================================*/

	// MC Services Slider JS
	var SwiperTraveler = new Swiper(".mc-services-slider", {
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".services-prev",
            nextEl: ".services-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
			1600: {
                slidesPerView: 4
            },
        }
    });

	// MC Blog Slider JS
	var SwiperTraveler = new Swiper(".mc-blog-slider", {
        loop: true,
        spaceBetween: 25,
        autoHeight: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });

	/* End "Maternity Clinic" & "Cardiac Care Clinic" CSS
	==============================================================*/

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('grin_theme', themeName);
	document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('grin_theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}
// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('grin_theme') === 'theme-dark') {
		setTheme('theme-dark');
		document.getElementById('slider').checked = false;
	} else {
		setTheme('theme-light');
	document.getElementById('slider').checked = true;
	}
})();
