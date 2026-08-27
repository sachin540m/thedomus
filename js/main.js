function videoHeigh() {
    let placeholderBanner = jQuery('.placeholderBannerImg').height();
    jQuery('.spotlightSliderDiv .swiper-slide .iframeDiv').css({
        'height': placeholderBanner
    })
};
jQuery(window).on("resize", function () {
    setTimeout(() => {
        videoHeigh();
    }, 10);
});
jQuery(document).ready(function () {

    var wv = jQuery(window).width(),
        wh = jQuery(window).height();


    setTimeout(() => {
        jQuery('.setGridAuto .setGridDiv').each(function () {
            var thisLength = jQuery(this).find('.gridCol').length;
            if (thisLength == 4 || thisLength == 7 || thisLength == 10) {
                jQuery(this).addClass('lastBig');
            } else if (thisLength == 5 || thisLength == 8 || thisLength == 11) {
                jQuery(this).addClass('lastTwoBig');
            } else {

            }
        });
        videoHeigh();

    }, 10);



    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = jQuery('header').outerHeight();


    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
        if (wv > 0) {
            if (jQuery('.servicesSec .aos-init').hasClass('aos-animate')) {

                jQuery('.servicesSec ul li:first-child').addClass('active');
                setTimeout(() => {
                    jQuery('.servicesSec .aos-init').addClass('removeAnimation');
                }, 2000);

            } else {
                jQuery('.servicesSec ul li:first-child').removeClass('active');
                jQuery('.servicesSec .aos-init').removeClass('removeAnimation');
            }
            if (jQuery('.servicesSec .aos-init').hasClass('removeAnimation')) {
                jQuery('.servicesSec ul li:first-child').removeClass('active');
            }
        }
    }, 350);

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > 50) {
            jQuery('html').addClass('solid');
        } else {
            jQuery('html').removeClass('solid');
        }

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            jQuery('html').addClass('nav-up');
        } else {

            // Scroll Up
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('html').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }

    jQuery(document).on('click', 'header .mainHeader .linksDiv>ul>li.innerMenu>a', function () {
        if (jQuery(this).parent('li').hasClass('active')) {
            jQuery('html').removeClass('menuOpen overflowHidden');
            jQuery(this).parent('li').removeClass('active');
            jQuery(this).next('.innerMenuDiv').slideUp();

        } else {
            jQuery('html').addClass('menuOpen overflowHidden');
            jQuery(this).parents('.linksDiv').find('li').removeClass('active');
            jQuery(this).parent('li').addClass('active');
            jQuery(this).parents('.linksDiv').find('.innerMenuDiv').slideUp();
            jQuery(this).next('.innerMenuDiv').slideDown();
        }
    });
    jQuery(document).on('click', 'header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu', function () {
        jQuery('html').removeClass('menuOpen mobSearchOpen overflowHidden');
        jQuery('.linksDiv li').removeClass('active');
        jQuery('.linksDiv .innerMenuDiv').slideUp();
    });
    jQuery(document).on('click', function (e) {
        var container = jQuery("header");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if (jQuery('html').hasClass('menuOpen')) {
                jQuery('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
            }
        }
    });

    if (wv < 991) {
        jQuery(document).on('click', 'header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .linksListWithSearch .innerLinksUl h6', function () {
            if (jQuery(this).parent('.innerLinksUl').hasClass('active')) {
                jQuery(this).parent('.innerLinksUl').removeClass('active');
                jQuery(this).next('ul').slideUp();
            } else {
                jQuery(this).parents('.innerLinksList').find('.innerLinksUl').removeClass('active');
                jQuery(this).parent('.innerLinksUl').addClass('active');
                jQuery(this).parents('.innerLinksList').find('.innerLinksUl ul').slideUp();
                jQuery(this).next('ul').slideDown();
            }
        });
        jQuery(document).on('click', 'header .mainHeader .logoDiv .mobMenu .burgerMenu', function () {
            if (jQuery('html').hasClass('mobMenuOpen')) {
                jQuery('html').removeClass('mobMenuOpen overflowHidden mobSearchOpen');
                jQuery('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
            } else {
                jQuery('html').addClass('mobMenuOpen overflowHidden mobSearchOpen');
            }
        });
        jQuery(document).on('click', 'header .mainHeader .logoDiv .mobMenu .mobSearch', function () {
            if (jQuery('html').hasClass('mobSearchOpen')) {
                jQuery('html').removeClass('mobSearchOpen overflowHidden mobMenuOpen');
                jQuery('header .mainHeader .linksDiv>ul>li .innerMenuDiv .innerLinksList .closedMenu').click();
            } else {
                jQuery('html').addClass('mobSearchOpen overflowHidden');
            }
        });
        jQuery(document).on('click', '.projectFilterDiv .mobFilter', function () {
            jQuery('html').addClass('mobFilterOpen overflowHidden');
            setTimeout(() => {
                jQuery('.projectFilterDiv .listDiv .dropDownDiv.mobActive').addClass('active');
            }, 100);

        });
        jQuery(document).on('click', '.projectFilterDiv .filterListDiv .closedFilter', function () {
            jQuery('html').removeClass('mobFilterOpen overflowHidden');
        });
    } else {


    }

    //jQuery(document).on('click', 'footer .mainFooterMenu .downArrow', function () { {Oldfunction}
	
    jQuery(document).on('click', 'footer .mainFooterMenu .downArrowNew', function () {
        jQuery(this).toggleClass('active');
        jQuery('footer .hiddenLinks').slideToggle();
        jQuery('html, body').animate({
            scrollTop: jQuery("#hiddenLinks").offset().top
        }, 2000);
    });

    jQuery('.expandContent').each(function () {
        var str;
        var expandContent = jQuery(this).text();
        if (jQuery(this).attr('data-limit')) {
            str = expandContent.indexOf(' ', jQuery(this).attr('data-limit')) + 1;
        } else {
            str = expandContent.indexOf(' ', 355) + 1;
        }
        if (str >= 355 || str >= jQuery(this).attr('data-limit')) {

            jQuery(this).text('').append(expandContent.substr(0, str) + "<span class='hiddenText'>" + expandContent.substr(str) + "</span><span class='expandBtn'></span>");
        }
    });


    jQuery(document).on('click', '.expandContent .expandBtn', function () {
        if (jQuery(this).parents('.expandContent').hasClass('active')) {
            jQuery(this).parents('.expandContent').removeClass('active');
            jQuery(this).parents('.expandContent').find('.hiddenText').slideUp();
        } else {
            jQuery(this).parents('.expandContent').addClass('active');
            jQuery(this).parents('.expandContent').find('.hiddenText').slideDown();
        }
    });


    jQuery(document).on('click', '.normalDropDown span', function () {
        if (jQuery(this).parents('.normalDropDown').hasClass('active')) {
            if (wv < 767) {
                if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                } else {
                    jQuery(this).parents('.normalDropDown').removeClass('active');
                }
            } else {
                jQuery(this).parents('.normalDropDown').removeClass('active');
            }

        }
        else {
            jQuery('.dropDownDiv').removeClass('active');
            jQuery(this).parents('.normalDropDown').addClass('active');
        }
    });
	
	jQuery(document).on('click', '.maindropdown span', function () {
		
        if (jQuery(this).parents('.maindropdown').hasClass('active')) {
			
            if (wv < 767) {
                if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                } else {
                    jQuery(this).parents('.maindropdown').removeClass('active');
                     
                    jQuery('.checkDropDown').removeClass('active');
					
                }
            } 

        }
        else {
          
            jQuery(this).parents('.maindropdown').addClass('active');
            jQuery('.checkDropDown').removeClass('active');
            jQuery('.normalDropDown').removeClass('active');
        }
    });
	
	  jQuery(document).on('click', '.maindropdown .innerDropDown span', function () {
    if (jQuery(this).parents('.innerDropDown').hasClass('active')) {
            if (wv < 320) {
                if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                } else {
                    jQuery(this).parents('.innerDropDown').removeClass('active');
                }
            } else {
                jQuery(this).parents('.innerDropDown').removeClass('active');
            }

        }
        else {
           
            jQuery(this).parents('.innerDropDown').addClass('active');
        }
});
	
	jQuery(document).on('click', '.innerDropDown li label', function () {
        if (wv < 320) {
            if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                jQuery(this).parents('.innerDropDown').find('li').removeClass('active');
                jQuery(this).parents('li').addClass('active');
            } else {
                jQuery(this).parents('.innerDropDown').find('li').removeClass('active');
                jQuery(this).parents('li').addClass('active');
                jQuery(this).parents('.innerDropDown').removeClass('active');
                jQuery(this).parents('.innerDropDown').find('span').text(jQuery(this).text());
                if (jQuery(this).parents('.formControls').length) {
                    jQuery(this).parents('.formControls').addClass('active');
                }
            }
        } else {
            jQuery(this).parents('.innerDropDown').find('li').removeClass('active');
            jQuery(this).parents('li').addClass('active');
            jQuery(this).parents('.innerDropDown').removeClass('active');
            jQuery(this).parents('.innerDropDown').find('span').text(jQuery(this).text());
            if (jQuery(this).parents('.formControls').length) {
                jQuery(this).parents('.formControls').addClass('active');
            }
        }

    });
	
		  jQuery(document).on('click', '.maindropdown .innerDropDown-max span', function () {
    if (jQuery(this).parents('.innerDropDown-max').hasClass('active')) {
            if (wv < 320) {
                if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                } else {
                    jQuery(this).parents('.innerDropDown-max').removeClass('active');
                }
            } else {
                jQuery(this).parents('.innerDropDown-max').removeClass('active');
            }

        }
        else {
           
            jQuery(this).parents('.innerDropDown-max').addClass('active');
        }
});
	
	jQuery(document).on('click', '.innerDropDown-max li label', function () {
        if (wv < 320) {
            if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                jQuery(this).parents('.innerDropDown-max').find('li').removeClass('active');
                jQuery(this).parents('li').addClass('active');
            } else {
                jQuery(this).parents('.innerDropDown-max').find('li').removeClass('active');
                jQuery(this).parents('li').addClass('active');
                jQuery(this).parents('.innerDropDown-max').removeClass('active');
                jQuery(this).parents('.innerDropDown-max').find('span').text(jQuery(this).text());
                if (jQuery(this).parents('.formControls').length) {
                    jQuery(this).parents('.formControls').addClass('active');
                }
            }
        } else {
            jQuery(this).parents('.innerDropDown-max').find('li').removeClass('active');
            jQuery(this).parents('li').addClass('active');
            jQuery(this).parents('.innerDropDown-max').removeClass('active');
            jQuery(this).parents('.innerDropDown-max').find('span').text(jQuery(this).text());
            if (jQuery(this).parents('.formControls').length) {
                jQuery(this).parents('.formControls').addClass('active');
            }
        }

    });
	

    jQuery(document).on('click', '.normalDropDown li label', function () {
        if (wv < 767) {
            if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                jQuery(this).parents('.normalDropDown').find('li').removeClass('active');
                jQuery(this).parents('li').addClass('active');
            } else {
                jQuery(this).parents('.normalDropDown').find('li').removeClass('active');
                jQuery(this).parents('li').addClass('active');
                jQuery(this).parents('.normalDropDown').removeClass('active');
                jQuery(this).parents('.normalDropDown').find('span').text(jQuery(this).text());
                if (jQuery(this).parents('.formControls').length) {
                    jQuery(this).parents('.formControls').addClass('active');
                }
            }
        } else {
            jQuery(this).parents('.normalDropDown').find('li').removeClass('active');
            jQuery(this).parents('li').addClass('active');
            jQuery(this).parents('.normalDropDown').removeClass('active');
            jQuery(this).parents('.normalDropDown').find('span').text(jQuery(this).text());
            if (jQuery(this).parents('.formControls').length) {
                jQuery(this).parents('.formControls').addClass('active');
            }
        }

    });

    jQuery(document).on('click', '.checkDropDown span', function () {
        if (jQuery(this).parents('.checkDropDown').hasClass('active')) {
            if (wv < 767) {
                if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                } else {
                    jQuery(this).parents('.normalDropDown').removeClass('active');
                    jQuery(this).parents('.checkDropDown').toggleClass('active');
                }
            } else {
                jQuery('.dropDownDiv').removeClass('active');
                jQuery(this).parents('.normalDropDown').removeClass('active');
            }
        }
        else {
            jQuery('.dropDownDiv').removeClass('active');
            jQuery(this).parents('.checkDropDown').toggleClass('active');
        }
    });

    jQuery(document).on('click', '.checkDropDown li label', function () {
        var jQuerythis = jQuery(this);
		if(jQuerythis.parents('.checkDropDown').find('span').attr('data-placeholder') == 'Select City'){
			//# console.log(jQuerythis.siblings('input[type="checkbox"]').attr('id'));
			//console.log(jQuerythis.siblings('input[type="checkbox"]').prop('checked')); // Check the checkbox);
			
			jQuerythis.parents('li').removeClass('active');
			//jQuerythis.parents('li').addClass('active');
			//jQuerythis.parents('li').toggleClass('active');
			
			jQuerythis.siblings('input[type="checkbox"]').not(this).prop('checked', false);
			
			//jQuerythis.parent('input').not(this).prop('checked', false);
			jQuerythis.parents('.checkDropDown').find('span').text(jQuerythis.siblings('input[type="checkbox"]').attr('id'));		
		}else{
			jQuerythis.parents('li').toggleClass('active');
			if(jQuerythis.parents('.checkDropDown').find('span').attr('data-placeholder') == "Bedroom"){
				jQuerythis.parents('.checkDropDown').find('span').text(jQuerythis.parents('.checkDropDown ').find('li.active').length+' Selected');		
			}else{
				jQuerythis.parents('.checkDropDown').find('span').text(jQuerythis.parents('.checkDropDown ').find('li.active').length+' '+jQuerythis.parents('.checkDropDown').find('span').attr('data-placeholder'));
			}
		}																						
    });


    jQuery(document).on('click', '.radiochek span', function () {
        if (jQuery(this).parents('.checkDropDown').hasClass('active')) {
            if (wv < 767) {
                if (jQuery(this).parents('.projectFilterDiv').find('.mobFilter').length > 0) {
                } else {
                    jQuery(this).parents('.radiochek').removeClass('active');
                }
            } else {
                jQuery(this).parents('.radiochek').removeClass('active');
            }
        }
        else {
            jQuery('.dropDownDiv').removeClass('active');
            jQuery(this).parents('.radiochek').addClass('active');
        }
    });

   


    jQuery('.otpInput').on('keyup', function () {
        if (jQuery(this).val().length == 4) {
            jQuery('.verifyBtn').focus();
        }
    });



    jQuery(document).on('click', function (e) {
        var container = jQuery(".dropDownDiv");


        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if (wv < 767) {

            } else {
                if (jQuery('.dropDownDiv').hasClass('active')) {
                    jQuery('.dropDownDiv').removeClass('active');
                }
            }
        }
    });

    jQuery(document).on('click', '.filterListDiv .clearBtnDiv .clearBtn', function (e) {
        jQuery(this).parents('.filterListDiv').find('.dropDownDiv span').each(function () {
            jQuery(this).text(jQuery(this).attr('data-placeholder'));
            jQuery(this).next('.dropList').find('li').removeClass('active').find('input').prop('checked', false);
        });
        jQuery(this).addClass('disabled');
    });
    jQuery('.filterListDiv .dropDownDiv .dropList ul li').on('click', function () {
        jQuery(this).parents('.filterListDiv').find('.disabled').removeClass('disabled');
    });




    jQuery(document).on('keyup', '.dropDownDiv .dropList .searchListInput', function () {
        var jQuerythis = jQuery(this);
        setTimeout(() => {
            var searchVal = (jQuerythis.val()).toLowerCase();;
            console.log(searchVal);
            jQuerythis.next('.scrollVerticalSlider').find('li').css('display', 'none');
            jQuerythis.next('.scrollVerticalSlider').find('li').each(function () {
                var jQuerythisLi = jQuery(this);
                if (jQuerythisLi.find('label').attr('data-title').toLowerCase().indexOf(searchVal) != -1) {
                    jQuerythisLi.css('display', 'block');
                }
            });

        }, 100);
    });

	if (jQuery(".imgLeftTextSliderActive").length > 0) {
    var imgLeftTextSliderrVar = new Swiper(".imgLeftTextSliderActive", {
        direction: "horizontal",
        slidesPerView: "1",
        autoHeight: true,
        speed: 1000,
        navigation: {
            nextEl: '.imgLeftTextSliderActive .swiper-button-next',
            prevEl: '.imgLeftTextSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".imgLeftTextSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
    });
	}
	
	if (jQuery(".amenitieSliderActive").length > 0) {
    var amenitieSwiperSliderrVar = new Swiper(".amenitieSliderActive", {
        direction: "horizontal",
        slidesPerView: "1",
        speed: 1000,
        navigation: {
            nextEl: '.amenitieSliderActive .swiper-button-next',
            prevEl: '.amenitieSliderActive .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-custom span',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return current + '/' + total;
            }
        },
    });
	}
	
	// active Tab: Quarter 1, 2, 3, 4 
	if (jQuery(".tabSwiperSlider").length > 0) {
		//if (window.location.href === 'https://www.thedomus.in/investor-relations/financials') {
         if (window.location.pathname === '/investor-relations/financials') {
			var tabSwiperSliderrVar;
			setTimeout(() => {
			tabSwiperSliderrVar = new Swiper(".tabSwiperSlider", {
				initialSlide: 0, // Active tabContent Bm/>
				direction: "horizontal",
				slidesPerView: "1",
				effect: "fade",
				loop: false,
				autoHeight: true,
				allowTouchMove: false,
				watchOverflow: true,
				observer: true,
				observeParents: true,
				resizeObserver: true,
			});
			}, 10);
		}
		else{
			var tabSwiperSliderrVar;
			setTimeout(() => {
				tabSwiperSliderrVar = new Swiper(".tabSwiperSlider", {
					//initialSlide: 1,
					direction: "horizontal",
					slidesPerView: "1",
					effect: "fade",
					loop: false,
					autoHeight: true,
					allowTouchMove: false,
					watchOverflow: true,
					observer: true,
					observeParents: true,
					resizeObserver: true,
				});
			}, 10);
		}
	}

    if (jQuery(".tabContent").hasClass('tabSwiperSlider')) {
        jQuery(document).on('click', '.tabWrapper .tabHeading li a', function (e) {
            var jQuerythis = jQuery(this);
            jQuerythis.parents('.tabHeading').find('a').removeClass('active');
            jQuerythis.addClass('active');
            tabSwiperSliderrVar.slideTo(jQuerythis.attr('data-slide'), 1);

        });
    }




	if (jQuery(".planSliderActive").length > 0) {
		var planSliderVar = new Swiper(".planSliderActive", {
			direction: "horizontal",
			slidesPerView: "auto",
			speed: 1000,
			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: '.planSliderActive .swiper-button-next',
				prevEl: '.planSliderActive .swiper-button-prev',
			},
			pagination: {
				el: ".planSliderActive .swiper-pagination",
				dynamicBullets: true,
			},

		});
	}	

	if (jQuery(".lightBoxSliderActive").length > 0) {
    var lightBoxSliderVar = new Swiper(".lightBoxSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.imageLightBoxWrapper .swiper-button-next',
            prevEl: '.imageLightBoxWrapper .swiper-button-prev',
        },
        pagination: {
            el: ".imageLightBoxWrapper .swiper-pagination",
            type: "fraction",
        }, on: {
            slideChange: function () {
                if (jQuery('.lightBoxSliderActive iframe').length > 0) {
                    jQuery('.lightBoxSliderActive .swiper-slide iframe').attr('src', '');
                    setTimeout(() => {
                        jQuery('.lightBoxSliderActive .swiper-slide-active iframe').attr('src', jQuery('.lightBoxSliderActive .swiper-slide-active iframe').attr('data-src'));
                    }, 100);
                }
            },
        }
    });
	}


    var zoomSliderVar = new Swiper(".zoomSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        zoom: true,
    });
    var counterZoom = 1;
    var counterZoomOut = 1;

    jQuery(document).on('click', '.zoomBtnDiv .zoomIn', function () {
        if (counterZoom < 3) {
            counterZoom = counterZoom + 0.5;
            zoomSliderVar.zoom.in(counterZoom);
        }
        counterZoomOut = counterZoom;
    });


    jQuery(document).on('click', '.zoomBtnDiv .zoomOut', function () {
        if (counterZoomOut >= 1.5) {
            counterZoomOut = counterZoomOut - 0.5;
            zoomSliderVar.zoom.in(counterZoomOut);
        }
        counterZoom = 1;

    });

    jQuery(document).on('click', '.zoomImgPopupClick', function () {
        jQuery('html').addClass('zoomPopupOpen overflowHidden');
    });
    jQuery(document).on('click', '.zoomPopupWrapper .closed', function () {
        jQuery('html').removeClass('zoomPopupOpen overflowHidden');
    });



    jQuery(document).on('click', '.enquireForm', function () {
        jQuery('html').addClass('enquirePopupOpen overflowHidden');
    });
    jQuery(document).on('click', '.enquirePopupWrapper  .popupContent .closed ', function () {
        jQuery('html').removeClass('enquirePopupOpen overflowHidden');
        jQuery(this).parents('.enquirePopupWrapper').removeClass('active');

    });
    // jQuery(document).on('click', '.enquirePopupWrapper .btnClick', function () {
    //     jQuery(this).parents('.enquirePopupWrapper').addClass('active');
    // });

    // jQuery(document).on('click', '.enquirePopupWrapper .prevArrowBtn', function () {
    //     jQuery(this).parents('.enquirePopupWrapper').removeClass('active');
    // });

    jQuery(document).on('click', '.imgPopupClick', function () {
        var jQuerythis = jQuery(this);
        jQuery('html').addClass('imgLightBoxOpen overflowHidden');

        // jQuery('.imagePopupWrapper .mainImg').attr('src', jQuery(this).attr('data-img'));

        if (jQuerythis.attr('data-popup-img')) {
            if (jQuerythis.parents('.onlyPopup').length > 0) {
                jQuerythis.parents('.onlyPopup').find('.imgPopupClick[data-popup-img]').each(function () {
                    jQuery('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><img src="' + jQuery(this).attr('data-popup-img') + '" alt="Banner" class="img-fluid"><p>' + jQuery(this).attr('data-title') + '</p> </div> </div > ')

                });
            } else {
                jQuery('.imgPopupClick[data-popup-img]').each(function () {

                    jQuery('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><img src="' + jQuery(this).attr('data-popup-img') + '" alt="Banner" class="img-fluid"><p>' + jQuery(this).attr('data-title') + '</p> </div> </div > ')

                });
            }

        } else if (jQuerythis.attr('data-popup-iframe').length > 0) {
            if (jQuerythis.parents('.onlyPopup').length > 0) {
                jQuerythis.parents('.onlyPopup').find('.imgPopupClick[data-popup-iframe]').each(function () {

                    jQuery('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><iframe data-src="' + jQuery(this).attr('data-popup-iframe') + '" alt="Banner" class="img-fluid" frameborder="0" allowfullscreen=""></iframe><p>' + jQuery(this).attr('data-title') + '</p> </div> </div > ')
                    console.log('false')

                });
            }
            else {
                jQuery('.imgPopupClick[data-popup-iframe]').each(function () {

                    jQuery('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper').append('<div class="swiper-slide"><div ><iframe data-src="' + jQuery(this).attr('data-popup-iframe') + '" alt="Banner" class="img-fluid" frameborder="0" allowfullscreen=""></iframe><p>' + jQuery(this).attr('data-title') + '</p> </div> </div > ')
                    console.log('false')

                });
            }
            setTimeout(() => {
                jQuery('.lightBoxSliderActive .swiper-slide-active iframe').attr('src', jQuery('.lightBoxSliderActive .swiper-slide-active iframe').attr('data-src'));
            }, 100);
        } else {

        }


        jQuery('.imageLightBoxWrapper .popupContent h5').text(jQuery('.projectTitle').text());
        lightBoxSliderVar.slideTo(jQuery(this).attr('data-click'), 0);
    });
    jQuery(document).on('click', '.imageLightBoxWrapper  .closed ', function () {
        jQuery('html').removeClass('imgLightBoxOpen overflowHidden');
        jQuery('.imageLightBoxWrapper .lightBoxSliderActive .swiper-wrapper .swiper-slide').remove();
    });
    // var bodScrollVerticalSliderVar;
    jQuery(document).on('click', '.bodDiv .bodCard', function () {
        jQuery('.bodWrapper .popupContent .bodImg').attr('src', jQuery(this).find('img').attr('src'));
        jQuery('.bodWrapper .popupContent .bodContent h5').text(jQuery(this).find('p').text());
        jQuery('.bodWrapper .popupContent .bodContent h6').text(jQuery(this).find('span').text());
        jQuery('.bodWrapper .popupContent .bodContent .descDiv p').text(jQuery(this).attr('data-desc'));
        jQuery('html').addClass('bodPopupOpen overflowHidden');
        // setTimeout(() => {
        //     bodScrollVerticalSliderVar = new Swiper(".bodScrollVerticalSlider", {
        //         direction: "vertical",
        //         slidesPerView: "auto",
        //         freeMode: true,
        //         scrollbar: {
        //             el: ".bodScrollVerticalSlider .swiper-scrollbar",
        //             draggable: true,
        //         },
        //         mousewheel: true,
        //     });
        // }, 10);

    });

    jQuery(document).on('click', '.bodWrapper .popupContent .closed ', function () {
        jQuery('html').removeClass('bodPopupOpen overflowHidden');
        jQuery('.bodWrapper .popupContent .bodImg').attr('src', '');
        jQuery('.bodWrapper .popupContent .bodContent h5').text('');
        jQuery('.bodWrapper .popupContent .bodContent h6').text('');
        jQuery('.bodWrapper .popupContent .bodContent .descDiv p').text('');
        // bodScrollVerticalSliderVar.destroy(true, true);
    });


    jQuery(document).on('.popupWrapper', 'click', function (e) {
        var container = jQuery(".popupWrapper .popupContent");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            jQuery('.popupWrapper .closed').click();
        }
    });


    jQuery(document).on('click', '.accordionMain .accordionHeading', function () {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery(this).next('.accordionContent').slideUp();
        } else {
            if (jQuery(this).parents('.accordionMain').hasClass('innerAccordionMain')) {
                jQuery(this).parents('.innerAccordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
                jQuery(this).addClass('active');
                jQuery(this).next('.accordionContent').slideDown();
            } else {
                jQuery(this).parents('.accordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
                jQuery(this).addClass('active');
                jQuery(this).next('.accordionContent').slideDown();
            }

        }
    });

    // jQuery(".accordionMain .accordionHeading").slice(0, 2).show();
    // jQuery(document).on('click', '.accordionMain .faqLoadMore .loadMore', function (e) {
    //     e.preventDefault();
    //     jQuery(".accordionMain .accordionHeading:hidden").slice(0, 1000).slideDown();
    //     if (jQuery(".accordionMain .accordionHeading:hidden").length == 0) {
    //         jQuery(this).text(jQuery(this).attr('data-less'));
    //         jQuery(this).removeClass('loadMore').addClass('loadLess');
    //     }
    // });
    // jQuery(document).on('click', '.accordionMain .faqLoadMore .loadLess', function (e) {
    //     e.preventDefault();
    //     jQuery(".accordionMain .accordionHeading").slice(2, 1000).slideUp();
    //     jQuery(this).parents('.accordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
    //     jQuery(this).text(jQuery(this).attr('data-more'));
    //     jQuery(this).removeClass('loadLess').addClass('loadMore');
    // });



    // jQuery(".priceListWrapper ul li").slice(0, 4).show();
    // jQuery(document).on('click', '.priceListWrapper  .loadMore', function (e) {
    //     e.preventDefault();
    //     jQuery(".priceListWrapper ul li:hidden").slice(0, 1000).slideDown();
    //     if (jQuery(".priceListWrapper ul li:hidden").length == 0) {
    //         jQuery(this).text(jQuery(this).attr('data-less'));
    //         jQuery(this).removeClass('loadMore').addClass('loadLess');
    //     }
    // });
    // jQuery(document).on('click', '.priceListWrapper  .loadLess', function (e) {
    //     e.preventDefault();
    //     jQuery(".priceListWrapper ul li").slice(4, 1000).slideUp();
    //     jQuery(this).text(jQuery(this).attr('data-more'));
    //     jQuery(this).removeClass('loadLess').addClass('loadMore');
    // });

    jQuery('.loadDataDiv').each(function () {
        if (wv > 767) {
            jQuery(this).find(".loadData").slice(0, jQuery(this).attr('data-slice')).show();
            if (jQuery(this).find(".loadData").length <= jQuery(this).attr('data-slice')) {
                jQuery(this).find('.loadMore').fadeOut();
            }
        } else {
            jQuery(this).find(".loadData").slice(0, jQuery(this).attr('data-mob-slice')).show();
            if (jQuery(this).find(".loadData").length <= jQuery(this).attr('data-mob-slice')) {
                jQuery(this).find('.loadMore').fadeOut();
            }
        }

    });
    jQuery(document).on('click', '.loadDataDiv  .loadMore', function (e) {
        e.preventDefault();
        var jQuerythis = jQuery(this);
        jQuerythis.parents('.loadDataDiv').find(".loadData:hidden").slice(0, 1000).slideDown();
        if (jQuerythis.parents('.loadDataDiv').find(".loadData:hidden").length == 0) {
            jQuerythis.text(jQuerythis.attr('data-less'));
            jQuerythis.removeClass('loadMore').addClass('loadLess');
        }

        setTimeout(() => {
            AOS.refresh();
            if (jQuerythis.parents('.tabSwiperSlider').length > 0) {
                jQuerythis.parents('.tabSwiperSlider').find('.swiper-wrapper').css('height', jQuerythis.parents('.swiper-slide-active').outerHeight());
            }

        }, 10);
    });
    jQuery(document).on('click', '.loadDataDiv  .loadLess', function (e) {
        e.preventDefault();
        var jQuerythis = jQuery(this);

        if (wv > 767) {
            jQuerythis.parents('.loadDataDiv').find(".loadData").slice(jQuerythis.parents('.loadDataDiv').attr('data-slice'), 1000).slideUp();
        } else {
            jQuerythis.parents('.loadDataDiv').find(".loadData").slice(jQuerythis.parents('.loadDataDiv').attr('data-mob-slice'), 1000).slideUp();
        }
        if (jQuery(this).parents('.accordionMain')) {
            jQuery(this).parents('.accordionMain').find('.accordionHeading').removeClass('active').next('.accordionContent').slideUp();
        }
        jQuerythis.text(jQuerythis.attr('data-more'));
        jQuerythis.removeClass('loadLess').addClass('loadMore');
        setTimeout(() => {
            AOS.refresh();
            if (jQuerythis.parents('.tabSwiperSlider').length > 0) {
                jQuerythis.parents('.tabSwiperSlider').find('.swiper-wrapper').css('height', jQuerythis.parents('.swiper-slide-active').outerHeight());
            }


        }, 500);
    });

    jQuery('.formControls').each(function () {

        var jQueryinput = jQuery(this).find('input');

        var jQueryspan = jQuery(this).find('.dropDownDiv span');

        // Check if jQueryinput exists and has a value

        var inputLength = jQueryinput.length > 0 ? jQueryinput.val().length : 0;

        // Check if jQueryspan exists and has text content

        var spanLength = jQueryspan.length > 0 ? jQueryspan.text().length : 0;

        // Check if either jQueryinput or jQueryspan has content

        if (inputLength > 0 || spanLength > 0) {

            jQuery(this).addClass('active');

        } else {

            jQuery(this).removeClass('active');

        }

    });

    jQuery('.formControls input').on('keypress', function () {
        if ((jQuery(this).val().length > 0)) {
            jQuery(this).parents('.formControls').addClass('active');
        } else {
            jQuery(this).parents('.formControls').removeClass('active');
        }
    });

    jQuery('.globalSearchDiv .searchDiv input').on('keyup', function () {
        var jQuerythis = jQuery(this);
        setTimeout(() => {
            if ((jQuerythis.val().length >= 1)) {
                jQuerythis.parents('.globalSearchDiv').find('.serachAutofillDiv').slideDown();
            } else {
                jQuerythis.parents('.globalSearchDiv').find('.serachAutofillDiv').slideUp();
                jQuery(this).parents('.innerSearchDiv').find('.recentlyDiv').show();
                jQuery(this).parents('.innerSearchDiv').next('.finalResultDiv').hide();
            }
        }, 10);
    });
    jQuery('.globalSearchDiv .searchDiv .searchButtonDiv .searchBtn').on('click', function () {
        if (jQuery('.globalSearchDiv .searchDiv input').val().length >= 1) {
            jQuery(this).parents('.innerSearchDiv').find('.recentlyDiv').hide();
            jQuery(this).parents('.innerSearchDiv').next('.finalResultDiv').show();
            jQuery(this).parents('.globalSearchDiv').find('.serachAutofillDiv').slideUp();
        }
    });

    jQuery('header .mainHeader .logoDiv .mobMenu .mobSearch').on('click', function () {
        jQuery('.searchLi>a').click();
    });

    var logoSliderVar = new Swiper(".logoSliderActive", {
        slidesPerView: 2,
        grid: {
            rows: 2,
        },
        pagination: {
            el: ".logoSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 5,
            },
        },
    });

    var secondNavSliderVar = new Swiper(".secondNavSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.secodaryNav .swiper-button-next',
            prevEl: '.secodaryNav .swiper-button-prev',
        },
    });

    var blogSliderVar = new Swiper(".blogSliderActive", {
        direction: "horizontal",
        slidesPerView: "auto",
        navigation: {
            nextEl: '.blogSliderActive .swiper-button-next',
            prevEl: '.blogSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".blogSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
    });


    let spotLightSliderSelector = '.spotlightSliderActive',
        interleaveOffset = 0.5;

    // Main Slider
    let spotLightSliderOptions = {
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        loopAdditionalSlides: 10,
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.spotlightSliderActive .swiper-button-next',
            prevEl: '.spotlightSliderActive .swiper-button-prev',
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            },
            // progress: function () {
            //     let swiper = this;
            //     for (let i = 0; i < swiper.slides.length; i++) {
            //         let slideProgress = swiper.slides[i].progress,
            //             innerOffset = swiper.width * interleaveOffset,
            //             innerTranslate = slideProgress * innerOffset;

            //         swiper.slides[i].querySelector(".bannerImgDiv").style.transform =
            //             "translateX(" + innerTranslate + "px)";
            //     }
            // },
            // touchStart: function () {
            //     let swiper = this;
            //     for (let i = 0; i < swiper.slides.length; i++) {
            //         swiper.slides[i].style.transition = "";
            //     }
            // },
            // setTransition: function (speed) {
            //     let swiper = this;
            //     for (let i = 0; i < swiper.slides.length; i++) {
            //         swiper.slides[i].style.transition = speed + "ms";
            //         swiper.slides[i].querySelector(".bannerImgDiv").style.transition =
            //             speed + "ms";
            //     }
            // }
        }
    };
    let spotLightSlider = new Swiper(spotLightSliderSelector, spotLightSliderOptions);

    let ourPrideSliderSelector = '.ourPrideSliderActive';

    // Main Slider
    let ourPrideSliderOptions = {
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        // loopAdditionalSlides: 10,
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.ourPrideSliderActive .swiper-button-next',
            prevEl: '.ourPrideSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".ourPrideSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            }
        }
    };
    let ourPrideSlider = new Swiper(ourPrideSliderSelector, ourPrideSliderOptions);

    let instaSliderSelector = '.instaSliderActive';

    // Main Slider
    let instaSliderOptions = {
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        // loopAdditionalSlides: 10,
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesProgress: true,
        pagination: {
            el: ".instaSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            }
        }
    };
    let instaSlider = new Swiper(instaSliderSelector, instaSliderOptions);

    let bodredCardGridSliderSelector = '.bodredCardGridSliderActive';
    let bodredCardGridSliderOptions = {
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 3000
        },
        // loopAdditionalSlides: 10,
        slidesPerView: 'auto',
        grabCursor: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.bodredCardGridSliderActive .swiper-button-next',
            prevEl: '.bodredCardGridSliderActive .swiper-button-prev',
        },
        pagination: {
            el: ".bodredCardGridSliderActive .swiper-pagination",
            dynamicBullets: true,
        },
        on: {
            init: function () {
                this.autoplay.stop();
            },
            imagesReady: function () {
                this.autoplay.start();
            }
        }
    };
    let bodredCardGridSlider = new Swiper(bodredCardGridSliderSelector, bodredCardGridSliderOptions);

    if (wv < 768) {

        let filterSliderSelector = '.filterSliderActive';
        let filterSliderOptions = {
            loop: false,
            speed: 1000,
            autoplay: {
                delay: 3000
            },
            // loopAdditionalSlides: 10,
            updateOnWindowResize: true,
            slidesPerView: 'auto',
            grabCursor: true,
            watchSlidesProgress: true,
            pagination: {
                el: ".filterSliderActive .swiper-pagination",
                dynamicBullets: true,
            },
            on: {
                init: function () {
                    this.autoplay.stop();
                },
                imagesReady: function () {
                    this.autoplay.start();
                }
            }
        };
        let filterSlider = new Swiper(filterSliderSelector, filterSliderOptions);
    }
    var scrollVerticalSliderVar = new Swiper(".scrollVerticalSlider", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        // observer: true,
        // observeParents: true,
        // resizeObserver: true,
        scrollbar: {
            el: ".scrollVerticalSlider .swiper-scrollbar",
            draggable: true,
        },
        mousewheel: true,
    });

});


document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.ctrlKey || e.metaKey) &&
        (e.keyCode == "61" ||
            e.keyCode == "107" ||
            e.keyCode == "173" ||
            e.keyCode == "109" ||
            e.keyCode == "187" ||
            e.keyCode == "189")
    ) {
        e.preventDefault();
    }
});
document.addEventListener(
    "wheel",
    function (e) {
        if ((e.ctrlKey) && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
        }
    },
    {
        passive: false
    }
);

jQuery(".read-one").click(function () {
   jQuery(".overlay-one").addClass('thrive-overlay');
});
jQuery(".overlay-close").click(function () {
   jQuery(".overlay-one").removeClass('thrive-overlay');

});
jQuery(".read-two").click(function () {
   jQuery(".overlay-two").addClass('thrive-overlay');
});
jQuery(".overlay-close").click(function () {
   jQuery(".overlay-two").removeClass('thrive-overlay');

});
jQuery(".read-three").click(function () {
   jQuery(".overlay-three").addClass('thrive-overlay');
});
jQuery(".overlay-close").click(function () {
   jQuery(".overlay-three").removeClass('thrive-overlay');

});
jQuery(".read-four").click(function () {
   jQuery(".overlay-four").addClass('thrive-overlay');
});
jQuery(".overlay-close").click(function () {
   jQuery(".overlay-four").removeClass('thrive-overlay');

});

var bodyHeight = window.innerHeight;
//  var headerHeight = jQuery('header').height();
var footerHeight = jQuery('footer').innerHeight();
var minHeight = bodyHeight - footerHeight;
jQuery('main').css('min-height', minHeight);      



/* Net zero download PDF */
jQuery(document).on('click', '.netZeroForm  .popupContent .closed ', function () {
    //$.cookie('Catalysing', null, -1); 
    //$.cookie('Dymaxion', null, -1); 
    jQuery('html').removeClass('netZeroPopupOpen overflowHidden');
    jQuery(this).parents('.netZeroForm').removeClass('active');
}); 
var Cname = "";


jQuery("input[name='whatsapp_communication_opt_in']").addClass('wacotp');

//console.log(window.location.origin);
function netZeroDownload(Cname){
    
    var getCook = jQuery.cookie(Cname);
    console.log('cookie: '+getCook);
   
    if(getCook == Cname+"DOWNLOAD"){
        var dURL = window.location.origin+"/netZeroAPI/downloadPDF.php";
        //window.open(dURL+'?d='+Cname, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        window.location.href = dURL+'?d='+Cname;
        return false;
    }else{
        //window.location.reload();
        jQuery("input[name='download_id']").val(Cname);
        jQuery('html').addClass('netZeroPopupOpen overflowHidden');
    }
    
}
// console.log($.cookie('Catalysing'));
// console.log($.cookie('Dymaxion'));
/* jQuery('#webform-submission-netzerourbanacceleratortemp-node-3661-add-form--2').submit(function(event) {
 	event.preventDefault(); 	
});  */

jQuery(".downloadSubmit").click(function (e) {    
//alert('submit click'); return false;
    e.preventDefault(e);
    var netFormClass = '.webform-submission-netzerourbanaccelerator-form';
    var fnameNz = 'input[name="first_name"]';
    var lnameNz = 'input[name="last_name"]';
    var emailNz = 'input[name="email"]';
    //var companyNz = 'input[name="company"]'; //Optional
    var phoneNz = 'input[name="phone_number"]';
    //var whatsappNz = 'input[name="whatsapp_communication_opt_in"]'; //Optional
    var validNz = true;
        
    if(jQuery(fnameNz).val() == ""){
        jQuery(fnameNz).css({"border-bottom" : "0.5px solid #ff0404"});
        validNz = false;
    }else{
        jQuery(fnameNz).css({"border-bottom" : "0.5px solid #000000"});
    }
    
    if(jQuery(lnameNz).val() == ""){
        jQuery(lnameNz).css({"border-bottom" : "0.5px solid #ff0404"});
        validNz = false;
    }else{
        jQuery(lnameNz).css({"border-bottom" : "0.5px solid #000000"});
    }
    
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    
    if(jQuery(emailNz).val() == "" || validateEmail(jQuery(emailNz).val()) == null){
        jQuery(emailNz).css({"border-bottom" : "0.5px solid #ff0404"});
        validNz = false;
    }else{
        jQuery(emailNz).css({"border-bottom" : "0.5px solid #000000"});
    }
    
    
//jQuery('#email').on('input', validate);
    
    
    
    if(jQuery(phoneNz).val() == "" || /\D/.test(jQuery(phoneNz).val())){
        jQuery(phoneNz).css({"border-bottom" : "0.5px solid #ff0404"});
        validNz = false;
    }else{        
        jQuery(phoneNz).css({"border-bottom" : "0.5px solid #000000"});
    }

    
    
    
if(validNz){
    
    
    
		jQuery.ajax({
		  url: window.location.origin+"/netZeroAPI/downloadFiles.php",
		  type:'POST',
		  dataType: "json",
		  data: jQuery(netFormClass).serialize(),
		  beforeSend: function(){
			jQuery(".downloadSubmit").prop('disabled', true);
			//jQuery("#loader").css("display", "inline");
            //console.log(jQuery(netFormClass).serialize()); return false;
		},
		success: function(response) {
			console.log(response); //return false;
			if(response.download != "") {
				//window.location = "thankyou.php"+window.location.search;
				//window.location = "downloadFile.php";
                jQuery.cookie(response.download, response.download+'DOWNLOAD', { expires: 1, path: '/', domain: window.location.origin, secure: true });
				//window.open("/netZeroAPI/downloadPDF.php?d="+response.download, '_blank');
                 window.location.href = window.location.origin+"/netZeroAPI/downloadPDF.php?d="+response.download;
				// Close form
                jQuery(netFormClass)[0].reset();
                jQuery('html').removeClass('netZeroPopupOpen overflowHidden');
                jQuery(this).parents('.netZeroForm').removeClass('active');
               
			}else{
				alert("Something going wrong! Please try again?");
				//jQuery("#loader").hide();			
				jQuery(".downloadSubmit").prop('disabled', false);
			}
		  },
		  complete:function(data){
			/* setInterval(function() {
				window.location.reload();
			}, 5000);
			jQuery("#loader").hide();			
			jQuery("#formSubmitBtn").show(); */
		   }
		}); // Ajax />
    } // valid Form      
}); 
