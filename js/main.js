$(document).ready(function(){
	$('#burger-btn').click(function(){
		$(this).toggleClass('open');
		$(".header__menu").slideToggle("fast");
		$("body").toggleClass('fixed');
	});
	$('.switch').click(function(){
		$(this).toggleClass('active');
	});

	$( ".city-dot" ).each(function( index ) {
		$( this ).on( "click", function() {
			$( ".city-dot.active" ).removeClass("active");
			$(this).addClass("active");
			var city = $(this).attr("val");
			console.log(city);
			$(".map-info-item.active").hide().removeClass("active");
			$(".map-info-item[val='"+ city +"']").fadeIn("fast").addClass("active");
		});
	});

	$( ".our-clients__tab" ).each(function( index ) {
		$( this ).on( "click", function() {
			$( ".our-clients__tab" ).removeClass("active");
			$( this ).addClass("active");

			var table = $( this ).attr("val");
			console.log(table);
			$( ".our-clients__table" ).removeClass("active");
			$( "."+table ).addClass("active");
		});
	});

	$( ".project-data .tabs__item" ).each(function( index ) {
		$( this ).on( "click", function(e) {
			e.preventDefault();
			$( ".project-data .tabs__item" ).removeClass("active");
			$( this ).addClass("active");
			$( ".project-data__content").removeClass("active");
			$( ".content-"+ index).addClass("active");
		});
	});

	$( ".tabs-content .tabs-content__tab" ).each(function( index ) {
		$( this ).on( "click", function(e) {
			e.preventDefault();
			console.log(index);
			$( ".tabs-content .tabs-content__tab" ).removeClass("active");
			$( this ).addClass("active");
			$( ".tabs-content .tabs-content__content").removeClass("active");
			$( ".tabs-content .tabs-content__content.tab-content-"+ index).addClass("active");
		});
	});

	const swiperCompanies = new Swiper('.companies__slider', {
		loop: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
	    320: {
	      slidesPerView: 3,
	      spaceBetween: 24
	    },
	    650: {
	      slidesPerView: 4,
	      spaceBetween: 0
	    },
	    768: {
	      slidesPerView: 4,
	      spaceBetween: 0
	    },
	    1024: {
	      slidesPerView: 6,
	      spaceBetween: 0
	    }
	  }
	});

	const swiperNews = new Swiper('.last-news__slider', {
		loop: true,
		slidesPerView: 3,
		centeredSlides: true,
		spaceBetween: 40,
		navigation: {
			nextEl: '.last-news__next',
			prevEl: '.last-news__prev',
		},
		breakpoints: {
	    320: {
	      slidesPerView: 1,
	      spaceBetween: 24
	    },
	    768: {
	      slidesPerView: 3,
	      spaceBetween: 40
	    }
	  }
	});

	var swiperTabs = new Swiper('.tabs-slider', {
		loop: false,
		slidesPerView: "auto",
		spaceBetween: 28,
		breakpoints: {
	    320: {
	      spaceBetween: 12,
	    },
	    768: {
	      spaceBetween: 28,
	    }
	  }
	});
	$( ".tabs__item" ).each(function( index ) {
		if($( ".tabs-slider" ).length){
			if($(this).hasClass("active")){
				swiperTabs.slideTo(index, 1, false)
			}
		}
	});

	var swiperCertificates = new Swiper('.certificates-slider-1', {
		loop: false,
		slidesPerView: "auto",
		spaceBetween: 16,
		breakpoints: {
	    320: {
	      spaceBetween: 12,
	    },
	    768: {
	      spaceBetween: 16,
	    }
	  },
	  navigation: {
			nextEl: '.certificates-slider__next-1',
			prevEl: '.certificates-slider__prev-1',
		}
	});

	var swiperPhases = new Swiper('.certificates-slider-2', {
		loop: false,
		slidesPerView: "auto",
		spaceBetween: 16,
		breakpoints: {
	    320: {
	      spaceBetween: 12,
	      slidesPerView: 1,
	      autoHeight: true,
	    },
	    768: {
	      spaceBetween: 16,
	      slidesPerView: "auto",
	      autoHeight: false,
	    }
	  },
	  navigation: {
			nextEl: '.certificates-slider__next-2',
			prevEl: '.certificates-slider__prev-2',
		},
		pagination: {
			el: ".phases-pagination",
			clickable: true,
		},
	});

	var swiperContracts = new Swiper('.contracts__slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 16,
		autoHeight: true,
		navigation: {
			nextEl: '.contracts-slider__next',
			prevEl: '.contracts-slider__prev',
		}
	});

	var swiperGallery = new Swiper('.mini-gallery-slider__slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 16,
		autoHeight: true,
		pagination: {
			el: ".mini-gallery-pagination",
			clickable: true,
		},
	});



	var init = false;
	var swiperMap;
	function swiperCard() {
	  if (window.innerWidth <= 768) {
	    if (!init) {
	      init = true;
	      swiperMap = new Swiper(".map-info-slider", {
	        slidesPerView: 1,
	        spaceBetween: 0,
	        autoHeight: true,
	        pagination: {
	          el: ".map-info-pagination",
	          clickable: true,
	        },
	        on: {
		      slideChange: function (swiper) {
		        console.log('CurrentActive:', swiper.realIndex);
		        $( ".map-info-item" ).each(function( index ) {
		        	if(index == swiper.realIndex){
		        		var city = $(this).attr("val");
		        		$(".city-dot.active").removeClass("active");
						$(".city-dot[val='"+ city +"']").addClass("active");
		        	}
		        });
		      }
		    }
	      });
	    }
	  } else if (init) {
	    swiperMap.destroy();
	    init = false;
	  }
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);

	AOS.init();
});