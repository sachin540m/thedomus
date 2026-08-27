/**
 * @file
 * The Domus New Custom Theme behaviors.
 */
 
/* ------------------ Webengage Login function call on All project page with leadid ------------------ */
function webengageLogin(e) {
    jQuery.ajax({
        type: "post",
        url: "/sfdcapi/getMobile.php?token=T1bbZ9UFEdB53aXMQVDh3YmI64TXuxFefHhUHztQJ5YPopq9dx4mVzCxi22h81gB&id=" + e,
        success: function (e) {
            webengage.user.login(e), console.log("WE-login: " + e);
        },
    });
}

var WEcurrentUrl = window.location.href, WEurl = new URL(WEcurrentUrl), WEleadid = WEurl.searchParams.get("leadid");
null != WEleadid && "" != WEleadid && "/all-projects" == window.location.pathname && webengageLogin(WEleadid); 
/* _____________ END -- Webengage Login function call on All project page with leadid _____________ */

var site_origin = window.location.origin, site_url = site_origin + "/";
var base_url = window.location.origin;

jQuery(document).ready(function ($) {	
	
	$("a[href*='/the-domus-luxury/the-domus-avalon-juhu']").attr("href", function(index, originalHref) {
		// Replace "old-part" with "new-part" in the URL
		var newUrl = originalHref.replace("/the-domus-luxury/the-domus-avalon-juhu", "/projects/luxury-property-in-mumbai/the-domus-avalon-juhu"+window.location.search);
		return newUrl;
	});	
	
	/*var currentUrl = window.location.href;
		if(currentUrl.indexOf("/projects") == -1){
		
		$(".selcetdcity").html("Mumbai");
		}*/
	
	var parser = new UAParser();
	var deviceDetail = parser.getResult();
	//console.log(deviceDetail);
	//var device_type = 'Desktop';
	var device_type = deviceDetail.device.type;
	//console.log(device_type);
	if(device_type == 'mobile' || device_type == 'tablet'){
		var deviceType = device_type.charAt(0).toUpperCase() + device_type.slice(1);
		$("input[name='device_type__c']").val(deviceType);	
	}
	else{
		$("input[name='device_type__c']").val("Desktop");	
	}
	var deviceCompany = deviceDetail.device.vendor;
	//console.log(deviceCompany);
	var deviceModel = deviceDetail.device.model;
	//console.log(deviceModel);
	if(deviceModel !== '' && deviceModel !== 'undefined'){
		$("input[name='device__c']").val(deviceModel);
	}
	else{
		$("input[name='device__c']").val("Unknown");
	}
	if(deviceCompany !== '' && deviceCompany !== 'undefined'){
		$("input[name='device_name__c']").val(deviceCompany);
	}
	else{
		$("input[name='device_name__c']").val("Unknown");
	}
	
	/*if ($('[role="alert"]').length > 0) {
		// Trigger the click event on the enquireForm link
		//console.log(captcha);
		$('.enquireForm').click();
		$("input[name='captcha_response']").after("<div class='captcha_error errorclass'></div>");
		$(".captcha_error").html('Please enter valid captcha code').show();
	}*/
	
	var clustername = jQuery(".clustername").text();
	jQuery("input[name='cluster_name__c']").val(clustername);
	
	$(".secodaryNav").unwrap();

	$("input").blur(function(){
		$(this).val($.trim($(this).val()))
	});
	
	jQuery('#edit-consent').prop('checked', true);
	
	jQuery(".consenttext").html();
	jQuery(".consenttext").html('<p>By checking this box, you agree to our <a class="colorGold" href="https://www.thedomus.in/privacy-policy" target="_blank">Privacy Policy</a> and consent to be contacted with relevant updates.</p>');
	
	var localname = localStorage.getItem("name");
	var localemail = localStorage.getItem("email");
	var localmobile = localStorage.getItem("mobile");
	var localcountry = localStorage.getItem("country");
	var localcity = localStorage.getItem("city");
	//console.log(localname);
	jQuery("#name_ty").html(localname);
	jQuery("#email_ty").html(localemail);
	jQuery("#mobile_ty").html(localmobile);
	jQuery("#country_ty").html(localcountry);
	jQuery("#city_ty").html(localcity);

	function isValidMobile(value) {
		// Allow only one leading zero and no all-zero values
		var regex = /^0?[1-9]\d{4,16}$/;
		return regex.test(value) && !/^0+$/.test(value);
	}

	/*$('.telephone').blur(function() {
		var mobileValue = $(this).val();
		if (!isValidMobile(mobileValue)) {
			$(this).val('')
		} 
	});*/
	function restrictInput(event) {
		// Allow only digits (0-9), backspace, delete, tab, escape, enter, and arrow keys
		var key = event.key;
		if (event.type === "keydown") {
			// Allow: backspace, delete, tab, escape, enter, and arrow keys
			if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 37, 38, 39, 40]) !== -1 ||
				// Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
				(event.ctrlKey === true && $.inArray(event.keyCode, [65, 67, 86, 88]) !== -1) ||
				// Allow: home, end, left, right, down, up
				(event.keyCode >= 35 && event.keyCode <= 39)) {
				return;
			}
			// Prevent non-digit input
			if (event.key.length === 1 && !event.key.match(/[0-9]/)) {
				event.preventDefault();
			}
		} else if (event.type === "input") {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	}

	$('.telephone').on('keydown input', restrictInput);
	
	$('.nameval').on('blur', function() {
                var trimmedText = $(this).val().replace(/\s+/g, ' ').trim();
                $(this).val(trimmedText);
            });

	$(".applyfilter,.projectapply").click(function() {
		$(".closedFilter").trigger("click");
	  });
	//alert($('.spotlightBanner').length);
	if ($('.spotlightBanner').length <= 0) {
		//alert("test");
		//$("#headerstyle").addClass("white");
		$("main").addClass("noBanner");
	}
	
	var currentUrl = window.location.href;
		if(currentUrl.indexOf("/projects") != -1){
			/* $(".enquire").remove();
			$(".call").remove();
			$(".chat").remove();
			//$(".selcetdcity").html("Mumbai"); */
			
			var luxProp = currentUrl.split('/');
			console.log(luxProp[4]);
			if(luxProp[4].toLowerCase().includes('luxury')){
				$(".enquire").remove();
				$(".call").remove();
				$(".chat").remove();
				$(".wpclick").remove();
			}
			
			if($('div.stickyHeader ul.staticlinksUl li a.enquireForm').is(':visible') == false){
				$("div.stickyHeader.d-flex.align-item-center.justify-content-center.m-flex-important").remove();				
			} // hide footer patch in mobile
		}
		
		if(currentUrl.indexOf("/contact-us") != -1){
			$(".enquire").remove();
		}

	$(".views-exposed-form").hide();
	
	$(document).on('keydown', function (e) {
		if (e.key === 'Escape' || e.keyCode === 27) {
			$('html').removeClass('bodPopupOpen overflowHidden');
			$('html').removeClass('enquirePopupOpen overflowHidden');
			$('html').removeClass('imgLightBoxOpen overflowHidden');
        
		}
	});
	
	$('.otp').on('keypress', function(e) {
        var key = e.which || e.keyCode;
        var isNumber = (key >= 48 && key <= 57); // ASCII codes for 0-9
        
        // Check if the key is a number and if the length of the input is less than 4
        if (isNumber && $(this).val().length < 4) {
            return true; // Allow the key press
        } else {
            e.preventDefault(); // Block the key press
            return false;
        }
    });
	
	jQuery(document).ready(function ($) {
	//jQuery(".otp").css("display", "none");
	jQuery('#edit-resived-update-on-whatsapp').prop('checked', true);
	
	
	setTimeout(function() { 
	
	var projecid = jQuery(".projecid").text();
				   
												
										 
										
																						   
	   
										  
	 
													  
 
	if(projecid == 'a09P3000007WavZ'|| projecid == 'a09P300000GFL7l'){
		jQuery("h2.headingH1.colorGold").text('By invitation only');
	}	
	
	//alert(projecid);
	if(projecid != ''){
	jQuery("input[name='project_name__c']").val(projecid);
	}
	
	var projectype = jQuery(".projectype").text();
	jQuery("input[name='recordtypeid']").val(projectype);
	
	var projecttitle = jQuery(".projecttitle").text();
	
	
	
	}, 500);

	
		
	setTimeout(function () {
	$(".loclist").html('');
				$.ajax({
					type: "post",
					url: site_url + 'views/ajax?_wrapper_format=drupal_ajax',
					data: "view_name=locality&view_display_id=block_2&_drupal_ajax=1",
					success: function (result) {
						//$(".searchresult").html(result.length+" Properties matching your search");
						for (var i = 0; i < result.length; i++) {
							if (result[i].command == 'insert' && result[i].method == 'replaceWith') {

								$(".loclist").html('');
								$(".loclist").html(result[i].data);
								$('.locationlist').after('<label>Select Location*</label>');

							}
						}
					}
				});
		}, 1000);

	setTimeout(function () {
    $('#departmentlst').empty();
    $('.form-item-depertment').remove();
    var cntryOptionsdept = '';
    var cntryCodesdept = '/themes/thedomusnew/js/department.json';
    cntryOptionsdept += '<li><label for="chk1" data-title="Test1">Test1</label></li><li><label for="chk1" data-title="Test2">Test2</label></li><li><label for="chk1" data-title="Test3">Test3</label></li>';
	//jQuery.getJSON(cntryCodesdept, function (data) {
			//console.log(data);
			/*jQuery.each(data, function (key, val) {
				cntryOptionsdept += '<li><label for="chk1" data-title="' + val.name + '">' + val.name + '</label></li>';
			});*/
			//var sep = $('<option>', {text: '--------------------', disabled: true, value: -1});

			//$('#edit-country').append(sep);
			//console.log(cntryOptions);
			 $('#departmentlst').append(cntryOptionsdept);
            $('.departmentsearchinput').before('<input class="searchListInput" placeholder="Search ...">');
            $('.deptlist').after('<label>Select Department*</label>');
		//});
	}, 1000);
	
	
	
	
	/*setTimeout(function () {
		var activeElement = $('#countrylst li.active label');
		var title = activeElement.data('title');
		$('.selectedcountry').html(title);
			//alert(title);
	}, 2000);	*/	
});


jQuery(document).on('click', '.confirmqip', function () {
	jQuery(this).closest(".viewList").find(".donotconfirmqip").hide();
    jQuery(this).closest(".viewList").find(".hidecontainer").hide();
	jQuery(this).closest("li").next("li").show();
});
jQuery(document).on('click', '.donotconfirmqip', function () {
	jQuery(this).closest(".viewList").find(".confirmqip").hide();
    jQuery(this).closest(".viewList").find(".hidecontainer").show();
	jQuery(this).closest("li").next("li").hide();
});


jQuery(document).on('click', '.locationlst li', function () {
	var selloc = $(".locationlst li.active label").attr("data-title");
	jQuery("input[name='location']").val(selloc);
});

jQuery(document).on('click', '#departmentlst li', function () {
	var seldept = $("#departmentlst li.active label").attr("data-title");
	jQuery("input[name='department']").val(seldept);
});
	
	
	
	//$('#sel_protype input[type=checkbox].ptype').click(function() {
	$(document).on('change', '#sel_protype input[type=radio].ptype', function (e) {
		// Remove 'active' class from all radio inputs
		$('#sel_protype input[type=radio].ptype').removeClass('active');

		// Add 'active' class to the selected radio input
		$(this).addClass('active');

		// Get the selected data-id
		var selectedId = $(this).attr('data-id');
		//console.log('Selected data-id:', selectedId);
		//console.log($(this).attr('id'));
		/* $("p#projType").remove();
		$(".projTypeShow").append('<p id="projType">'+$(this).attr('id')+'</p>'); */
		$(".radiochek.mobActive span").text($(this).attr('id'));
	    // Additional logic based on the selected data-id
		if (selectedId == 16 || selectedId == 294 || selectedId == 295 || selectedId == 296 || selectedId == 293) {
			if ($('#sel_protype input[type=radio].ptype:checked').length > 1) {
				$('.bedroom').show();
				$('.localitydropdown').show();
				$('.maindropdown').show();
				$('.comproptype').css("display", "block");
			} else {
				$('.bedroom').hide();
				$('.localitydropdown').hide();
				$('.maindropdown').hide();
				$('.possessionstat').hide();
				$('.comproptype').css("display", "block");
				$('.comcategory').css("display", "block");
				$('#sel_city li').slice(-2).hide();
			}
		} else {
			$('.bedroom').css("display", "block");
			$('.localitydropdown').css("display", "block");
			$('.maindropdown').css("display", "block");
			$('.comproptype').css("display", "none");
			$('.comcategory').css("display", "none");
			$('.possessionstat').css("display", "block");
			$('#sel_city li').show();
		}
	});


	
	$(document).on('click', '#sel_propertytype input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
        if ($(this).is(':checked')) {
            $(this).closest('input').addClass('active');
        } else {
            $(this).closest('input').removeClass('active');
        }
    });
	
	$(document).on('click', '#sel_category input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
        if ($(this).is(':checked')) {
            $(this).closest('input').addClass('active');
        } else {
            $(this).closest('input').removeClass('active');
        }
    });
	
	
	$(document).on('click', 'ul#sel_city input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
		//console.log($(this).attr('id'));
			
            $("#sel_city input[type=checkbox].ptype, ul#sel_city li").removeClass('active');
			
			//$("#sel_city li input[type=checkbox]:checked+label:after").css('opacity', 0);
			//$("#sel_city li.active").next('label').css('--after-opacity', this.checked ? '0' : '1');
			$("ul#sel_city input[type='checkbox'].ptype").not(this).prop("checked", false);
			
			$(this).closest('input').addClass('active');
			$(this).closest("li").addClass('active');
			
			//$(this).prop("checked", false);
        /* if ($(this).is(':checked')) {            
            $(this).closest('input').addClass('active');
        } else {			
            $(this).closest('input').removeClass('active');
        } */
    });
	
	$(document).on('click', '#sel_loc input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
        if ($(this).is(':checked')) {
            $(this).closest('input').addClass('active');
        } else {
            $(this).closest('input').removeClass('active');
        }
    });
	
	$(document).on('click', '#bedroom_loc input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
        if ($(this).is(':checked')) {
            $(this).closest('input').addClass('active');
        } else {
            $(this).closest('input').removeClass('active');
        }
    });
	
	/*$(document).on('click', '#posstatus_loc input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
        if ($(this).is(':checked')) {
            $(this).closest('input').addClass('active');
        } else {
            $(this).closest('input').removeClass('active');
        }
    });*/
	
	$(document).on('click', '#budget_loc input[type=checkbox].ptype', function (e) {
        // Toggle the 'active' class on the parent <li> element based on checkbox checked state
        if ($(this).is(':checked')) {
            $(this).closest('input').addClass('active');
        } else {
            $(this).closest('input').removeClass('active');
        }
    });
	
	
	
	
	
	
	
	
	$('.comproptype').css("display","none");
	$('.comcategory').css("display","none");
	$(document).on('click', '.projectapply', function (e) {
		
    // Stop further execution if on the careers page
    if ($('#jobsearch').length > 0) {
        return; // Stop further execution
    }
	
    var k = 0;
    var protype_args = '';
	var proptype_args = '';
	var category_args = '';
    var city_args = '';
    var locality_args = '';
    var bedrooms_args = '';
    //var possession_status_args = '';
    var budget_args = '';
	var price_min_args = '';
	var price_max_args = '';
    var rcount = '';
    var protype_val = '';
	var proptype_val = '';
	var category_val = '';
    var city_val = '';
    var locality_val = '';
    var bedroom_val = '';
    var budget_val = '';
	var price_min_val = '';
	var price_max_val = '';
    //var possession_val = '';
    $(".filterresult").html('');
	if ($(this).is(':checked')) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
    // Check active checkboxes and gather their data
    if ($('#sel_protype input[type=radio]').hasClass('active')) {
		//alert($(this).data('id'));
			var pro_typecount = $('#sel_protype input[type=radio].active').length;
			if (pro_typecount > 1) {
				
				//if($('#sel_protype input[type=radio].active').data('id') == 16){
				var selectedIdActive = $('#sel_protype input[type=radio].active').data('id');
				if(selectedIdActive == 16 || selectedIdActive == 294 || selectedIdActive == 295 || selectedIdActive == 296){																								
					//$('.possessionstat').hide();
					$('.budget').hide();
					$('.comproptype').css("display","block");
					$('.bedroom').hide();
					$('.comcategory').css("display","block");
					
				}
				else{
					//$('.possessionstat').css("display","block");
					$('.budget').css("display","block");
					$('.comproptype').hide();
					$('.bedroom').css("display","block");
					$('.comcategory').hide();
				}
				//$('#sel_protype input[type=radio].active').each(function () {
					protype_args += 'field_project_type_tid[]=' + $(this).data('id') + '&';
					
					protype_val += $(this).next('label').html() + ',';
				//});
				//protype_args = protype_args.substring(0, protype_args.length - 1);
				//protype_val = protype_val.slice(0, -1);
			} else {				
				protype_args = 'field_project_type_tid%5B%5D=' + parseInt($('#sel_protype input[type=radio].active').data('id'));
				
				//if($('#sel_protype input[type=radio].active').data('id') == 16){
				if(selectedIdActive == 16 || selectedIdActive == 294 || selectedIdActive == 295 || selectedIdActive == 296){
																												
					//$('.possessionstat').hide();
					$('.budget').hide();
					$('.comproptype').css("display","block");
					$('.bedroom').hide();
					$('.comcategory').css("display","block");
				}
				else{
					//$('.possessionstat').css("display","block");
					$('.budget').css("display","block");
					$('.comproptype').hide();
					$('.bedroom').css("display","block");
					$('.comcategory').hide();
				}
				//alert(protype_args);
				protype_val = $('#sel_protype input[type=radio].active').next('label').html();
			}
		}
		if ($('#sel_propertytype input[type=checkbox]').hasClass('active')) {
			var proptypecount = $('#sel_propertytype input[type=checkbox].active').length;
			if (proptypecount > 1) {
				$('#sel_propertytype input[type=checkbox].active').each(function () {
					proptype_args += 'field_property_type_tid[]=' + $(this).data('id') + '&';
					proptype_val += $(this).next('label').html() + ',';
				});
				proptype_args = "&" + proptype_args.substring(0, proptype_args.length - 1);
				proptype_val = proptype_val.slice(0, -1);
			} else {
				proptype_args = '&field_property_type_tid[]=' + $('#sel_propertytype input[type=checkbox].active').data('id');
				proptype_val = $('#sel_propertytype input[type=checkbox].active').next('label').html();
			}
		}
		if ($('#sel_category input[type=checkbox]').hasClass('active')) {
			var categorycount = $('#sel_category input[type=checkbox].active').length;
			if (categorycount > 1) {
				$('#sel_category input[type=checkbox].active').each(function () {
					category_args += 'field_com_category_tid[]=' + $(this).data('id') + '&';
					category_val += $(this).next('label').html() + ',';
				});
				category_args = "&" + category_args.substring(0, category_args.length - 1);
				category_val = category_val.slice(0, -1);
			} else {
				category_args = '&field_com_category_tid[]=' + $('#sel_category input[type=checkbox].active').data('id');
				category_val = $('#sel_category input[type=checkbox].active').next('label').html();
			}
		}
		if ($('#sel_city input[type=checkbox]').hasClass('active')) {
			var citycount = $('#sel_city input[type=checkbox].active').length;
			if (citycount > 1) {
				$('#sel_city input[type=checkbox].active').each(function () {
					city_args += 'field_city_tid[]=' + $(this).data('id') + '&';
					city_val += $(this).next('label').html() + ',';
				});
				city_args = "&" + city_args.substring(0, city_args.length - 1);
				city_val = city_val.slice(0, -1);
			} else {
				city_args = '&field_city_tid[]=' + $('#sel_city input[type=checkbox].active').data('id');
				city_val = $('#sel_city input[type=checkbox].active').next('label').html();
			}
		}
		if ($('#sel_loc input[type=checkbox]').hasClass('active')) {
			var loccount = $('#sel_loc input[type=checkbox].active').length;
			if (loccount > 1) {
				$('#sel_loc input[type=checkbox].active').each(function () {
					locality_args += 'field_locality_tid[]=' + $(this).data('id') + '&';
					locality_val += $(this).next('label').html() + ',';
				});
				locality_args = "&" + locality_args.substring(0, locality_args.length - 1);
				locality_val = locality_val.slice(0, -1);
			} else {
				locality_args = '&field_locality_tid[]=' + $('#sel_loc input[type=checkbox].active').data('id');
				locality_val = $('#sel_loc input[type=checkbox].active').next('label').html();
			}
		}
		if ($('#bedroom_loc input[type=checkbox]').hasClass('active')) {
			var bedroomcount = $('#bedroom_loc input[type=checkbox].active').length;
			if (bedroomcount > 1) {
				$('#bedroom_loc input[type=checkbox].active').each(function () {
					bedrooms_args += 'field_bedrooms_tid[]=' + $(this).data('id') + '&';
					bedroom_val += $(this).next('label').html() + ',';
				});
				bedrooms_args = "&" + bedrooms_args.substring(0, bedrooms_args.length - 1);
				bedroom_val = bedroom_val.slice(0, -1);
			} else {
				bedrooms_args = '&field_bedrooms_tid[]=' + $('#bedroom_loc input[type=checkbox].active').data('id');
				bedroom_val = $('#bedroom_loc input[type=checkbox].active').next('label').html();
			}
		}
		/*if ($('#posstatus_loc input[type=checkbox]').hasClass('active')) {
			var posstatscount = $('#posstatus_loc input[type=checkbox].active').length;
			if (posstatscount > 1) {
				$('#posstatus_loc input[type=checkbox].active').each(function () {
					possession_status_args += 'field_possession_status_tid[]=' + $(this).data('id') + '&';
					possession_val += $(this).next('label').html() + ',';
				});
				possession_status_args = "&" + possession_status_args.substring(0, possession_status_args.length - 1);
				possession_val = possession_val.slice(0, -1);
			} else {
				possession_status_args = '&field_possession_status_tid[]=' + $('#posstatus_loc input[type=checkbox].active').data('id');
				possession_val = $('#posstatus_loc input[type=checkbox].active').next('label').html();
			}
		}*/
		if ($('#budget_loc input[type=checkbox]').hasClass('active')) {
			var budgetcount = $('#budget_loc input[type=checkbox].active').length;
			if (budgetcount > 1) {
				$('#budget_loc input[type=checkbox].active').each(function () {
					budget_args += 'field_budget_tid[]=' + $(this).data('id') + '&';
					budget_val += $(this).next('label').html() + ',';
				});
				budget_args = "&" + budget_args.substring(0, budget_args.length - 1);
				budget_val = budget_val.slice(0, -1);
			} else {
				budget_args = '&field_budget_tid[]=' + $('#budget_loc input[type=checkbox].active').data('id');
				budget_val = $('#budget_loc input[type=checkbox].active').next('label').html();
			}
		}
		
		if ($('#minprice li').hasClass('active')) {
			var minpricecount = $('#minprice li.active').length;
			//alert(minpricecount);
			if (minpricecount > 1) {
				$('#minprice li.active').each(function () {
					price_min_args += 'field_project_price_value[min]=' + $(this).data('value') + '&';
					price_min_val += $(this).next('label').html() + ',';
				});
				price_min_args = "&" + price_min_args.substring(0, price_min_args.length - 1);
				price_min_val = price_min_val.slice(0, -1);
			} else {
				if($('#sel_protype input[type=radio].active').data('id') != 16){
					price_min_args = '&field_project_price_value[min]=' + $('#minprice li.active').data('value');
					price_min_val = $('#minprice li.active').next('label').html();
				}
				else{
					price_min_args = '&field_project_price_value[min]=';
					price_min_val = $('#minprice li.active').next('label').html();
				}
			}
		}
		
			if ($('#maxprice li').hasClass('active')) {
				var maxpricecount = $('#maxprice li.active').length;
				if (maxpricecount > 1) {
					$('#maxprice li.active').each(function () {
						price_max_args += 'field_project_price_value[max]=' + $(this).data('value') + '&';
						price_max_val += $(this).next('label').html() + ',';
					});
					price_max_args = "&" + price_max_args.substring(0, price_max_args.length - 1);
					price_max_val = price_max_val.slice(0, -1);
				} else {
					if($('#sel_protype input[type=radio].active').data('id') != 294 || $('#sel_protype input[type=radio].active').data('id') != 295 || $('#sel_protype input[type=radio].active').data('id') != 296){
						price_max_args = '&field_project_price_value[max]=';
						price_max_val = $('#maxprice li.active').next('label').html();
					}else if($('#sel_protype input[type=radio].active').data('id') != 16){						
						price_max_args = '&field_project_price_value[max]=' + $('#maxprice li.active').data('value');
						price_max_val = $('#maxprice li.active').next('label').html();
					}else{
						price_max_args = '&field_project_price_value[max]=';
						price_max_val = $('#maxprice li.active').next('label').html();
					}
				}
			}
			
			
	
			if($('#sel_protype input[type=radio].active').data('id') == 296 && $('#sel_propertytype input[type=checkbox].active').data('id') == 268 && $('#sel_category input[type=checkbox].active').data('id') == 299 && $('#sel_city input[type=checkbox].active').data('id') === undefined){
				protype_args = "";
				proptype_args = "";
				category_args = "";
				city_args = "&field_city_tid[]=0";
			} // Sub + Sale + I/W = 0 result
			
			if($('#sel_protype input[type=radio].active').data('id') == 295 && $('#sel_propertytype input[type=checkbox].active').data('id') == 269 && $('#sel_category input[type=checkbox].active').data('id') == 299 && $('#sel_city input[type=checkbox].active').data('id') === undefined){
				protype_args = "";
				proptype_args = "";
				category_args = "";
				city_args = "&field_city_tid[]=0";
			} // Industrial Plot + Lease + I/W = 0 result
																				
																 																																																																	 
					  
					   
					   
									  
								   
   
																																																																																	 
					  
					   
					   
									  
								   
 

    //alert(category_args);
	//alert(price_max_args);
	//alert(protype_args);
    // Send AJAX request
	var price_min_Value = $('#minprice li.active').data('value');
	var price_max_Value = $('#maxprice li.active').data('value');
    $.ajax({
        type: "post",
        url: site_url + 'views/ajax?_wrapper_format=drupal_ajax&' + protype_args + proptype_args + category_args + city_args + locality_args + bedrooms_args + budget_args + price_min_args + price_max_args + '&view_name=project_listing_homepage&view_display_id=block_4&_drupal_ajax=1',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].command == 'insert' && result[i].method == 'replaceWith') {
                    $(".filterresult").html(result[i].data);
                    $(".cardDiv").addClass("aos-animate");
                    $("#views-exposed-form-project-listing-homepage-block-4").hide();
                }
            }
			rcount = $('.filterresult .swiper-slide').length;
			$(".filterDataCount").html(rcount + " Developments matching your search");
			const urlParams = new URLSearchParams(window.location.search);
			const projectType = urlParams.get('project_type');
			if (projectType !== 'Commercial') {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					'event': "Filter applied",
					'Project Type': protype_val,
					'Property type': proptype_val,
					'City': city_val,
					'Locality': locality_val,
					'Bedroom': bedroom_val,
					'Price Range Min': price_min_Value,
					'Price Range Max': price_max_Value,
					'Result Count': rcount
				});
				
				if(fliterTrigger == true){
					window.dataLayer.push({
						event: 'filter_applied',
						'project_type': protype_val,
						'city': city_val,
						'locality': locality_val,
						'typology': bedroom_val,
						'price_range': price_min_Value+" - "+price_max_Value,
						'category': category_val,
						'type': proptype_val,
						'result_count': rcount
					});
					console.log(window.dataLayer); //return false;
				}
			}	
        }
    });
	
	});
	
	$(document).on('click', '.goback', function (e) {
		e.preventDefault(); // Prevent the default action, if necessary
		var referrer = document.referrer; // Get the referrer URL (the previous page)
		if (referrer) {
			// If referrer is available, navigate to it
			window.location.href = referrer;
		}
		else {
			// If no referrer, fallback to history.back() to go back
			window.history.back();
		}
	});

	
	$(document).on('click', '#commsearch', function (e) {
    // Prevent the default action of the click event
    e.preventDefault();

    // Get the data-title attributes of the active labels
    var category = $("#sel_category li.active label").attr("data-title");
    var selcity = $("#sel_city li.active label").attr("data-title");
	var propertytype = $("#sel_propertytype li.active label").attr("data-title");
	
	//alert(selcity);

    // Initialize the base URL
    var baseUrl = window.location.origin + "/all-projects?project_type=Commercial";

    // Initialize the query parameters array
    var queryParams = [];

    // Add the project_type parameter if it's not empty
    

    // Add the city parameter if selcountry is not undefined
    //if (typeof selcountry !== 'undefined' && selcountry !== '') {
        //queryParams.push('city=' + selcountry);
    //}

	if (category) {
        queryParams.push('category=' + category);
    }

    // Add the locality parameter if selcity is not undefined
    if (typeof selcity !== 'undefined' && selcity !== '') {
        queryParams.push('city=' + selcity);
    }
	
	if (propertytype) {
        queryParams.push('property_type=' + propertytype);
    }

    // Construct the final URL
    var finalUrl = baseUrl;
    if (queryParams.length > 0) {
        finalUrl += '&' + queryParams.join('&');
    }
	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Commercial Project - Filter Search",			
		'Category':category,
		'City':selcity,
		'Type':propertytype
	});		

    // Redirect to the final URL
    window.location.href = finalUrl;
});


	
	$(document).on('click', '.searchproject', function () {
		//alert("test");
		var title = $("#projectSearchResult").val();
		var k = 0;
		var rid = 'All';
		//if ($(this).val()) {
		//if($(this).val().length > 2){
		$.ajax({
			type: "post",
			url: site_url + 'views/ajax?_wrapper_format=drupal_ajax&view_name=project_listing_homepage&search_by_title=' + title + '&view_display_id=block_4&_drupal_ajax=1',
			success: function (result) {
				for (var i = 0; i < result.length; i++) {
					if (result[i].command == 'insert' && result[i].method == 'replaceWith') {
						// if(result[i].data.indexOf("blogsContentWrap") != -1){
						//console.log(result[i].data);
						//k++;
						$(".filterresult").html('');
						$(".filterresult").html(result[i].data);
						$(".cardDiv").addClass("aos-animate");
						//}else{
						//$(".filterresult").html('No Property Found!');
						//}
						$("#views-exposed-form-project-listing-homepage-block-4").hide();
					}
				}
				var rcount = $('.filterresult .swiper-slide').length;
				var title = $("#projectSearchResult").val();
				$(".filterDataCount").html(rcount + " Developments matching your search").show();
				//console.log('Search Project');
				//console.log(title);
				window.dataLayer.push({
					'event': "Search Project",
					'Keyword': title,
					'Result Count': rcount
				});
				
				let searchInput = jQuery(".projectSearchDiv input#projectSearchResult").val();
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					'event': 'search_interaction',
					'click_text': "", //searchInput, //'Search Icon',
					'search_term': searchInput,
					'link_header': "All-Projects Page Search",
					'result_count': rcount, //resultCountNo,
					'source_page_url': sourceURL,
					'destination_page_url': "" //destinationURL.replace(window.location.origin, "")
				});
				
				console.log(window.dataLayer); return false;
			}
		});
		//}

		//}
	});
	
	$('#projectSearchResult').keypress(function(event) {
		if (event.which === 13) {                     
            event.preventDefault();
			var title = $("#projectSearchResult").val();
		var k = 0;
		var rid = 'All';
		//if ($(this).val()) {
		//if($(this).val().length > 2){
		$.ajax({
			type: "post",
			url: site_url + 'views/ajax?_wrapper_format=drupal_ajax&view_name=project_listing_homepage&search_by_title=' + title + '&view_display_id=block_4&_drupal_ajax=1',
			success: function (result) {
				for (var i = 0; i < result.length; i++) {
					if (result[i].command == 'insert' && result[i].method == 'replaceWith') {
						// if(result[i].data.indexOf("blogsContentWrap") != -1){
						//console.log(result[i].data);
						//k++;
						$(".filterresult").html('');
						$(".filterresult").html(result[i].data);
						$(".cardDiv").addClass("aos-animate");
						//}else{
						//$(".filterresult").html('No Property Found!');
						//}
						$("#views-exposed-form-project-listing-homepage-block-4").hide();
					}
				}
				var rcount = $('.filterresult .swiper-slide').length;
				var title = $("#projectSearchResult").val();
				$(".filterDataCount").html(rcount + " Developments matching your search").show();
				//console.log('Search Project');
				//console.log(title);
				window.dataLayer.push({
					'event': "Search Project",
					'Keyword': title,
					'Result Count': rcount
				});
			}
		});
					
        }else{
			if(jQuery(this).val() == ''){
				jQuery(".serachAutofillDivAllp").hide();
			}else{
			//console.log("/searchall/" + jQuery(this).val());
			jQuery(".serachAutofillDivAllp .swiper-slide").load("/searchall/" + encodeURIComponent(jQuery(this).val()));
			jQuery(".serachAutofillDivAllp").show();
			var projecttitle = jQuery(".projecttitle").text();
			var projecid = jQuery(".projecid").text();
			var rcount = $('#searchwres li').length;
			
			setTimeout(function () {
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
			}, 1000)
			}
		}
	});

	$(document).on('change', '#sel_city input[type=checkbox]', function (e) {
		var citydrop_args = '';
		if ($('#sel_city input[type=checkbox]').hasClass('active')) {
			var citycount = $('#sel_city input[type=checkbox].active').length;
			if (citycount > 1) {
				$('#sel_city input[type=checkbox].active').each(function () {
					citydrop_args += $(this).data('id') + '+';
				});
				citydrop_args = citydrop_args.substring(0, citydrop_args.length - 1);
			} else {
				citydrop_args = $('#sel_city input[type=checkbox].active').data('id');
			}
		}
		var cityval = $(this).data('id');
		if (cityval != '') {
			$("#sel_loc").html('');
			$.ajax({
				type: "post",
				url: site_url + 'views/ajax?_wrapper_format=drupal_ajax',
				data: "view_name=locality&view_args=" + citydrop_args + "&view_display_id=block_1&_drupal_ajax=1",
				success: function (result) {
					//$(".searchresult").html(result.length+" Properties matching your search");
					for (var i = 0; i < result.length; i++) {
						if (result[i].command == 'insert' && result[i].method == 'replaceWith') {

							$("#sel_loc").html('');
							$("#sel_loc").html(result[i].data);


						}
					}
				}
			});
		}
	});
	
	setTimeout(function () {
		if(luxProp != undefined && luxProp[4].toLowerCase().includes('luxury')){
			jQuery("ul.staticlinksUl").remove();
		}else{
			jQuery('#wpheader').html('<a href="https://wa.me/917718893537?text=Hi" tabindex="0" role="link" aria-label="Chat" target="_blank" class="wpclick" onclick="chatclick()"><img src="https://www.thedomus.in/themes/thedomusnew/images/svg/chat.svg" alt="Chat" class="img-fluid"> Chat</a>');
		}	
	}, 1000);

	/*setTimeout(function () {


		var wptext = jQuery(".wptext").text();
		if (wptext != '') {
			jQuery('#whatsapp').html('<a href="' + wptext + '" tabindex="0" role="link" aria-label="Chat" target="_blank"- class="wpclick"> Chat</a>');

		} else {
			jQuery('#whatsapp').html('<a href="http://wa.me/+917718893537?text=Hi" tabindex="0" role="link" aria-label="Chat" target="_blank" class="wpclick"> Chat</a>');

		}
	}, 1000);*/
	
function hashValue(value) {
  return CryptoJS.SHA256(value.trim().toLowerCase()).toString();
}	
	$(document).on('click', '.contactusform', function (e) {
		if ($(".webform-submission-get-in-touch-add-form .form-item-name .name_error").length == 0) {
			$("input[name='name']").after("<div class='name_error errorclass'></div>");
			$("input[name='e_mail_id']").after("<div class='email_error errorclass'></div>");
			$("input[name='mobile_number']").after("<div class='mobile_error errorclass'></div>");
			$(".locationlist").after("<div class='location_error errorclass'></div>");
			$(".countrilist").after("<div class='country_error errorclass'></div>");
			$(".citylist").after("<div class='city_error errorclass'></div>");
			$(".deptlist").after("<div class='dept_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .consent_error").length == 0) {
			$("#edit-consent").after("<div class='consent_error errorclass'></div>");
		}
		$(".name_error").html('');
		$(".email_error").html('');
		$(".mobile_error").html('');
		$(".location_error").html('');
		$(".country_error").html('');
		$(".city_error").html('');
		$(".dept_error").html('');
		$(".consent_error").html('');
		var error = false;
		var nameRegex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;
		var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var mobileRegex = /^[0-9]{10}$/;
		if (!$("input[name='name']").val().match(nameRegex)) {
			$(".name_error").html(Drupal.t('Please enter valid name'));
			error = true;
		}
		if (!$("input[name='e_mail_id']").val().match(emailRegex)) {
			$(".email_error").html(Drupal.t('Please enter valid email'));
			error = true;
		}
		if (!$("input[name='mobile_number']").val().match(mobileRegex)) {
			$(".mobile_error").html('Please enter a valid Mobile');
			error = true;
		}
		if($(".locationlist span").html() == ''){
			$(".location_error").html('Please select Location');
			error = true;
		}
		if($(".countrilist span").html() == ''){
			$(".country_error").html('Please select Country');
			error = true;
		}
		if($(".citylist span").html() == ''){
			$(".city_error").html('Please select City');
			error = true;
		}
		if($(".deptlist span").html() == ''){
			$(".dept_error").html('Please select Department');
			error = true;
		}
		if (!$('#edit-consent').is(':checked')) {
			$(".consent_error").html('You must agree to the Privacy Policy.');
			error = true;
		}
		if (error == true) {
			return false;
		} else {
				let mobile_WE = $("#edit-mobile-number").val();
				webengage.user.login(mobile_WE);
				console.log("WE-Login_mobile:"+mobile_WE);
				
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					'event': "Get in Touch - submit ",
					'page_url': window.location.href
				});
				
			let clickText = jQuery(this).val();
			let user_name = jQuery("form.webform-submission-get-in-touch-form #edit-name").val();
			let hashed_mail = jQuery("form.webform-submission-get-in-touch-form #edit-e-mail-id").val();
			let hashed_contact = jQuery("form.webform-submission-get-in-touch-form #edit-mobile-number").val();
			let selected_country = jQuery("form.webform-submission-get-in-touch-form span.selcetdcountry").text().trim();
			let selected_city = jQuery("form.webform-submission-get-in-touch-form .citylist .dropList ul#citylst li.active").text().trim();
			let message = jQuery("form.webform-submission-get-in-touch-form #edit-message").val();
			
			if(countrySelGA == false){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : selected_country,
					'form_name': "Get in touch",
					'steps_completed': 4
				});
				countrySelGA = true;
			}
			
			if(citySelGA == false){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : selected_city,
					'form_name': "Get in touch",
					'steps_completed': 5
				});
				citySelGA = true;
			}
			
			window.dataLayer.push({
				'event': "lead_form_success",
				'form_name': "Get in touch",
				'click_text': clickText,
				'user_name' : user_name,
				'hashed_mail': hashValue(hashed_mail),
				'selected_country': selected_country,
				'selected_city': selected_city,
				'hashed_contact': hashValue(hashed_contact),
				'message' : message
			});
			console.log(window.dataLayer); //return false;	
				
			$(this).parents('form').submit();
		}
	});
	
	/*$(document).on('click', '.enquiryform', function (e) {
		e.preventDefault(); // Prevent default form submission

		if ($(".webform-submission-enquiry-add-form .form-item-name .name_error").length == 0) {
			$("input[name='name']").after("<div class='name_error errorclass'></div>");
			$("input[name='email_id']").after("<div class='email_error errorclass'></div>");
			$("input[name='mobile_number']").after("<div class='mobile_error errorclass'></div>");
			$(".countrilist").after("<div class='country_error errorclass'></div>");
			$(".citylist").after("<div class='city_error errorclass'></div>");
			$(".receiveupdate").after("<div class='whatsappupdate_error errorclass'></div>");
			$(".otp").after("<div class='otp_error errorclass'></div>");
		}

		$(".name_error").html('');
		$(".email_error").html('');
		$(".mobile_error").html('');
		$(".country_error").html('');
		$(".city_error").html('');
		$(".otp_error").html('');

		var error = false;
		var nameRegex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;
		var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var mobileRegex = /^[0-9]{10}$/;
		if (!$("input[name='name']").val().match(nameRegex)) {
			$(".name_error").html(Drupal.t('Please enter valid name'));
			error = true;
		}
		if (!$("input[name='email_id']").val().match(emailRegex)) {
			$(".email_error").html(Drupal.t('Please enter valid email'));
			error = true;
		}
		if (!$("input[name='mobile_number']").val().match(mobileRegex)) {
			$(".mobile_error").html('Please enter a valid Mobile');
			error = true;
		}
		
		if ($(".countrilist span").html() == '') {
			$(".country_error").html('Please select Country');
			error = true;
		}
		if ($(".citylist span").html() == '') {
			$(".city_error").html('Please select City');
			error = true;
		}

		// Check if the selected country is India
		//var selectedCountry = $(".countrilist span").html();
		var selectedCountry = $("#countrylst li.active label").attr("data-title");
		var otpRequired = (selectedCountry === 'India');

		if (otpRequired) {
			var otp = $("input[name='otp']").val();

			if (otp == '') {
				$(".otp_error").html('Please enter the OTP');
				error = true;
			}
		}

		if (error) {
			return false;
		} else {
			var $form = $(this).parents('form'); // Store the form reference
			
			if (otpRequired) {
				// Perform OTP validation only if the country is India
				$.ajax({
					type: "POST",
					url: base_url + '/validate-otp',
					data: { otp: otp },
					success: function (result) {
						if (result.message === 'Invalid OTP') {
							$(".otp_error").html(result.message);
						} else {
							jQuery(".otpval").css("display", "none");
							jQuery(".enquiryform").hide();
							$(".loader-container").html('Processing your request...');
							var projecttitle = $(".projecttitle").text();
							var projecid = $(".projecid").text();
							var name = $("#edit-name").val();
							var email = $("#edit-email-id").val();
							var mobile = $("#edit-mobile-number").val();
							var selCntry = $("#countrylst li.active label").attr("data-title");
							//var selcity = $("#citylst li.active label").attr("data-title");
							var cityName = $('.citylist .selcetdcity').text();
							var waopt = 'True';
							window.dataLayer = window.dataLayer || [];
							window.dataLayer.push({
								'event': "Country Submit",
								'Country': selCntry,
								'Project Name': projecttitle,
								'Project Id': projecid
							});
							window.dataLayer.push({
								'event': "City Submit",
								'Country': selcity,
								'Project Name': projecttitle,
								'Project Id': projecid
							});    
							window.dataLayer.push({
								'event': "Lead Submit",
								'Project Name': projecttitle,
								'Project Id': projecid,
								'page_url': window.location.href,
								'Name': name,
								'EMail': email,
								'Country': selCntry,
								'City': cityName,
								'Mobile Number': mobile,
								'WA opt in': waopt
							});

							// Submit the form after processing
							$form.submit();
						}
					},
					complete: function () {
						$(".enquiryform").removeAttr('disabled').text('Submit');
					}
				});
			} else {
				// Directly handle form submission if OTP is not required
				jQuery(".otpval").css("display", "none");
				jQuery(".enquiryform").hide();
				$(".loader-container").html('Processing your request...');
				var projecttitle = $(".projecttitle").text();
				var projecid = $(".projecid").text();
				var name = $("#edit-name").val();
				var email = $("#edit-email-id").val();
				var mobile = $("#edit-mobile-number").val();
				var selCntry = $("#countrylst li.active label").attr("data-title");
				var selcity = $("#citylst li.active label").attr("data-title");
				var waopt = 'True';
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					'event': "Country Submit",
					'Country': selCntry,
					'Project Name': projecttitle,
					'Project Id': projecid
				});
				window.dataLayer.push({
					'event': "City Submit",
					'Country': selcity,
					'Project Name': projecttitle,
					'Project Id': projecid
				});    
				window.dataLayer.push({
					'event': "Lead Submit",
					'Project Name': projecttitle,
					'Project Id': projecid,
					'page_url': window.location.href,
					'Name': name,
					'EMail': email,
					'Country': selCntry,
					'City': selcity,
					'Mobile Number': mobile,
					'WA opt in': waopt
				});

				// Submit the form after processing
				$form.submit();
			}

			return false; // Prevent form submission until OTP is validated
		}
	});*/
	

	$(document).on('click', '.enquiryform', function (e) {
		e.preventDefault(); // Prevent default form submission
		//alert($("input[name='captcha_response']").val());
		var captchaId = $("input[name='captcha_sid']").val();
		var captchaValue = $("input[name='captcha_response']").val();
		var selectedCountry = $("#countrylst li.active label").attr("data-title");
		//console.log(selectedCountry);
		if ($(".webform-submission-add-form .form-item-name .name_error").length == 0) {
			$("input[name='name']").after("<div class='name_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .form-item-email-id .email_error").length == 0) {
			$("input[name='email_id']").after("<div class='email_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .form-item-mobile-number .mobile_error").length == 0) {
			$("input[name='mobile_number']").after("<div class='mobile_error errorclass'></div>");
		}
		if ($(".wwebform-submission-add-form .country_error").length == 0) {
			$(".countrilist").after("<div class='country_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .city_error").length == 0) {
			$(".citylist").after("<div class='city_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .form-item-cityname .cityname_error").length == 0) {
			$("input[name='cityname']").after("<div class='cityname_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .whatsappupdate_error").length == 0) {
			$(".receiveupdate").after("<div class='whatsappupdate_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .consent_error").length == 0) {
			$("#edit-consent").after("<div class='consent_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .otp_error").length == 0) {
			$(".otp").after("<div class='otp_error errorclass'></div>");
		}
		if ($(".webform-submission-add-form .captcha_error").length == 0) {
			$("input[name='captcha_response']").after("<div class='captcha_error errorclass'></div>");
		}


		$(".name_error").html('');
		$(".email_error").html('');
		$(".mobile_error").html('');
		$(".country_error").html('');
		$(".city_error").html('');
		$(".cityname_error").html('');
		$(".otp_error").html('');
		$(".captcha_error").html('');

		var error = false;
		var nameRegex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;
		var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var mobileRegex = /^[0-9]{10}$/;
		var ninemobileRegex = /^[0-9]{9}$/;
		var hsmobileRegex = /^[0-9]{8}$/;
		var ukmobileRegex = /^[0-9]{9,10}$/;
		var kuwaitmobileRegex = /^[0-9]{7,8}$/;
		var othercountrymobileRegex = /^[0-9]{5,15}$/;
		if (!$("input[name='name']").val().match(nameRegex)) {
			$(".name_error").html(Drupal.t('Please enter valid name'));
			error = true;
		}
		
		if (!$("input[name='email_id']").val().match(emailRegex)) {
			$(".email_error").html(Drupal.t('Please enter valid email'));
			error = true;
		}
		if(selectedCountry == 'India' || selectedCountry == 'United States' || selectedCountry == 'Canada'){
			if (!$("input[name='mobile_number']").val().match(mobileRegex)) {
				$(".mobile_error").html('Please enter a valid number');
				error = true;
			}
		}	
		else if(selectedCountry == 'United Arab Emirates' || selectedCountry == 'Kenya' || selectedCountry == 'Saudi Arabia'){
			if (!$("input[name='mobile_number']").val().match(ninemobileRegex)) {
				$(".mobile_error").html('Please enter a valid number');
				error = true;
			}
		}else if (selectedCountry == 'Hong Kong' || selectedCountry == "Singapore") {
				//console.log("Validating for Hong Kong or Singapore"); // Log for entering the condition block
				if (!$("input[name='mobile_number']").val().match(hsmobileRegex)) {
					//console.log("Mobile number failed validation:", $("input[name='mobile_number']").val()); // Log the actual value
					$(".mobile_error").html('Please enter a valid number');
					error = true;
				} else {
					//console.log("Mobile number passed validation:", $("input[name='mobile_number']").val());
				}
		}else if(selectedCountry == 'United Kingdom'){
			if (!$("input[name='mobile_number']").val().match(ukmobileRegex)) {
				$(".mobile_error").html('Please enter a valid number');
				error = true;
			}
		}else if(selectedCountry == 'Kuwait'){
			//console.log("kuwait");
			if (!$("input[name='mobile_number']").val().match(kuwaitmobileRegex)) {
				$(".mobile_error").html('Please enter a valid number');
				error = true;
			}
		}else{
			//console.log(selectedCountry);
			if (!$("input[name='mobile_number']").val().match(othercountrymobileRegex)) {
				$(".mobile_error").html('Please enter a valid number');
				error = true;
			}
		}		
		
		if ($(".countrilist span").html() == '') {
			$(".country_error").html('Please select Country');
			error = true;
		}
		if(selectedCountry == 'India' || selectedCountry == 'United States' || selectedCountry == 'Canada' || selectedCountry == 'United Arab Emirates' || selectedCountry == 'Kenya' || selectedCountry == 'Saudi Arabia' || selectedCountry == 'Hong Kong' || selectedCountry == "Singapore" || selectedCountry == 'United Kingdom' || selectedCountry == 'Kuwait'){
			if ($(".citylist span").html() == '') {
			$(".city_error").html('Please select City');
			error = true;
			}
		}else{
			if (!$("input[name='cityname']").val().match(nameRegex)) {
			$(".cityname_error").html(Drupal.t('Please enter valid city'));
			error = true;
			}
		}
		
		
		
		if ($("input[name='captcha_response']").val() == '') {
			$(".captcha_error").html('Please enter captcha code');
			error = true;
		}
		
		if (!$('#edit-consent').is(':checked')) {
			$(".consent_error").html('You must agree to the Privacy Policy.');
			error = true;
		}
		var clickText = $(this).val();
		//#let clickText = jQuery(this).val();
		
		var name = $("input[name='name']").val();
		var email = $("input[name='email_id']").val();
		var mobile = $("input[name='mobile_number']").val();
		var country = $('.dropDownDiv.normalDropDown.countrilist .selcetdcountry').text();
		var city = $('.dropDownDiv.normalDropDown.citylist .selcetdcity').text();
		localStorage.setItem('name', name);
		localStorage.setItem('email', email);
		localStorage.setItem('mobile', mobile);
		localStorage.setItem('country', country);
		localStorage.setItem('city', city);
		/*if (!validateCaptcha(captchaValue, captchaId)) {
		  $(".captcha_error").html('Please enter valid captcha code');
		  error = true;
		}*/
		// Check if the selected country is India
		//var selectedCountry = $(".countrilist span").html();
		
		var otpRequired = (selectedCountry === 'India');

		if (otpRequired) {
			var otp = $("input[name='otp']").val();

			if (otp == '') {
				$(".otp_error").html('Please enter the OTP');
				error = true;
			}
		}
		

		if (error) {
			//console.log("form submit failed");
			return false;
		} else {
			//console.log("form submit success");
			var $form = $(this).parents('form'); // Store the form reference
			
			if (otpRequired) {
				// Perform OTP validation only if the country is India
				$.ajax({
					type: "POST",
					url: base_url + '/validate-otp',
					data: { otp: otp },
					success: function (result) {
						if (result.message === 'Invalid OTP') {
							$(".otp_error").html(result.message);
						} else {
							jQuery(".otpval").css("display", "none");
							jQuery(".enquiryform").hide();
							$(".loader-container").html('Processing your request...');
							var projecttitle = $(".projecttitle").text();
							var projecid = $(".projecid").text();
							var name = $("#edit-name").val();
							var email = $("#edit-email-id").val();
							var mobile = $("#edit-mobile-number").val();
							//var selCntry = $("#countrylst li.active label").attr("data-title");
							var selCntry = $('.dropDownDiv.normalDropDown.countrilist .selcetdcountry').text();
							//var selcity = $("#citylst li.active label").attr("data-title");
							var selcity = $('.dropDownDiv.normalDropDown.citylist .selcetdcity').text();
							var isChecked = jQuery(".receiveupdate").is(":checked");
							if (isChecked) {
								var waopt = 1;
							} else {
								var waopt = 0;
							}
							
							//var waopt = 'True';
							//if ($('[role="alert"]').length > 0) {
								webengage.user.login(mobile);
																	  
								window.dataLayer = window.dataLayer || [];
								window.dataLayer.push({
									'event': "Country Submit",
									'Country': selCntry,
									'Project Name': projecttitle,
									'Project Id': projecid
								});
								window.dataLayer.push({
									'event': "City Submit",
									'Country': selcity,
									'Project Name': projecttitle,
									'Project Id': projecid
								});
								window.dataLayer = window.dataLayer || [];
								window.dataLayer.push({
									'event': "WhatsApp Opt in",
									'Project Name': projecttitle,
									'Project Id': projecid,
									'City': selcity,
									'Status': waopt
								});
								if(waopt == 1){
									webengage.user.setAttribute('we_whatsapp_opt_in', true);
								}
								else{
									webengage.user.setAttribute('we_whatsapp_opt_in', false);
								}
								
								window.dataLayer.push({
									'event': "Lead Submit",
									'Project Name': projecttitle,
									'Project Id': projecid,
									'page_url': window.location.href,
									'Name': name,
									'EMail': email,
									'Country': selCntry,
									'City': selcity,
									'Mobile Number': mobile,
									'WA opt in': waopt
								});
							//}	
							
							
							let DL = {'event': "lead_form_success", 'form_name': "Enquire", 'click_text' : clickText, 'user_name': name, 'hashed_mail': hashValue(email), 'selected_country': selCntry, 'selected_city': selcity, 'hashed_contact': hashValue(mobile) };
							leadFormSubmit(DL);
							
							/* window.dataLayer = window.dataLayer || [];
							window.dataLayer.push({
								'event': "lead_form_success",
								'form_name': "Enquire",
								'click_text': "Submit", //clickText, //
								'user_name' : name,
								'hashed_mail': hashValue(email),
								'selected_country': selCntry,
								'selected_city': selcity,
								'hashed_contact': hashValue(mobile)
							}); */


							// Submit the form after processing
							$form.submit();
						}
					},
					complete: function () {
						$(".enquiryform").removeAttr('disabled').text('Submit');
					}
				});
			} else {
				// Directly handle form submission if OTP is not required
				jQuery(".otpval").css("display", "none");
				jQuery(".enquiryform").hide();
				$(".loader-container").html('Processing your request...');
				var projecttitle = $(".projecttitle").text();
				var projecid = $(".projecid").text();
				var name = $("#edit-name").val();
				var email = $("#edit-email-id").val();
				var mobile = $("#edit-mobile-number").val();
				//var selCntry = $("#countrylst li.active label").attr("data-title");
				var selCntry = $('.dropDownDiv.normalDropDown.countrilist .selcetdcountry').text();
				//var selcity = $("#citylst li.active label").attr("data-title");
				var selcity = $('.dropDownDiv.normalDropDown.citylist .selcetdcity').text();
				//var waopt = 'True';
				var isChecked = jQuery(".receiveupdate").is(":checked");
							if (isChecked) {
								var waopt = 1;
							} else {
								var waopt = 0;
							}
					
				//if ($('[role="alert"]').length > 0) {	
					webengage.user.login(mobile);				
											
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'event': "Country Submit",
						'Country': selCntry,
						'Project Name': projecttitle,
						'Project Id': projecid
					});
					window.dataLayer.push({
						'event': "City Submit",
						'Country': selcity,
						'Project Name': projecttitle,
						'Project Id': projecid
					}); 
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'event': "WhatsApp Opt in",
						'Project Name': projecttitle,
						'Project Id': projecid,
						'City': selcity,
						'Status': waopt
					});
					if(waopt == 1){
						webengage.user.setAttribute('we_whatsapp_opt_in', true);
					}
					else{
						webengage.user.setAttribute('we_whatsapp_opt_in', false);
					}								
					window.dataLayer.push({
						'event': "Lead Submit",
						'Project Name': projecttitle,
						'Project Id': projecid,
						'page_url': window.location.href,
						'Name': name,
						'EMail': email,
						'Country': selCntry,
						'City': selcity,
						'Mobile Number': mobile,
						'WA opt in': waopt
					});
				//}	
				
				let DL = {'event': "lead_form_success", 'form_name': "Enquire", 'click_text' : clickText, 'user_name': name, 'hashed_mail': hashValue(email), 'selected_country': selCntry, 'selected_city': selcity, 'hashed_contact': hashValue(mobile) };
				leadFormSubmit(DL);
					/* window.dataLayer.push({
						'event': "lead_form_success",
						'form_name': "Enquire",
						'click_text': "Submit", //clickText, //
						'user_name' : name,
						'hashed_mail': hashValue(email),
						'selected_country': selCntry,
						'selected_city': selcity,
						'hashed_contact': hashValue(mobile)
					}); */
				// Submit the form after processing
				$form.submit();
			}

			return false; // Prevent form submission until OTP is validated
		}
	});




	
	/*$(document).on('click', '.enquiryform', function (e) {
		if ($(".webform-submission-enquiry-add-form .form-item-name .name_error").length == 0) {
				$("input[name='name']").after("<div class='name_error errorclass'></div>");
				$("input[name='email_id']").after("<div class='email_error errorclass'></div>");
				$("input[name='mobile_number']").after("<div class='mobile_error errorclass'></div>");
				$(".countrilist").after("<div class='country_error errorclass'></div>");
				$(".citylist").after("<div class='city_error errorclass'></div>");
				//$(".form-item-resived-update-on-whatsapp").after("<div class='updatewhatsapp_error errorclass'></div>");
		}
	
		$(".name_error").html('');
		$(".email_error").html('');
		$(".mobile_error").html('');
		$(".country_error").html('');
		$(".city_error").html('');
		//$(".updatewhatsapp_error").html('');
		var error = false;
		var nameRegex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;
		var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var mobileRegex = /^[0-9]{10}$/;
		if (!$("input[name='name']").val().match(nameRegex)) {
			$(".name_error").html(Drupal.t('Please enter valid name'));
			error = true;
		}
		if (!$("input[name='email_id']").val().match(emailRegex)) {
			$(".email_error").html(Drupal.t('Please enter valid email'));
			error = true;
		}
		if (!$("input[name='mobile_number']").val().match(mobileRegex)) {
			$(".mobile_error").html('Please enter a valid Mobile');
			error = true;
		}
		
		if($(".countrilist span").html() == ''){
			$(".country_error").html('Please select Country');
			error = true;
		}
		if($(".citylist span").html() == ''){
			$(".city_error").html('Please select City');
			error = true;
		}
		
		
		if (error == true) {
			return false;
		} else {
			$(this).parents('form').submit();
		}
	});*/
});



var fliterTrigger = false;
jQuery(window).on('load', function() {
	setTimeout(() => {
		fliterTrigger = true;
		console.log("Executed after 2 seconds");
	}, 2000); // 1000 ms = 1 second
	
	// page: /all-projects
	if(window.location.pathname == "/all-projects"){
		setInterval(() => {
			const currentParams = new URLSearchParams(window.location.search);

			$(".filterresult .loadData a#projectclick").each(function () {
				let url = new URL($(this).attr("href"), window.location.origin);

				currentParams.forEach((value, key) => {
					url.searchParams.set(key, value);
				});
				$(this).attr("href", url.pathname + url.search + url.hash);
			}); // All-project results to UTM parameter pass
			//console.log(currentParams);
			
			$("#searchwres ul li a.manualsearch").each(function () {
				let url = new URL($(this).attr("href"), window.location.origin);

				currentParams.forEach((value, key) => {
					url.searchParams.set(key, value);
				});
				$(this).attr("href", url.pathname + url.search + url.hash);
			}); // Other Search Dropdown Our Project/ Top right/ All project
			
			
			
		}, 1000); // 1000 ms = 1 second
	}else{
	
		setInterval(() => {
			const currentParams = new URLSearchParams(window.location.search);
			
			$("#searchwres ul li a.manualsearch").each(function () {
				let url = new URL($(this).attr("href"), window.location.origin);

				currentParams.forEach((value, key) => {
					url.searchParams.set(key, value);
				});
				$(this).attr("href", url.pathname + url.search + url.hash);
			}); // Other Search Dropdown Our Project/ Top right/ All project		
			
		}, 1000); // 1000 ms = 1 second
	}
	
});



jQuery(document).on('input', '#searchInput', function () {
	if (jQuery(this).val() == '') {
		jQuery(".serachAutofillDiv").hide();
	}
	else {
		//console.log("/searchs/" + jQuery(this).val());
		var value= jQuery(this).val();
		jQuery(".serachAutofillDiv .swiper-slide").load("/titlesearch?title=" + encodeURIComponent(value));
		jQuery(".serachAutofillDiv").show();
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var rcount = $('#searchwres li').length;
		//alert(rcount);
		/*window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "Search",
			'page_url': window.location.href,
			'Project Name': projecttitle,
			'Project ID': projecid,
			'Keyword Typed': jQuery(this).val(),
			'Total results': rcount
		});*/
		
		setTimeout(function () {
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
		}, 1000)
	}
});

jQuery(document).on('input', '.plsearch', function () {
	if (jQuery(this).val() == '') {
		jQuery(".serachAutofillDiv").hide();
	}
	else {
		//console.log("/searchs/" + jQuery(this).val());
		jQuery(".serachAutofillDiv .swiper-slide").load("/searchs/" + encodeURIComponent(jQuery(this).val()));
		jQuery(".serachAutofillDiv").show();
		var projecttitle = jQuery(".projecttitle").text();
		var projecid = jQuery(".projecid").text();
		var rcount = $('#searchwres li').length;
		//alert(rcount);
		/*window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "Search",
			'page_url': window.location.href,
			'Project Name': projecttitle,
			'Project ID': projecid,
			'Keyword Typed': jQuery(this).val(),
			'Total results': rcount
		});*/
		
		setTimeout(function () {
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
		}, 1000)
	}
});




jQuery(document).on('click', '.searchBtn', function () {
    if (jQuery('#searchInput').val() == '') {
        jQuery(".finalResultDiv").hide();
    } else {
        // Load the search results into the finalResultDiv
        jQuery(".finalResultDiv").load("/searchclick/" + encodeURIComponent(jQuery('#searchInput').val()), function() {
            jQuery(".finalResultDiv").show();
            
            // Initialize Swiper instances after the content is loaded
            var tabSwiperSliderrVar1 = new Swiper(".tabSwiperSliderSearch", {
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
            
            var scrollVerticalSliderVar = new Swiper(".scrollVerticalSlider", {
                direction: "vertical",
                slidesPerView: "auto",
                freeMode: true,
                scrollbar: {
                    el: ".scrollVerticalSlider .swiper-scrollbar",
                    draggable: true,
                },
                mousewheel: true,
            });
            
            $(document).on('click', '.tabWrapper .tabHeading li a', function (e) {
                e.preventDefault();
                var $this = $(this);
					   
                $this.parents('.tabHeading').find('a').removeClass('active');
                $this.addClass('active');
                tabSwiperSliderrVar1.slideTo($this.attr('data-slide'), 1);
            });
            
            // Count the number of .tabData li elements
            var rcount = $('.tabData li').length;
			var title = jQuery('#searchInput').val();
            //console.log(rcount);
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "Project - Manual Search",
				'Keyword': title,
				'Result Count': rcount
			});
			
			clickSrchOurProj = false;
			//console.log(searchValue); return false;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "search_interaction",
				'result_count' : rcount,
				'link_header': "Header Search",
				'search_term' : jQuery('input#searchInput').val(),
				'click_text': "", //jQuery('input#searchInput').val(), //"Search icon",
				'source_page_url': window.location.pathname,
				'destination_page_url': ""
			});
			console.log("TopRightSearch: icon click", window.dataLayer); //return false;
		
        });
    }
});

jQuery(document).on('click', '.pressfilter', function () {

		//var year = $("#pressyear").attr('data-year');
		var selectedYear = $('#pressyear li.active').data('year');
		//alert(selectedYear);
		if(selectedYear == '' || selectedYear === 'undefined'){selectedYear = 'all'; }
		var selectedMonth = $('#pressmonth li.active').data('month');
		if (typeof selectedMonth === 'undefined') {
				selectedMonth = '';
			}
			
		var viewArgs = selectedYear;
		if (selectedMonth !== '') {
			viewArgs += "/" + selectedMonth;
		}	
		
		
			//alert("Please select Month");
		
			//window.location = "/all-news/"+year+"/"+val;
			$.ajax({
                url: "/press-release/"+viewArgs, // Replace with the actual API URL
                method: "GET", // Use "GET" or "POST" depending on your API
                dataType: "html", // Set the expected data type (here we assume HTML)

                // Callback function for success
                success: function (data) {
                    // Extract the content from the Ajax response using a jQuery selector
                    var tabContent = $(data).find(".presslist").html();

                    // Update the current HTML's .tab-wrapper with the fetched content
                    $(".presslist").html(tabContent);
					
                },

                // Callback function for error
                error: function (xhr, status, error) {
                    console.error("Ajax request failed:", error);
                }
            });
		
		
    });
	
	jQuery(document).on('click', '.insightfilter', function () {

		//var year = $("#pressyear").attr('data-year');
		var selectedYear = $('#insightsyear li.active').data('year');
		//alert(selectedYear);
		if(selectedYear == '' || selectedYear === undefined){ selectedYear = 'all'; }
						
   
							  
  
		var selectedMonth = $('#insightsmonth li.active').data('month');
		if (selectedMonth === undefined) {
				selectedMonth = '';
			}
			
		var viewArgs = selectedYear;
		if (selectedMonth !== '') {
			viewArgs += "/" + selectedMonth;
		}	
		
						
		
			//alert("Please select Month");
		
			//window.location = "/all-news/"+year+"/"+val;
			$.ajax({
                url: "insights/"+viewArgs, // Replace with the actual API URL
                method: "GET", // Use "GET" or "POST" depending on your API
                dataType: "html", // Set the expected data type (here we assume HTML)

                // Callback function for success
                success: function (data) {
                    // Extract the content from the Ajax response using a jQuery selector
                    var tabContent = $(data).find(".newslist").html();

                    // Update the current HTML's .tab-wrapper with the fetched content
                    $(".newslist").html(tabContent);
					
                },

                // Callback function for error
                error: function (xhr, status, error) {
                    console.error("Ajax request failed:", error);
                },
				complete: function(data) {
					$(".listingDiv a#pressclickpage").addClass('aos-animate');
                }
            });
		
		
    });	
	
	
jQuery(document).on('click', '.newsfilter', function () {

		//var year = $("#pressyear").attr('data-year');
		var selectedYear = $('#newsyear li.active').data('year');
		//alert(selectedYear);
		if(selectedYear == '' || selectedYear === 'undefined'){selectedYear = 'all'; }
		var selectedMonth = $('#newsmonth li.active').data('month');
		if (typeof selectedMonth === 'undefined') {
				selectedMonth = '';
			}
			
		var viewArgs = selectedYear;
		if (selectedMonth !== '') {
			viewArgs += "/" + selectedMonth;
		}	
		
		
			//alert("Please select Month");
		
			//window.location = "/all-news/"+year+"/"+val;
			$.ajax({
                url: "/news/"+viewArgs, // Replace with the actual API URL
                method: "GET", // Use "GET" or "POST" depending on your API
                dataType: "html", // Set the expected data type (here we assume HTML)

                // Callback function for success
                success: function (data) {
                    // Extract the content from the Ajax response using a jQuery selector
                    var tabContent = $(data).find(".newslist").html();

                    // Update the current HTML's .tab-wrapper with the fetched content
                    $(".newslist").html(tabContent);
					
                },

                // Callback function for error
                error: function (xhr, status, error) {
                    console.error("Ajax request failed:", error);
                }
            });
		
		
    });	
	

jQuery(document).on('click', '.changeFinancialYear li', function () {
    var title = jQuery(this).find('label').attr('data-title'); // Corrected selector
    var fname = jQuery('#fname').val();
    var sinfo = jQuery('#sinfo').val();
	jQuery("#overlay").show();
    jQuery("#loader").show();
    if (title.includes('FY')) {
        var year = title.split('FY')[1].trim();
		if(sinfo == 'Sinfo'){
			var year = title.split('FY')[1].trim();
			var parentId = jQuery(this).closest('.accordionContent').find('.viewList').eq(1).attr('id');
			if(parentId == 'qip'){
				var blockname = 'block_2';
			}
			else if(parentId == 'dividend'){
				var blockname = 'block_3';
			}else if(parentId == 'schemeofarrangement'){
				var parentId = 'scheme_of_arrangement';
				//var blockname = 'block_3'; // OLD
				var blockname = 'block_1'; // 04sep25
			}else{
				var blockname = 'block_1';
			}
			$.ajax({
				type: "post",
				url: site_url + 'views/ajax?_wrapper_format=drupal_ajax&view_name=shareholder_information&view_args=' + parentId + '/' + year + '&view_display_id='+blockname+'&_drupal_ajax=1',
				success: function (result) {
					if(parentId == 'scheme_of_arrangement'){
						parentId = 'schemeofarrangement';
					}
					
					for (var i = 0; i < result.length; i++) {
						if (result[i].command == 'insert' && result[i].method == 'replaceWith') {
							$("#" + parentId).html(result[i].data);
						}
					}
				}
			});
		}
		else{
			var array = ["Annual", "Quarter1", "Quarter2", "Quarter3", "Quarter4"];
			jQuery.each(array, function(index, value) {
				getfinancialreport(value,year,fname);
			});
			if(fname == 'Financials'){
				$('.governance_report .tabHeading li:eq(0) a').trigger('click');
				//$('.governance_report .tabHeading li:first-child a').trigger('click');
				/* //$('.governance_report .tabHeading li:nth-child(2) a').trigger('click');
				$('.governance_report .tabHeading li').eq(1).find('a').trigger('click');
				console.log('Financials'); */
			}else{
				$(".governance_report .accordionHeading").removeClass('active');
				$(".governance_report .accordionContent").removeClass('active');
				$('.governance_report .accordionContent').slideUp();
				$("#Annual").prev(".accordionHeading").addClass('active');
			}
			$("#Annual").addClass('active');
			$("#Annual").slideDown();
		}
		setTimeout(function () {
			jQuery("#overlay").hide();
			jQuery("#loader").hide();
		}, 1500);
    } else {
		alert('Oops there is some issue. Please try again later');
	}
});

function getfinancialreport(value,year, fname){
									   
	$.ajax({
		type: "post",
		url: site_url + 'views/ajax?_wrapper_format=drupal_ajax&view_name=corporate_governance&view_args=' + year + '/' + value + '/' + fname + '&view_display_id=block_2&_drupal_ajax=1',
		success: function (result) {
			for (var i = 0; i < result.length; i++) {
				if (result[i].command == 'insert' && result[i].method == 'replaceWith') {
					$("#" + value).html(result[i].data);
				}
			}
		}
	});
}

																		
jQuery(document).on('click', '.changeascryear li', function () { 
var title = jQuery(this).find('label').attr('data-title');
var year = title.split('FY')[1].trim();
												  
var value = 'Annual';
//alert(year);
$.ajax({
		type: "post",
		url: site_url + 'views/ajax?_wrapper_format=drupal_ajax&view_name=corporate_governance&view_args=' + year + '/' + value +'&view_display_id=block_3&_drupal_ajax=1',
		success: function (result) {
			//console.log("test test");
			//console.log(result.length);
			//console.log(result);
			for (var i = 0; i < result.length; i++) {
				
				if (result[i].command == 'insert' && result[i].method == 'replaceWith') {
					//$("#test").html();
					jQuery(".ascreport").html(result[i].data);
				}
			}
		}
	});
});

let hasRequested = false;

jQuery(document).on('keyup', '.mobile', function () {
	
	const debounceTime = 300; // Debounce time in milliseconds
	let debounceTimer;

	// Function to handle OTP generation
	function generateOtp() {
		if (hasRequested) return false; // Prevent multiple requests

		let country = $("#countrylst li.active label").attr("data-title");
		let mobile = jQuery("input[name=mobile_number]").val();

		if (country == 'India' && mobile.length > 9 && !hasRequested) {
			hasRequested = true;
			jQuery.ajax({
				type: "POST",
				url: base_url + '/generate-otp',
				data: { mobile_number: mobile },
				success: function (result) {
					//hasRequested = false; // Reset flag after response
					if (result.message != 'Success') {
						alert(result.message);
					} else {
						jQuery(".otpval").css("display", "block");
						jQuery(".otp").focus();
						jQuery(".otptext").empty();
						jQuery(".otpval").after('<div class="d-flex justify-content-between align-item-center col-12 otptext"><p>You will get an OTP via SMS</p><p class="pointer-cursor counter">Resend OTP</p></div><div class="otp_error errorclass"></div>');
						webengage.user.login(mobile);
											 
						var otpButton = $(".counter");
						otpButton.text("01:30");
						otpButton.removeClass('pointer-cursor'); // Disable cursor style

						var countdownDuration = 90; // 90 seconds
						startCountdown(countdownDuration, otpButton);

						otpButton.off('click').on('click', function () {
							if ($(this).text() === "Resend OTP") {
								otpButton.text("01:30");
								otpButton.removeClass('pointer-cursor');
								startCountdown(countdownDuration, otpButton);
								hasRequested = false;
								generateOtp();
								// Add code to resend the OTP
							}
						});
					}
				},
				error: function () {
					//hasRequested = false; // Reset flag in case of error
				}
			});
		} else {
			jQuery(".otpval").css("display", "none");
			jQuery(".otptext").remove();
		}
	}

	// Debounce handler
	if (debounceTimer) {
		clearTimeout(debounceTimer);
	}
	debounceTimer = setTimeout(generateOtp, debounceTime);
});

// Countdown function
function startCountdown(duration, element) {
	let timer = duration, minutes, seconds;
	let interval = setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		element.text(minutes + ":" + seconds);

		if (--timer < 0) {
			clearInterval(interval);
			element.text("Resend OTP");
			element.addClass('pointer-cursor'); // Re-enable cursor style
		}
	}, 1000);
}

jQuery(document).ready(function($) {
  // Retrieve URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const projectType = urlParams.get('project_type');
  const propertyType = urlParams.get('property_type');
  const category = urlParams.get('category');
  const city = urlParams.get('city');
  const locality = urlParams.get('locality');
  const possessionStatus = urlParams.get('possession_status');
  const bedrooms = urlParams.get('bedrooms');
  const budget = urlParams.get('budget');

  // Log the URL parameters to ensure they are being retrieved correctly
  /*console.log('Project Type:', projectType);
  console.log('City:', city);
  console.log('Locality:', locality);
  console.log('Possession Status:', possessionStatus);
  console.log('Bedrooms:', bedrooms);
  console.log('Budget:', budget);*/

  // Search for labels with the same value in class "dropDownDiv"
  var matchedLabels = [];
  
  $('.dropDownDiv label').each(function() {
    const labelText = $(this).text().trim(); // Use .trim() to remove any extra whitespace

    // Log each label text to ensure correct comparison
    
	//console.log("labelText: "+labelText);
	
    if (labelText === projectType || labelText === propertyType || labelText === category || labelText === city || labelText === locality || labelText === possessionStatus || labelText === bedrooms || labelText === budget) {
		//console.log('Trigger Label Text:', labelText);
      // Trigger click event on sibling input
	  matchedLabels.push(labelText);
	  $(this).siblings('input').prop('checked',true);
	  
    }
  });
  
  var lastMatchedLabel = matchedLabels[matchedLabels.length - 1];

  $('.dropDownDiv label').each(function() {
	const labelText = $(this).text().trim(); // Use .trim() to remove any extra whitespace

    // Log each label text to ensure correct comparison
    
	
	
    if (labelText == lastMatchedLabel) {
	   $(this).siblings('input').prop('checked',false);
	  $(this).siblings('input').trigger("click");
	  $(".projectapply").trigger("click");
    }
  });
  
  if(projectType!='')
  {
	  setTimeout(function() {
        $('.dropDownDiv label').each(function() {
            const labelText = $(this).text().trim(); // Use .trim() to remove any extra whitespace

            // Log each label text to ensure correct comparison
            //console.log("TEST: " + labelText);

            if (labelText == projectType) {
                $(this).siblings('input').prop('checked', false);
                $(this).siblings('input').trigger("click");
				$(".projectapply").trigger("click");
            }
        });
	}, 1000); // 1000 milliseconds = 1 second
	setTimeout(function() {
		$(".filterDataCount").show();
	}, 500); // 1000 milliseconds = 1 second
  }
  
  if(propertyType!='')
  {
	  setTimeout(function() {
        $('.dropDownDiv label').each(function() {
            const labelText = $(this).text().trim(); // Use .trim() to remove any extra whitespace

            // Log each label text to ensure correct comparison
            //console.log("TEST: " + labelText);

            if (labelText == propertyType) {
                $(this).siblings('input').prop('checked', false);
                $(this).siblings('input').trigger("click");
				$(".projectapply").trigger("click");
            }
        });
    }, 500); // 1000 milliseconds = 1 second
  }
  
  
  
  if(locality!='')
  {
	  setTimeout(function() {
        $('.dropDownDiv label').each(function() {
            const labelText = $(this).text().trim(); // Use .trim() to remove any extra whitespace

            // Log each label text to ensure correct comparison
            //console.log("TEST: " + labelText);

            if (labelText == locality) {
                $(this).siblings('input').prop('checked', false);
                $(this).siblings('input').trigger("click");
				$(".projectapply").trigger("click");
            }
        });
    }, 500); // 1000 milliseconds = 1 second
  }
  
  if(category!='')
  {
	  //alert(category);
	  setTimeout(function() {
        $('.dropDownDiv label').each(function() {
            const labelText = $(this).text().trim(); // Use .trim() to remove any extra whitespace

            // Log each label text to ensure correct comparison
            //console.log("TEST: " + labelText);

            if (labelText == category) {
                $(this).siblings('input').prop('checked', false);
                $(this).siblings('input').trigger("click");
				$(".projectapply").trigger("click");
            }
        });
    }, 500); // 1000 milliseconds = 1 second
  }
    
  
});


(function (Drupal) {

	'use strict';

	Drupal.behaviors.thedomusnew = {
		attach(context, settings) {

			//console.log('It works!');

		}
	};

}(Drupal));



jQuery(document).ready(function($) {
	$('#jobsearch').on('keyup', function() {
		$('.expCard').show();
		filterWithCriteria();
	});
	  
	$('#jobmindiv li').on('click', function() {
		//alert("ok");
		$('#jobmindiv span:first').data("lival",$(this).text().trim());
		setTimeout(function() {
			filterWithCriteria();
		}, 1000);
		
    });
	$('#jobmaxdiv li').on('click', function() {
		//alert("ok");
		$('#jobmaxdiv span:first').data("lival",$(this).text().trim());
		setTimeout(function() {
			filterWithCriteria();
		}, 1000);
		
    });
	$(document).on("click","#worksitediv li",function(){
		//alert("ok");
		$('#worksitediv span:first').data("lival",$(this).text().trim());
		setTimeout(function() {
			filterWithCriteria();
		}, 1000);
	});
	$(document).on("click","#orgunitdiv li",function(){
		//alert("ok");
		$('#orgunitdiv span:first').data("lival",$(this).text().trim());
		setTimeout(function() {
			filterWithCriteria();
		}, 1000);
	});
	
	
	$('.clearBtn').on('click', function() {
		$('#jobsearch').val('').trigger('keyup');
		$(this).addClass('disabled');
		$('.expCard').show();
		$('#jobmindiv span:first').data("lival","");
		$('#jobmaxdiv span:first').data("lival","");
		$('#worksitediv span:first').data("lival","");
		$('#orgunitdiv span:first').data("lival","");

		updateFilterDataCount();
	});

	//worksite array
	var worksiteSet = new Set($('.worksite').map(function() {
		return $(this).text().trim();
	  }).get());
	
	  // Convert the Set back to an array and sort it in ascending order
	  var worksiteArray = Array.from(worksiteSet).sort();
	
	  // Generate HTML markup for each item in the sorted array
	  var html = '<ul>';
	  worksiteArray.forEach(function(worksite) {
		html += '<li><label>' + worksite + '</label></li>';
	  });
	  html += '</ul>';
	
	  // Insert the generated HTML into the element with id "worksite"
	  $('#worksite').html(html);


	  var orgunitSet = new Set($('.orgunit').map(function() {
		return $(this).text().trim();
	  }).get());
	
	  // Convert the Set back to an array and sort it in ascending order
	  var orgunitArray = Array.from(orgunitSet).sort();
	
	  // Generate HTML markup for each item in the sorted array
	  var html = '<ul>';
	  orgunitArray.forEach(function(orgunit) {
		html += '<li><label>' + orgunit + '</label></li>';
	  });
	  html += '</ul>';
	
	  // Insert the generated HTML into the element with id "orgunit"
	  $('#orgunit').html(html);


});

function filterWithCriteria() {
    var searchText = $("#jobsearch").val().toLowerCase().trim();
    /*
	var jobmaxdiv = $('#jobmaxdiv span:first').text().trim();
    var jobmindiv = $('#jobmindiv span:first').text().trim();
	var worksitediv = $('#worksitediv span:first').text().trim();
    var orgunitdiv = $('#orgunitdiv span:first').text().trim();
	*/

	var jobmindiv = $('#jobmindiv span:first').data("lival").trim();
	var jobmaxdiv = $('#jobmaxdiv span:first').data("lival").trim();
	//var worksitediv = $('#worksitediv span:first').data("lival").trim();
	var orgunitdiv = $('#orgunitdiv span:first').data("lival").trim();

	//console.log("filter called..");

    if (jobmaxdiv === "Max Exp") { jobmaxdiv = ''; }
    if (jobmindiv === "Min Exp") { jobmindiv = ''; }
    //if (worksitediv === "Worksite") { worksitediv = ''; }
    if (orgunitdiv === "Org Unit") { orgunitdiv = ''; }

	
    //console.log(`Search Text: ${searchText}, Max Exp: ${jobmaxdiv}, Min Exp: ${jobmindiv}, Org Unit: ${orgunitdiv}`);
	

    if (searchText !== '' || jobmaxdiv !== '' || jobmindiv !== '' || orgunitdiv !== '') {
        $('.clearBtn').removeClass('disabled');
    } else {
        $('.clearBtn').addClass('disabled');
        $('.expCard').show();
        updateFilterDataCount();
        return;
    }

	$('.expCard').each(function() {
		var cardText = $(this).text().toLowerCase();
		var cardJobMaxExp = $(this).find('.expContentDiv p:eq(1) small').text().trim();
		var cardJobMaxExpValue = parseInt(cardJobMaxExp.split('-')[1].trim());
		//console.log("cardJobMaxExpValue: "+cardJobMaxExpValue);
		var cardJobMinExpValue = parseInt(cardJobMaxExp.split('-')[0].trim());
		var cardWorksite = $(this).find('.worksite').text().trim();
		var cardOrgUnit = $(this).find('.orgunit').text().trim();
		if(jobmaxdiv!='') {jobmaxdiv = parseInt(jobmaxdiv);}
		if(jobmindiv!='') {jobmindiv = parseInt(jobmindiv);}
		
		//console.log("jobmindiv: "+jobmindiv+", jobmaxdiv: "+jobmaxdiv);
		//console.log("cardJobMinExpValue: "+cardJobMinExpValue+", cardJobMaxExpValue: "+cardJobMaxExpValue);
	
		if(cardJobMinExpValue > cardJobMinExpValue)
		{
			newval = cardJobMinExpValue;
			cardJobMinExpValue = cardJobMaxExpValue;
			cardJobMaxExpValue = newval;
		}

		var matchesSearchText = cardText.includes(searchText);
		//alert(matchesSearchText);
		var matchesJobMaxExp;
		var matchesJobMinExp;
	
		if (jobmaxdiv === '' && jobmindiv === '') {
			matchesJobMaxExp = true;
			matchesJobMinExp = true;
		} else if (jobmaxdiv === '') {
			matchesJobMaxExp = true;
			matchesJobMinExp = (jobmindiv >= cardJobMinExpValue && jobmindiv <= cardJobMaxExpValue) ;
		} else if (jobmindiv === '') {
			//matchesJobMaxExp = jobmaxdiv <= cardJobMaxExpValue;
			matchesJobMaxExp = (jobmaxdiv >= cardJobMinExpValue && jobmaxdiv <= cardJobMaxExpValue) ;
			matchesJobMinExp = true;
		} else {
			
			matchesJobMaxExp = (jobmaxdiv >= cardJobMinExpValue && jobmaxdiv <= cardJobMaxExpValue) ;
			matchesJobMinExp = (jobmindiv >= cardJobMinExpValue && jobmindiv <= cardJobMaxExpValue) ;
		}
		if(jobmindiv !== '' && jobmaxdiv !== '')
		{
			if(matchesJobMaxExp) {matchesJobMinExp = true; }
			if(matchesJobMinExp) {matchesJobMaxExp = true; }
		}
		
	
		//var matchesWorksite = worksitediv === '' || cardWorksite.includes(worksitediv);
		var matchesOrgUnit = orgunitdiv === '' || cardOrgUnit.includes(orgunitdiv);
		
		
		//console.log(`matchesSearchText: ${matchesSearchText}, matchesJobMaxExp: ${matchesJobMaxExp}, matchesJobMinExp: ${matchesJobMinExp}, matchesOrgUnit: ${matchesOrgUnit}`);

		
		if (matchesSearchText && matchesJobMaxExp && matchesJobMinExp && matchesOrgUnit) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});
	
	updateFilterDataCount();
	

    
}

/*(function ($, Drupal) {
    Drupal.behaviors.addLoaderOnFormSubmit = {
        attach: function (context, settings) {
            // Target the form submission event
            $('form.webform-submission-form', context).once('addLoaderOnFormSubmit').each(function () {
                $(this).on('submit', function () {
                    // Show the loader
                    $('#loader').show();
                });
            });

            // Handle the form submission response
            $(document).ajaxComplete(function (event, xhr, settings) {
                // Hide the loader
                $('#form-loader').hide();
            });
        }
    };
})(jQuery, Drupal);*/


function updateFilterDataCount() {
    var visibleCardsCount = $('.expCard:visible').length;
    var totalCardsCount = $('.expCard').length;
    var foundText = visibleCardsCount === 1 ? 'results' : 'results';
    var message = visibleCardsCount === totalCardsCount ? visibleCardsCount + ' jobs found!' : visibleCardsCount + ' ' + foundText + ' out of ' + totalCardsCount + ' jobs';

    $('.filterDataCount').text(message);
}

function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    var countdownInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
        clearInterval(countdownInterval);
        display.text("Resend OTP");
        display.addClass('pointer-cursor'); // Enable cursor style again
      }
    }, 1000);
  }

/*var vw = window.innerWidth || document.documentElement.clientWidth;
document.querySelectorAll('video').forEach(function (video) {
	var vw = window.innerWidth || document.documentElement.clientWidth;

	if (vw > 767) {
		video.src = video.getAttribute('data-video-desktop');
		video.poster = video.getAttribute('data-poster-desktop');
	} else {
		video.src = video.getAttribute('data-video-mobile');
		video.poster = video.getAttribute('data-poster-mobile');
	}
});*/

var vw = window.innerWidth || document.documentElement.clientWidth;

document.querySelectorAll('video').forEach(function (video) {
    var vw = window.innerWidth || document.documentElement.clientWidth;

    // Get desktop and mobile video/picture attributes
    var desktopVideo = video.getAttribute('data-video-desktop');
    var mobileVideo = video.getAttribute('data-video-mobile');
    var desktopPoster = video.getAttribute('data-poster-desktop');
    var mobilePoster = video.getAttribute('data-poster-mobile');

    // If viewport width is greater than 767, use desktop sources
    if (vw > 767) {
        // Set video source if desktop video attribute exists
        if (desktopVideo) {
            video.src = desktopVideo;
        }

        // Set poster if desktop poster attribute exists
        if (desktopPoster) {
            video.poster = desktopPoster;
        }
    } 
    // For smaller screens, use mobile sources
    else {
        // Set video source if mobile video attribute exists
        if (mobileVideo) {
            video.src = mobileVideo;
        }

        // Set poster if mobile poster attribute exists
        if (mobilePoster) {
            video.poster = mobilePoster;
        }
    }
});

jQuery(document).ready(function() {
    // Allowed UTM parameters to be appended
    var allowedParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_creative_format', 'utm_marketing_tactic', 'utm_content', 'locint', 'locphy', 'publisher', 'campaign', 'adgroup', 'digital_source', 'digital_medium', 'banner_size', 'gclid', 'keyword', 'placement', 'adposition', 'matchtype', 'network', 'visitortype'];

    // Function to get the allowed UTM parameters from the current URL
    function getAllowedUTMParams() {
        var params = new URLSearchParams(window.location.search);
        var filteredParams = [];

        // Filter parameters based on the allowed list
        for (var [key, value] of params.entries()) {
            if (allowedParams.includes(key)) {
                filteredParams.push(key + '=' + encodeURIComponent(value));
            }
        }

        // Return the filtered parameters as a query string
        return filteredParams.length ? filteredParams.join('&') : '';
    }

    // Get the allowed UTM parameters from the current URL
    var utmParams = getAllowedUTMParams();

    // If UTM parameters exist, append them to all hyperlinks
    if (utmParams) {
        jQuery('a').each(function() {
            // Get the current href of the link
            var href = jQuery(this).attr('href');
            
            // Check if the href is not empty and is a valid URL (i.e., not a hash link or JavaScript link)
            if (href && href.indexOf('javascript:') === -1 && href.indexOf('#') !== 0) {
                
                // Check if the URL already has query parameters
                if (href.indexOf('?') > -1) {
                    // Append UTM parameters to the existing ones
                    href += '&' + utmParams;
                } else {
                    // Add the UTM parameters as the first query string
                    href += '?' + utmParams;
                }
                
                // Update the href attribute of the link
               jQuery(this).attr('href', href);
            }
        });
    }

								
							   

															
 
												
										 
		 
									   
  
	
									 

});

/* /* /* /* /* /* /* /* /* Rera Qr Popup  /* /* /* /* /* /* /* /* /* /* /* / */
					  
																	  
																		
																 
													  
																						 
																 
				  
 

			 
													 

						 

									  
	 
													   
															
			 
	   
		  

let slideOutVisible = true;
let openRera = false;

function reraDetails(){
    if (slideOutVisible) {
        openRera = true
        $(".slide-out-tab").hide("slow");
        $(".slide-out").animate({ "right": "0px" }, "slow" );
    } else {
        openRera = false;
        $(".slide-out-tab").show("slow");
        $(".slide-out").animate({ "right": "-321px" }, "slow" );
    }    
    slideOutVisible = !slideOutVisible;
}

$(document).ready(function() {
   //$(".slide-out").animate({ "right": "0px" }, "slow" );
   
   $(".slide-out-tab").click(() => { 
       reraDetails();
    
    //console.log(slideOutVisible);
  }); 
  
  //window.onscroll = function() {
  
  $(window).scroll(function() {
    if(openRera == true){
        reraDetails();
        //slideOutVisible = true;
      /* if ($(this).scrollTop() > 100) {
            $(".slide-out").animate({ "right": "-300px" }, "slow" );
            return false;
      } */
    }
    
    });


});

window.onload = function() {
/* /* /* /* /* /* Retail page : /retail  * / * / * / * / * / */
/* <a href="https://uat-beta.thedomus.in/projects/commercial-property-in-mumbai/the-domus-signet-kalyan-shil-road" id="projectclick" data-category="Commercial and Retail" data-typology="" data-city="Thane" data-title="The Domus Signet Kalyan Shil road" data-img="/sites/default/files/styles/280x350/public/thumbnail/Spotlight_The Domus-Signet%2C-Kalyan-Shil-Road-D.jpg.webp?itok=uCbOmuSs" data-projectid="a094G00003CLlwE" data-possesion="Under Construction" data-budget="">

//var hrefValue = $('#projectclick').attr('data-projectid');
var selProject = $('a[data-projectid="a094G00003CLlwE"]');
var hrefValue = selProject.attr('href');
//var hrefValue = $("a#projectclick[data-projectid$='a094G00003CLlwE'").attr('href');

console.log(hrefValue+"/retail");
selProject.attr('href', hrefValue+'/retail');
//$("a[data-projectid$='a094G00003CLlwE'").attr('href', hrefValue+'/retail');  */

function retailLink(){
	// The Domus Signet Kalyan Shil road | Palava
	var a094G00003CLlwE = $('a[data-projectid="a094G00003CLlwE"]');
	var hrefValue1 = a094G00003CLlwE.attr('href');
	if(hrefValue1.includes("/retail") == false){
		a094G00003CLlwE.attr('href', hrefValue1+'/retail');
	}
	
	// One The Domus Place | Lower Parel
	var a09D000002FvGrz = $('a[data-projectid="a09D000002FvGrz"]');
	var hrefValue2 = a09D000002FvGrz.attr('href');
	if(hrefValue2.includes("/retail") == false){
		a09D000002FvGrz.attr('href', hrefValue2+'/retail');
	}
	
	// The Domus iThink | Palava Business District 
	var a09D000002NL4K9 = $('a[data-projectid="a09D000002NL4K9"]');
	var hrefValue3 = a09D000002NL4K9.attr('href');
	if(hrefValue3.includes("/retail") == false){
		a09D000002NL4K9.attr('href', hrefValue3+'/retail');
	}
	 
	// The Domus Signet Lower Parel | Lower Parel 
	var a094G0000368XCf = $('a[data-projectid="a094G0000368XCf"]');
	var hrefValue4 = a094G0000368XCf.attr('href');
	if(hrefValue4.includes("/retail") == false){
		a094G0000368XCf.attr('href', hrefValue4+'/retail');		
	}
	
	//console.log(hrefValue4.includes("/retail"));
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('category'); // e.g., if URL is ?name=John
//console.log(category);

const currentPath = window.location.pathname;
//console.log(currentPath);
if(currentPath == "/commercial-retail" || category == "Retail"){
	//retailLink();
	const intervalId = setInterval(retailLink, 500);
	//console.log(intervalId);
}else{
	//clearInterval(intervalId);
}

/* END - Retail page append */

/* WhatsApp Chatbot UTM content ?campaign=FB-A */
function isMobile() {
  const minWidth = 766; // Minimum width for desktop devices default: 768
  return window.innerWidth < minWidth || screen.width < minWidth;
}

const projectName = $('.projecttitle').text();
const campaign = urlParams.get('campaign'); // "facebook", "google",

let preText = null;

switch(campaign){
	case "Google-P" : preText = `Hello. I am interested in ${projectName}. Kindly share the details.`; break;
	case "Google-A" : preText = `Hello. I am exploring ${projectName}. Requesting assistance with further details.`; break;
	case "FB-A" : preText = `Hello. I am interested in ${projectName}. Please share further information.`; break;
	case "Pub-A" : preText = `Hello. I would like to inquire about ${projectName}. Kindly share the details.`; break;
	case "YT-A" : preText = `Hello. I am interested in ${projectName}. Requesting you to please share the details.`; break;
	case "Lkdn-A" : preText = `Hello. Requesting an overview of ${projectName}.`; break;
	default : preText = `Show details of ${projectName}`;
}

if($("li#whatsapp").length){
	const waLink = document.querySelector('li#whatsapp a.wpclick');

	const WAhref = waLink.href;
	const WArr = WAhref.split("?");
	const newWALink = WArr[0]+"?text="+encodeURIComponent(preText);
	//console.log(newWALink);
	if (isMobile()) {
		const mWaLink = document.querySelector('li#whatsapp a#WAlink');
		mWaLink.setAttribute('href', newWALink);
	}else{
		waLink.setAttribute('href', newWALink);
	}
}

//console.log('The page has fully loaded');
};

function leadFormSubmit(DL) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(DL);
	//console.log(window.dataLayer, DL);
}


if(window.location.pathname === '/investor-relations/financials') {
	setInterval(function () {
		
		let j=0;
		for(let i=1;i<=4;i++){
			let Q = $('.financial_report #Quarter'+i+' ul.viewList li:first p');
			if(Q.text() == "No Report Found!"){
				Q.closest('.governance_report').find('ul.tabHeading li a[data-slide="'+j+'"]').closest('li').hide();
			}else{
				Q.closest('.governance_report').find('ul.tabHeading li a[data-slide="'+j+'"]').closest('li').show();
			}
			j++;
		}
		
		const QA = $('.financial_report #Annual ul.viewList li:first p');
		if(QA.text() == "No Report Found!"){
			QA.closest('.governance_report').find('ul.tabHeading li a[data-slide="4"]').closest('li').hide();
		}else{
			QA.closest('.governance_report').find('ul.tabHeading li a[data-slide="4"]').closest('li').show();
		}
		
    }, 500);
} // Empty Documents to hide Tabs Quarter 1, 2, 3, 4 & Annual

if(window.location.pathname === '/investor-relations/corporate-governance') {
	setInterval(function () {
		for(let i=1;i<=4;i++){
			if($('#Quarter'+i+' ul.viewList li:first p').text() == "No Report Found!"){
				$('#Quarter'+i).prev('h3.accordionHeading').hide();
			}else{
				$('#Quarter'+i).prev('h3.accordionHeading').show();
			}
		}	
    }, 500);
} // Empty Documents to hide Tabs Quarter 1, 2, 3, 4 & Annual