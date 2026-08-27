/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% GA-4 Data layer: 05-Aug-2026 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

var selcetdCountry = "India";

var param = window.location.search == "" ? "" : window.location.search;
var sourceURL = window.location.pathname+param; // '/'
var currentPath = window.location.pathname; 

let partPath = currentPath.split("/");
console.log('partPath: ', partPath);
var clickSrchTopRight = false;
var clickSrchOurProj = false;
//let relativeUrl = url.replace(window.location.origin, ""); // Remove the domain

function ourstoryclick() {
    (window.dataLayer = window.dataLayer || []), window.dataLayer.push({ event: "Our story", page_url: window.location.href }); // #WebEngage
		
	//var destinationURL = jQuery(this).attr('href');
	var destinationURL = jQuery('#ourstoryclick').attr('href');
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "header_interaction",	
		'click_text' : "Our Story",
		'link_header': "Our Story",
		'link_sub_header': "",
		'source_page_url': sourceURL,
		'destination_page_url': destinationURL.replace(window.location.origin, "")
	}); // #GA4
	console.log(window.dataLayer); //return false;	
}
function ourimpactclick() {
    (window.dataLayer = window.dataLayer || []), window.dataLayer.push({ event: "Our Impact", page_url: window.location.href }); // #WebEngage
		
	//var destinationURL = jQuery(this).attr('href');
	var destinationURL = jQuery('#ourimpactclick').attr('href');
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "header_interaction",	
		'click_text' : "Our Impact",
		'link_header': "Our Impact",
		'link_sub_header': "",
		'source_page_url': sourceURL,
		'destination_page_url': destinationURL.replace(window.location.origin, "")
	}); // #GA4
	console.log(window.dataLayer); //return false;	
}
function ourprojectclick() {
    (window.dataLayer = window.dataLayer || []), window.dataLayer.push({ event: "Our Project", page_url: window.location.href }); // #WebEngage
    var e = "Residential";
	(window.dataLayer = window.dataLayer || []), window.dataLayer.push({ event: "View all - our projects", Category: e, page_url: window.location.href }); // #WebEngage
}	
function commercialviewallclick() {
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "View all - our projects",
            Category: "Commercial",
            page_url: window.location.href,
        });
}
function boardofdirectorclick() {
    var e = window.location.origin + "/investor/board-of-directors";
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "Board of directors viewed", page_url: e });
}
function leadershipclick() {
    var e = window.location.origin + "/leadership";
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "Leadership team viewed", page_url: e });
}
function featuredprojectsclick() {
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "View more - Featured Projects", page_url: window.location.href });
}
function ongoingprojectsclick() {
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "View more - Under Construction Projects", page_url: window.location.href });
}
function soldoutprojectsclick() {
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "View more - Ready Projects", page_url: window.location.href });
}
function aboutclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = jQuery(".projectype").text(),
        a = jQuery(".projecid").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "About clicked",
            page_url: window.location.href,
            "Project Name": e,
            "Project Id": a,
            "Project Type": t,
            "view more": 1,
        });
}
function amenitiesclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = (jQuery(".projectype").text(), jQuery(".projecid").text()),
        a = jQuery(".city").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "Amenities Clicked", "Project Name": e, "Project Id": t, Location: a });
}
function featuresclick() {
    var e = jQuery(location).attr("href"),
        t = jQuery(".projecttitle").text(),
        a = jQuery(".projectype").text(),
        r = jQuery(".projecid").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "Features Click",
            "Page URL": e,
            "Project Name": t,
            "Project Id": r,
            "Project Type": a,
        });
}
function retailclick() {
    var e = jQuery(location).attr("href"),
        t = jQuery(".projecttitle").text(),
        a = jQuery(".projectype").text(),
        r = jQuery(".projecid").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "Retail click",
            "Page URL": e,
            "Project Name": t,
            "Project Id": r,
            "Project Type": a,
        });
}
function priceclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = jQuery(".projectype").text(),
        a = jQuery(".projecid").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "Price clicked",
            page_url: window.location.href,
            "Project Name": e,
            "Project Id": a,
            "Project Type": t,
            "view more": 1,
        });
}
function locationclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = jQuery(".projecid").text(),
        a = jQuery(".city").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "Location Clicked",
            page_url: window.location.href,
            "Project Name": e,
            "Project Id": t,
            Location: a,
            "View map": 1,
        });
}
function galleryclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = jQuery(".projecid").text();
    jQuery(".city").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "Gallery Clicked", "Project Name": e, "Project Id": t });
}
function dchatclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = (jQuery(".projectype").text(), jQuery(".projecid").text()),
        a = jQuery(".city").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "Chat",
            page_url: window.location.href,
            "Project Name": e,
            "Project Id": t,
            City: a,
        });
}
function mchatclick() {
    jQuery(location).attr("href");
    var e = jQuery(".projecttitle").text(),
        t = (jQuery(".projectype").text(), jQuery(".projecid").text()),
        a = jQuery(".city").text();
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
            event: "Chat",
            page_url: window.location.href,
            "Project Name": e,
            "Project Id": t,
            City: a,
        });
}
function the-domusclick() {
    jQuery(location).attr("href");
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "The Domus Icon click", page_url: window.location.href });
}
function the-domusluxuryclick() {
    jQuery(location).attr("href");
    (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({ event: "The Domus Luxury click", page_url: window.location.href });
}

function enquireclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Enquire",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
		
	window.dataLayer = window.dataLayer || [];
	
	let projects = currentPath.split("/");
	//if(projects[1] != "projects"){
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : "Enquire",
			'link_header': "Enquire",
			'link_sub_header': "",
			'source_page_url': sourceURL,
			'destination_page_url': ""
		});
	//}
	
	window.dataLayer.push({
		'event': "lead_form_initiated",	
		'click_text' : "Enquire",
		'form_name' : "Enquire"
	});
	console.log("enquireclick() ", window.dataLayer); //return false;	
}

function callclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Request a Call",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
	
	let destinationURL = jQuery("ul.staticlinksUl li.callsticky a.wcall").attr('href');
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "header_interaction",
		'click_text' : "Call",
		'link_header': "Call",
		'link_sub_header': "",
		'source_page_url': sourceURL,
		'destination_page_url': destinationURL
	});
	console.log("Call", window.dataLayer);
}

function chatclick(){
	var pageURL = jQuery(location).attr("href");
	var projecttitle = jQuery(".projecttitle").text();
	var projectype = jQuery(".projectype").text();
	var projecid = jQuery(".projecid").text();
	var city = jQuery(".city").text();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "Chat",
		'page_url': window.location.href,
		'Project Name': projecttitle,
		'Project Id': projecid,
		'City': city
	});
	
	let destinationURL = jQuery("li#wpheader a").attr('href'); 
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "header_interaction",	
		'click_text' : "Chat",
		'link_header': "Chat",
		'link_sub_header': "",
		'source_page_url': sourceURL,
		'destination_page_url': destinationURL.replace(window.location.origin, "")
	});
	console.log("ul.staticlinksUl li a", window.dataLayer); //return false;
}


/* ================================================================== */
function getGA4ClientId() {
  const cookieArr = document.cookie.split("; ");
  for(let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");
    if(cookiePair[0] === "_ga") {
      // The _ga cookie looks like "GA1.2.1234567890.1678900000"
      // We extract just the final two dotted segments for the Client ID
      const cookieParts = cookiePair[1].split(".");
      if (cookieParts.length >= 4) {
        return cookieParts.slice(-2).join(".");
      }
    }
  }
  return null;
}
//console.log('Your GA4 Client ID is:', getGA4ClientId());

function hashValue(value) {
  return CryptoJS.SHA256(value.trim().toLowerCase()).toString();
}

function projectClick(data){
	//console.log(data); return false;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "project_click",
		'click_text': data.clickText,
		'project_name': data.projectName,
		'link_header': data.Header,
		'link_sub_header' : data.subHeader,
		'source_page_url': data.sourceURL,
		'destination_page_url': data.destinationURL
	});
	console.log("projectClick(): ", window.dataLayer); //return false;
}
function projectClickLux(data){
	//console.log(data); return false;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': "project_click",
		'click_text': data.clickText,
		'project_name': data.projectName,
		'link_header': data.Header,
		'link_sub_header' : data.subHeader,
		'source_page_url': data.sourceURL,
		'destination_page_url': data.destinationURL
	});
	console.log("projectClickLux(): ", window.dataLayer); //return false;
}

jQuery(window).on('load', function() {
	if(partPath[1] == "projects" && partPath.length === 4){
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "project_viewed",
			'project_name': jQuery('div.projecttitle').text().trim(),
			'source_page_url': window.location.href
		});
		console.log("project_viewed: ", window.dataLayer); //return false;
	} // Project View
	
	if(partPath[1] == "all-projects" && window.location.search != ""){
		const urlParams = new URLSearchParams(window.location.search);
		const projectType = urlParams.get('project_type');
		const propertyType = urlParams.get('property_type');
		const category = urlParams.get('category');
		const city = urlParams.get('city');
		const locality = urlParams.get('locality');
		const possessionStatus = urlParams.get('possession_status');
		const bedrooms = urlParams.get('bedrooms');
		const budget = urlParams.get('budget');
		let result_count = Number(jQuery('.filterDataDiv > p.filterDataCount').text().trim().match(/\d+/)?.[0]);
		
		window.dataLayer.push({
			event: 'filter_applied',
			'project_type': projectType == "" ? "" : projectType,
			'city': city == ""? "": city,
			'locality': locality == ""? "": locality,
			'typology': bedrooms == ""? "": bedrooms,
			'price_range': budget == ""? "": budget,
			'category': category,
			'type': propertyType,
			'result_count': result_count
		});
		
		console.log(window.dataLayer); //return false;
	} // DropDown filter 
});

jQuery(function() {
	
	jQuery(document).on("click", "#integratedreport", function () {
	console.log("View our integrated report - our impact"),
		(window.dataLayer = window.dataLayer || []),
		window.dataLayer.push({ event: "View our integrated report - our impact", page_url: window.location.href });
	}),
	jQuery(document).on("click", "#projectclick", function () {
		var e = jQuery(this).attr("data-title"),
			t = jQuery(this).attr("data-projectid"),
			a = jQuery(this).attr("data-category"),
			r = jQuery(this).attr("data-possesion");
		jQuery(location).attr("href");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Project viewed",
				"Project Name": e,
				"Project Id": t,
				"Project category": a,
				"Project sub category": r,
			}),
			(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "About clicked",
				page_url: window.location.href,
				"Project Name": e,
				"Project Id": t,
				"Project Type": a,
				"view more": 1,
			});
	}),
	jQuery(document).on("click", "#comprojectclick", function () {
		var e = jQuery(this).attr("data-title"),
			t = jQuery(this).attr("data-projectid"),
			a = jQuery(this).attr("data-category"),
			r = jQuery(this).attr("data-subcat");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Project viewed",
				"Project Name": e,
				"Project Id": t,
				"Project category": a,
				"Project sub category": r,
			});
	}),
	jQuery(document).on("click", ".plantrack ul li a", function () {
		var e = jQuery(".projecttitle").text(),
			t = jQuery(".projecid").text(),
			a = jQuery(this).attr("data-type"),
			r = jQuery(this).attr("data-amount"),
			o = jQuery(this).attr("href");
		console.log(a),
			console.log(r),
			(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Floor Plan Clicked",
				"Project Name": e,
				"Project Id": t,
				"Plan type": a,
				"Plan image": o,
			});
	}),
	jQuery(document).on("click", ".floorplantrack", function () {
		var e = jQuery(".projecttitle").text(),
			t = jQuery(".projecid").text(),
			a = jQuery(this).attr("data-caption"),
			r = jQuery(this).attr("data-ptype"),
			o = jQuery(this).attr("href");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Floor Plan Clicked",
				"Project Name": e,
				"Project Id": t,
				"Plan type": r,
				"Plan title": a,
				"Plan image": o,
			});
	}),
	jQuery(document).on("click", ".imggalleryclick", function () {
		var e = jQuery(".projecttitle").text(),
			t = jQuery(".projecid").text(),
			a = jQuery(this).attr("data-popup-img");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Image_view", "Project Name": e, "Project Id": t, Image: a });
	}),
	jQuery(document).on("click", ".videogalleryclick", function () {
		var e = jQuery(".projecttitle").text(),
			t = jQuery(".projecid").text(),
			a = jQuery(this).attr("data-popup-iframe");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Video_view", "Project Name": e, "Project Id": t, Video: a });
	}),
	jQuery(document).on("click", "#the-domuspalavaclick", function () {
		jQuery(location).attr("href");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Palava City click", page_url: window.location.href });
	}),
	jQuery(document).on("blur", "#edit-name", function () {	
		if ("" != jQuery(this).val() && partPath[1] != "contact-us") {
			var e = jQuery("#edit-name").val(),
				t = jQuery(".projecttitle").text(),
				a = jQuery(".projecid").text();
			(window.dataLayer = window.dataLayer || []),
				window.dataLayer.push({ event: "Name Submit", Name: e, "Project Name": t, "Project Id": a }),
				window.dataLayer.push({ 'event': "lead_form_percent_submit", 'click_text' : e, 'form_name': "Enquire", 'steps_completed': 1 });
				webengage.user.setAttribute("we_first_name", e);
		}
	}),
	jQuery(document).on("blur", "#edit-email-id", function () {
		if ("" != jQuery(this).val() && partPath[1] != "contact-us") {
			var e = jQuery("#edit-email-id").val(),
				t = jQuery(".projecttitle").text(),
				a = jQuery(".projecid").text(),
				r = $("#countrylst li.active label").attr("data-title"),
				o = $("#citylst li.active label").attr("data-title");
			(window.dataLayer = window.dataLayer || []),
				window.dataLayer.push({ event: "Email Submit", Email: e, "Project Name": t, "Project Id": a }),
				(window.dataLayer = window.dataLayer || []),
				window.dataLayer.push({ event: "Country Submit", Country: r, "Project Name": t, "Project Id": a }),
				(window.dataLayer = window.dataLayer || []),
				window.dataLayer.push({ event: "City Submit", City: o, "Project Name": t, "Project Id": a }),
				window.dataLayer.push({ 'event': "lead_form_percent_submit", 'click_text' : hashValue(e), 'form_name': "Enquire", 'steps_completed': 2 });
				webengage.user.setAttribute("we_email", e);
		}
	}),
	jQuery(document).on("blur", "#edit-otp", function () {
		var e = jQuery(this).val();
		if ("" != e && partPath[1] != "contact-us") {
			window.dataLayer = window.dataLayer || [];
			if(jQuery('.countrysel span.selcetdcountry').text().trim() == "India"){
				window.dataLayer.push({ 'event': "lead_form_percent_submit", 'click_text' : e, 'form_name': "Enquire", 'steps_completed': 6 });
			}
		}
	}),
	jQuery(document).on("blur", "#edit-mobile-number", function () {
		if ("" != jQuery(this).val() && partPath[1] != "contact-us") {
			var e = jQuery("#edit-mobile-number").val(),
				t = jQuery(".projecttitle").text(),
				a = jQuery(".projecid").text();
			(window.dataLayer = window.dataLayer || []),
				window.dataLayer.push({ event: "Mobile Submit", Mobile: e, "Project Name": t, "Project Id": a }),
				window.dataLayer.push({ 'event': "lead_form_percent_submit", 'click_text' : jQuery('.countrysel span.selcetdcountry').text().trim(), 'form_name': "Enquire", 'steps_completed': 3 }),
				window.dataLayer.push({ 'event': "lead_form_percent_submit", 'click_text' : jQuery('.citylist span.selcetdcity').text().trim(), 'form_name': "Enquire", 'steps_completed': 4 }),
				window.dataLayer.push({ 'event': "lead_form_percent_submit", 'click_text' : hashValue(e), 'form_name': "Enquire", 'steps_completed': 5 });				
				webengage.user.setAttribute("we_phone", e);
		}
	}),
	jQuery(document).on("click", ".footerclick", function () {
		var e = jQuery(this).attr("data-title");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Footer clicked", Category: e, page_url: window.location.href });
	}),
	jQuery(document).on("click", ".recslider", function () {
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Our Impact - Recognition Slider", page_url: window.location.href });
	}),
	jQuery(document).on("click", ".esgclick", function () {
		var e = jQuery(this).attr("data-title"),
			t = jQuery(this).attr("data-cat");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "View more - our impact",
				Category: t,
				Title: e,
				page_url: window.location.href,
			});
	}),
	jQuery(document).on("click", ".socialclick", function () {
		var e = jQuery(this).attr("alt");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Social media clicked", Channel: e, page_url: window.location.href });
	}),
	jQuery(document).on("click", "#careerwhy,#careerlifeat,#careerexplore,#careercampus", function () {
		var e = jQuery(this).text();
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Careers - Page Viewed", "Page Header": e, page_url: window.location.href });
	}),
	jQuery(document).on("click", ".integratedreport", function () {
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "View our integrated report - Investor Relations",
				page_url: window.location.href,
			});
	}),
	jQuery(document).on(
		"click",
		"#investorrel,#investorfinan,#investorboarddir,#investorcorpgov,#investorshareholder,#investordisclosure",
		function () {
			var e = jQuery(this).text();
			(window.dataLayer = window.dataLayer || []),
				window.dataLayer.push({
					event: "Investor Relations - Page Viewed",
					"Page Header": e,
					page_url: window.location.href,
				});
		}
	),
	jQuery(document).on("click", "#newsclick,#newsclickpage", function () {
		var e = jQuery(this).attr("data-title");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Press Release/News Clicked", Title: e, page_url: window.location.href });
	}),
	jQuery(document).on("click", "#pressclick,#pressclickpage", function () {
		var e = jQuery(this).attr("data-title");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Press Release/News Clicked", Title: e, page_url: window.location.href });
	}),
	jQuery(document).on("click", ".financeclick", function (e) {
		var t = jQuery(this).attr("data-title"),
			a = jQuery(this).attr("data-year"),
			r = jQuery(this).attr("data-quarter"),
			o = jQuery(this).attr("data-test");
		console.log("Report Name: ", t),
			console.log("Year: ", a),
			console.log("Quarter: ", r),
			t
				? a
					? r
						? ((window.dataLayer = window.dataLayer || []),
						  window.dataLayer.push({
							  event: "Financials - Download Report",
							  page_url: window.location.href,
							  Quarter: r,
							  "Financial Year": a,
							  "Report Name": o,
						  }))
						: console.error("Quarter attribute is missing or undefined.")
					: console.error("Year attribute is missing or undefined.")
				: console.error("Report Name attribute is missing or undefined.");
	}),
	jQuery(document).on("click", ".irpolicydownload", function () {
		var e = jQuery(this).text(),
			t = jQuery(this).attr("date-cat");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Investor Relations - Corporate Governance",
				page_url: window.location.href,
				Category: t,
				"Report Downloaded ": e,
			});
	}),
	jQuery(document).on("click", ".ircorgovdownload", function (e) {
		var t = jQuery(this).attr("data-title");
		console.log(t),
			(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Investor Relations  - Corporate Governance",
				page_url: window.location.href,
				Category: "corporate governance",
				"Report Downloaded ": t,
			});
	}),
	jQuery(document).on("click", ".impactdownload", function () {
		var e = jQuery(this).attr("data-cat"),
			t = jQuery(this).text();
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Downloads - our impact",
				Category: e,
				"Sub Category": t,
				page_url: window.location.href,
			});
	}),
	jQuery(document).on("click", ".quickclick", function () {
		var e = jQuery(this).text();
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Quick Links", Category: e, page_url: window.location.href });
	}),
	jQuery(document).on("click", ".faqclick", function () {
		var e = jQuery(this).text().trim(),
			t = jQuery(".projecttitle").text(),
			a = jQuery(".projecid").text();
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Most Common Queries",
				page_url: window.location.href,
				"Project Name": t,
				"Project Id": a,
				Query: e,
			});
	}),
	jQuery(document).on("click", ".blogview", function () {
		var e = jQuery(this).attr("data-title"),
			t = jQuery(this).attr("data-category");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Blogs View",
				page_url: window.location.href,
				"Blog Category": t,
				"Blog Title": e,
			});
	}),
	jQuery(document).on("click", ".reraclick", function () {
		jQuery(location).attr("href");
		var e = jQuery(".projecttitle").text(),
			t = jQuery(".projectype").text();
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "RERA Click",
				page_url: window.location.href,
				"Project Name": e,
				"Project Type": t,
			});
	}),
	jQuery(document).on("click", ".disclaimerclick", function () {
		jQuery(location).attr("href");
		var e = jQuery(".projecttitle").text(),
			t = jQuery(".projectype").text();
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Disclaimer View",
				page_url: window.location.href,
				"Project Name": e,
				"Project Type": t,
			});
	}),
	jQuery(document).on("click", ".footercollapse", function () {
		var e = jQuery(this).attr("data-title"),
			t = jQuery(this).attr("data-cat");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({
				event: "Footer Collapse Click",
				page_url: window.location.href,
				Category: t,
				Title: e,
			});
	}),
	jQuery(document).on("click", ".manualsearch", function () {
		var e = jQuery(this).attr("data-title");
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Project - Manual Search ", Keyword: e, "Result Count": 1 });
	}),
	jQuery(document).on("click", "#termsclick", function () {
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Terms & Conditions click", page_url: window.location.href });
	}),
	jQuery(document).on("click", "#contactclick", function () {
		(window.dataLayer = window.dataLayer || []),
			window.dataLayer.push({ event: "Contact us", page_url: window.location.href });
	});	
	
/* ------------------------------ GA4 ------------------------------ */
	jQuery(document).on("click",".brandLogo",function () {		
		var destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : "THE DOMUS Logo",
			'link_header': "",
			'link_sub_header': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // Header: THE DOMUS Logo Left

	/* jQuery("#headerstyle").on("click",".staticlinksUl a.enquire.enquireForm",function () {
		var destinationURL = jQuery(this).attr('href');
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : "Enquire",
			'link_header': "Enquire",
			'link_sub_header': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		
		window.dataLayer.push({
			'event': "lead_form_initiated",	
			'click_text' : "Enquire",
			'form_name' : "Enquire"
		});
		console.log(window.dataLayer); //return false;
	}); // Main Header Enquire << click */

	jQuery(document).on("click","#subHeader ul li a",function () {
		let subHeader = jQuery(this).closest('#subHeader').find('h6#subHeaderTxt').text();
		let clickText = jQuery(this).text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		if(destinationURL == "/palava-city" || destinationURL == "/all-projects?project_type=Apartment&city=Palava"){
			subHeader =  "Palava";
		}else if(destinationURL == "/commercial-offices" || destinationURL == "/commercial-retail" || destinationURL == "/commercial"){
			subHeader =  "Business Spaces";
		}
		
		//console.log(subHeader+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : clickText,
			'link_header': "OUR PROJECTS",
			'link_sub_header': subHeader,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log("#subHeader ul li a", window.dataLayer); //return false;
		
		let dataAttr = { "clickText": clickText, "projectName": clickText, "Header": "OUR PROJECTS", "subHeader": subHeader, "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") }; 
		if(clickText.trim() != "View all" && clickText.trim() != "Explore" && clickText.trim() != "Palava" && clickText.trim() != "Offices" && clickText.trim() != "Retail"){
			projectClick(dataAttr);
		}
	}); // Header: Our Projects

	jQuery(document).on("click","#subHeader h6 a",function () {
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');
		let subHeader = clickText;
		
		//console.log(subHeader+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : clickText,
			'link_header': "OUR PROJECTS",
			'link_sub_header': subHeader,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	
		console.log("#subHeader h6 a", window.dataLayer); //return false;
	}); // Our Projects: Icons, Residential, Palava, Business Spaces

	
	jQuery('.staticlinksUl').on("click","li.searchLi a", function() {
		
		let thisText = jQuery(this).text().trim();
		let clickText = jQuery(this).find("h6").text().trim();
		let clickTextCat = jQuery(this).find("span").text().trim();
		let destinationURL = jQuery(this).attr('href');
		clickSrchOurProj = false;
		clickSrchTopRight = true;
		console.log('thisText:', thisText);
		console.log('clickText: ',clickText);
		console.log('clickTextCat:', clickTextCat);
		let Qa = 0;
		
		let quickLink = ['About Us', 'Careers', 'All Projects', 'Investor Relations', 'Blogs', 'NRI'];
		if(!quickLink.includes(thisText)){
		window.dataLayer = window.dataLayer || [];
			let clickTab = thisText.split('(')[0].trim(); // News
			console.log(clickTab);
			const searchTabsArr = ['Projects', 'News', 'Press Release', 'Blog'];
			//let exists = searchTabsArr.some(clickTab => searchTabsArr.includes(clickTab));
			let exists = searchTabsArr.includes(clickTab);
			console.log("Match found:", exists);
			
			if(clickTextCat == "" && clickText == "" && thisText != "Search" && exists == false){
				console.log('Search Tab:', thisText);
				Qa = 1;
				window.dataLayer.push({
					'event': "search_interaction",
					'click_text': thisText,
					'search_term' : jQuery('input#searchInput').val(),
					'link_header': "Header Search", //"OUR PROJECT",
					'link_sub_header': "", //"Search",
					'source_page_url': sourceURL,
					'destination_page_url': destinationURL.replace(window.location.origin, "")
				});
				
				let = urlDest = destinationURL.replace(window.location.origin, "");
				let urlDestArr = urlDest.split('/');
				console.log(urlDestArr[1], urlDestArr[2]);
				
				let dataAttr = { "clickText": thisText, "projectName": thisText, "Header": "Search", "subHeader": "", "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") }; 
				
				if(urlDestArr[1] == "projects" || (urlDestArr[1] == "palava-city" && urlDestArr[2] == "projects")){
					projectClick(dataAttr);		
				}else if(urlDestArr[1] == "blogs"){
					window.dataLayer.push({
						'event': "blog_interaction",
						'click_text': thisText,
						'blog_name': thisText,
						'blog_category': "",
						'source_page_url': sourceURL,
						'destination_page_url': destinationURL.replace(window.location.origin, "")
					});		
				}else{
					Qa = 4;
					if(exists == false){
						window.dataLayer.push({
							'event': "section_interaction",
							'click_text' : clickText,
							'section_name': "Search",
							'sub_section_name': "",
							'source_page_url': sourceURL,
							'destination_page_url': destinationURL.replace(window.location.origin, "")
						});
					}
				}
				
				
			}else if(thisText == "Search"){
				Qa = 2;
				window.dataLayer.push({
					'event': "header_interaction",	
					'click_text' : thisText,
					'link_header': "",
					'link_sub_header': "",
					'source_page_url': sourceURL,
					//'destination_page_url': "Chat" == clickText.trim() ? destinationURL.replace(window.location.origin, "") : ""
					'destination_page_url': ""
				});
			}else{
				Qa = 3;
				let dataAttr = { "clickText": clickText, "projectName": clickText, "Header": "Search", "subHeader": "", "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") }; 
				
				if(clickTextCat == "Project"){
					projectClick(dataAttr);		
				}else if(clickTextCat == "Blog"){
					window.dataLayer.push({
						'event': "blog_interaction",
						'click_text': clickText,
						'blog_name': clickText,
						'blog_category': "",
						'source_page_url': sourceURL,
						'destination_page_url': destinationURL.replace(window.location.origin, "")
					});		
				}else{
					Qa = 4;
					if(exists == false){
						window.dataLayer.push({
							'event': "section_interaction",
							'click_text' : clickText,
							'section_name': "Search",
							'sub_section_name': "",
							'source_page_url': sourceURL,
							'destination_page_url': destinationURL.replace(window.location.origin, "")
						});
					}
				}
			}
		}
			console.log("Qa: ", Qa);
			console.log("Search Header: ", window.dataLayer); //return false;
	}); // Search Top Right Click > Done

	jQuery(document).on("click",".innerSearchDiv .searchButtonDiv img.searchBtn",function () {
		let searchValue = jQuery('input.plsearch').val();
		//let clickText = jQuery(this).text();
		//let destinationURL = jQuery(this).attr('href');
		//console.log(searchValue); return false;
			
		if(clickSrchOurProj){
			clickSrchTopRight = false;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "search_interaction",
				'click_text': "", //searchValue,
				'search_term' : searchValue,
				'link_header': "Header Search", //"OUR PROJECT",
				'link_sub_header': "", //"Search",
				'source_page_url': sourceURL,
				'destination_page_url': ""
			});
			console.log("Our Projects Search: click > Search icon", window.dataLayer); //return false;
		}
	}); // Our Projects : Search Button icon > Done

	jQuery(".inner-search-result").on("click", "div#searchwres ul li a.manualsearch", function() {
		let clickText = jQuery(this).text();
		let linkHeader = "Header Search";
		let searchTerm = "";
		if(clickSrchOurProj == true || clickSrchTopRight == true){
			searchTerm = jQuery('input.plsearch').val();
			linkHeader = "Header Search";
		}else {
			searchTerm = jQuery('input#projectSearchResult').val();
			linkHeader = "All-Projects Page Search";
		}
		
		let destinationURL = jQuery(this).attr('href');
		//console.log(jQuery("ul.linksUl li.innerMenu.active a").text().trim());
		/* if(jQuery("ul.linksUl li.innerMenu.active a").text().trim() == "Our Projects"){
			linkHeader = "Header Search";
		}else{
			linkHeader = "All-Projects Page Search";
		} */
		
		//console.log(subHeader+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "search_interaction",
			'click_text' : clickText,
			'search_term' : searchTerm,
			'link_header': linkHeader,
			'link_sub_header': "", // "Search Result",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		
		let clickTextCat = destinationURL.replace(window.location.origin, "").split('/');
		
		let dataAttr = { "clickText": clickText, "projectName": clickText, "Header": "Search", "subHeader": "", "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") };

		if(clickTextCat[1] == "projects" || (clickTextCat[1] == "palava-city" && clickTextCat[2] == "projects")){
				projectClick(dataAttr);
			}else if(clickTextCat[1] == "blogs"){
				window.dataLayer.push({
					'event': "blog_interaction",
					'click_text': clickText,
					'blog_name': clickText,
					'blog_category': "",
					'source_page_url': sourceURL,
					'destination_page_url': destinationURL.replace(window.location.origin, "")
				});
			}else{
				window.dataLayer.push({
					'event': "section_interaction",
					'click_text' : clickText,
					'section_name': "Search",
					'sub_section_name': "",
					'source_page_url': sourceURL,
					'destination_page_url': destinationURL.replace(window.location.origin, "")
				});
			}
		console.log("Our Project Search Result List: ", window.dataLayer); //return false;
	}); // Our Projects: Search result list > Done

	jQuery("ul.linksUl").on("click", "li.innerMenu a", function() {
		clickSrchOurProj = true;
		clickSrchTopRight = false;
		
		let clickText = jQuery(this).text().trim();
		if(clickText.toLowerCase() == "our projects"){
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "header_interaction",
				'click_text' : clickText,
				'link_header': "",
				'link_sub_header': "",
				'source_page_url': sourceURL,
				'destination_page_url': ""
			});
		}
		console.log("Our Projects Clicked", window.dataLayer); //return false;
	}); // Our Projects click

	jQuery("div.swiper-slide ul li a.manualsearch").click(function () {
		//let subHeader = jQuery(this).closest('#subHeader').find('h6#subHeaderTxt').text();
		//# let clickText = jQuery(this).text();
		let clickText = jQuery('input#searchInput').val();
		let destinationURL = jQuery(this).attr('href');
		
		//console.log(sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : clickText.trim(),
			'link_header': "Search Top Right",
			'link_sub_header': "", //search result
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log("div.swiper-slide ul li a.manualsearch", window.dataLayer); //return false;
	}); // Search Top Right Result

	jQuery(".normalText").on("click", "a.quickclick", function() {
		//let subHeader = jQuery(this).closest('#subHeader').find('h6#subHeaderTxt').text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "header_interaction",	
			'click_text' : clickText.trim(),
			'link_header': "Header Search", //"Search Top Right",
			'link_sub_header': "Quick links",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	
		console.log(".recentlyDiv ul.normalText li a.quickclick", window.dataLayer); //return false;
	}); // Quick links (issue with duplicate click)

	jQuery(document).on("click","div.ourPurposeImgDiv a", function () {
		//let subHeader = jQuery(this).closest('#subHeader').find('h6#subHeaderTxt').text();
		let clickText = jQuery(this).children('span').text();
		let destinationURL = jQuery(this).attr('href');
			
		//console.log(sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': "Do good. Do well.",
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	
		
		console.log(window.dataLayer); //return false;
	}); // OUR PURPOSE: Our Story, Our Impact

	jQuery("section.ourPrideSec").on("click","a.aos-init.aos-animate, .ourPrideSliderDiv .swiper-slide > a",function () {
		let sectionName = jQuery(this).closest('section.ourPrideSec').find('h2.headingH1').text();
		let clickText = jQuery(this).children('p').text().trim().split("|");
		let destinationURL = jQuery(this).attr('href');

		//console.log(sectionName+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText[0],
			'section_name': sectionName,
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	
		console.log(window.dataLayer); //return false;
		
		let dataAttr = { "clickText": clickText[0], "projectName": clickText[0], "Header": sectionName, "subHeader": "", "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") }; 
		projectClick(dataAttr);
	}); // Iconic Developments & Residential Localities: Regions pages

	if(partPath[1] != "blogs" && partPath[1] != "our-story" && partPath[1] != "commercial-offices" && partPath[1] != "thankyou" && partPath[4] != "thankyou"){
		jQuery(document).on("click",".justify-content-center a.goldenBorderBtn",function () {
			let sectionName = jQuery(this).closest('.ourPrideSec').find('h2.headingH1').text();
			let clickText = jQuery(this).text();
			let destinationURL = jQuery(this).attr('href');

			//console.log(sectionName+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText.trim(),
				'section_name': sectionName,
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});	
			
			console.log(window.dataLayer); //return false;
		}); // Iconic Developments : View All 
	}

	
	jQuery('.projectFilterDiv').on("click",".filterresult a#projectclick",function () {
		let sectionName = jQuery('.projectFilterDiv').find('h2.headingH1').text();
		let clickText = jQuery(this).text().trim().split('|');
		let destinationURL = jQuery(this).attr('href');		
		
		let dataAttr = { "clickText": clickText[0], "projectName": clickText[0], "Header": sectionName, "subHeader": "", "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") };
		projectClick(dataAttr);
	}); // All project : Search Projects

	jQuery('section.featuredProjectSec').on("click","a#projectclick",function () {
		let clickText = jQuery(this).children('.hoverCard').children('.cardDiv').children('h6').text().trim().split("|");
		let linkHeader = jQuery('section.featuredProjectSec').find('h2.headingH1').text();
		//let sectionName = jQuery(this).parents('.featuredProjectSec').find('h2.headingH1').text();
		let destinationURL = jQuery(this).attr('href');
		
		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
		window.dataLayer = window.dataLayer || [];
		/* window.dataLayer.push({
			'event': "featured_project_click",
			'click_text' : clickText[0],
			'link_header': linkHeader,
			'link_sub_header': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	 */
		
		window.dataLayer.push({
			'event': "section_interaction", 
			'click_text' : clickText[0],
			'section_name': linkHeader,
			'link_sub_header': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	
		console.log('a#projectclick', window.dataLayer); //return false;
		let dataAttr = { "clickText": clickText[0], "projectName": clickText[0], "Header": linkHeader, "subHeader": "", "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") };
		projectClick(dataAttr);
	}); // Feature Projects
	
	jQuery('section.featuredProjectSec').on("click","a.goldenLineBtn",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery('section.featuredProjectSec').find('h2.headingH1').text();
		//let sectionName = jQuery(this).parents('.featuredProjectSec').find('h2.headingH1').text();
		let destinationURL = jQuery(this).attr('href');
		
		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
		window.dataLayer = window.dataLayer || [];
		if(clickText == "View Less" || clickText == "View More"){
			window.dataLayer.push({
				'event': "section_interaction", 
				'click_text' : clickText.trim(),
				'section_name': linkHeader,
				'link_sub_header': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
		}	
		console.log('featured_project_click: View More/ Less', window.dataLayer); //return false;
	}); // Feature Projects: View More / View Less 
	
	jQuery(document).on("click","section.ourPromiseSec a.goldenBorderBtn",function () {
		let sectionName = jQuery(this).closest('.ourPromiseSec').find('h2.headingH1').text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(sectionName+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': sectionName,
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});	
		
		console.log(window.dataLayer); //return false;
	}); // ourPromiseSec

	jQuery(document).on("click","a.footerLogo",function () {
		let destinationURL = jQuery(this).attr('href');
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "footer_interaction",
			'click_text' : "THE DOMUS Logo",
			'link_header': "Footer",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // Footer Logo

	jQuery(document).on("click","div.footerAddressDiv ul li a",function () {
		let clickText = jQuery(this).children('img').attr('alt');
		let destinationURL = jQuery(this).attr('href');

		//console.log(sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "footer_interaction",
			'click_text' : clickText.trim(),
			'link_header': "Social",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // Footer Social Link

	jQuery(document).on("click","div.mainFooterMenu a.footerclick",function () {
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "footer_interaction",
			'click_text' : clickText.trim(),
			'link_header': "Footer",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;	
	}); // Footer link

	if(partPath[1] == "projects"){
		jQuery(document).on("click",".seconNavSlider ul li a",function () {
			let clickText = jQuery(this).text().trim();
			let destinationURL = jQuery(this).attr('href');
			let link_header = jQuery("div.projecttitle").text();
			let projectype = jQuery("div.projectype").text();
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "project_viewed_cta",
				'click_text' : clickText,
				'project_name': link_header,
				'section_name': clickText,
				'link_header': link_header,
				'link_sub_header': projectype,
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			
			if(clickText == "Enquire"){
				window.dataLayer.push({
					'event': "lead_form_initiated",	
					'click_text' : clickText,
					'form_name' : "Enquire"
				});
			}
			
			console.log(window.dataLayer); //return false;	
		}); // Project navigation
	}
	
	jQuery(document).on("click","ul.plantrack li a",function () {
		let clickText = jQuery(this).text(); // click here for Rera details
		let destinationURL = jQuery(this).attr('href');
		let link_header = jQuery("div.projecttitle").text();
		let projectype = jQuery("div.projectype").text();
		let section_name = jQuery(".planSec h2.headingH1 ").text();
		
		//console.log(projectype+" -- "+link_header+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': section_name.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // Project : About > Plans tabs

	if(partPath[1] === "projects" && partPath.length === 4){
		jQuery(document).on("click","section.planSec .container a",function () {
			let clickText = jQuery(this).text(); // click here for Rera details
			let destinationURL = jQuery(this).attr('href');
			// let link_header = jQuery("div.projecttitle").text();
			// let projectype = jQuery("div.projectype").text();
			let section_name = jQuery(".planSec h2.headingH1 ").text();
			
			//console.log(projectype+" -- "+link_header+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText.trim(),
				'section_name': section_name.trim(),
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // Project : About > Plans Button [ View Plans ] [ View Prices ]
	}
	
	jQuery(document).on("click","section.exploreSec .container a",function () {
		let clickText = jQuery(this).text(); // click here for Rera details
		let destinationURL = jQuery(this).attr('href');
		//let link_header = jQuery("div.projecttitle").text();
		//let projectype = jQuery("div.projectype").text();
		let section_name = jQuery(".exploreSec h2.headingH1 ").text();
		
		//console.log(projectype+" -- "+link_header+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': section_name.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // Project : About > Location Button
	
	
	jQuery(document).on("click",".breadcrumDiv ul li a",function () {
		let clickText = jQuery(this).text(); // click here for Rera details
		let destinationURL = jQuery(this).attr('href');
		let link_header = jQuery("div.projecttitle").text();
		let projectype = jQuery("div.projectype").text();
		let section_name = jQuery(".exploreSec h2.headingH1 ").text();
		
		//console.log(projectype+" -- "+link_header+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': "Breadcrumb",
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // Project : Breadcrumb 
	
	if(partPath[1] == "worlds-finest-developments"){
		jQuery("section.ourStorySec").on("click",".textDiv .ContentText a.goldenBorderBtn",function () {
			let clickText = jQuery(this).text().trim(); 
			let destinationURL = jQuery(this).attr('href');
			let sectionName = jQuery(".ourStorySec .ContentText h2.headingH1 ").text().trim();
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText,
				'section_name': sectionName,
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); 
		
		jQuery("section.bgColorGrey").on("click","div.text-center a.goldenLineBtn",function () {
			let clickText = jQuery(this).text().trim(); 
			let destinationURL = jQuery(this).attr('href');
			let sectionName = jQuery("section.bgColorGrey .ourPromiseTextDiv h2.headingH1 ").text().trim();
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText,
				'section_name': sectionName,
				'sub_section_name': "Social",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); 
	} // /worlds-finest-developments
	
	if(partPath[4] == "plans"){
		jQuery("section#plans").on("click",".tabWrapper ul.tabHeading li a",function () {
			let clickText = jQuery(this).text().trim(); // Master Plan, 3BHK, 4BHK, 5BHK
			let destinationURL = jQuery(this).attr('href');
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText,
				'section_name': clickText,
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // Project : Plans page 
		
		jQuery(".tabContent").on("click",".onlyPopup a.floorplantrack",function () {
			let clickText = jQuery(this).find('h6').text().trim(); // Tower 1, Tower 2, Tower 3
			let destinationURL = jQuery(this).attr('href');
			//let link_header = jQuery("div.projecttitle").text();
			//let projectype = jQuery("div.projectype").text();
			let sectionName = jQuery(".tabWrapper ul.tabHeading li a.active").text().trim();
			
			//console.log(projectype+" -- "+link_header+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL.replace(window.location.origin, "")); return false;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText,
				'section_name': sectionName,
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // /plans : Master Plan :: Tower 1
			
		jQuery(".planSlider").on("click",".onlyPopup a.floorplantrack",function () {
			let clickText = jQuery(this).find('h6').text().trim(); // Master Plan, 3BHK, 4BHK, 5BHK
			let destinationURL = jQuery(this).attr('href');
			let sectionName = jQuery(".tabWrapper .ContentText h2.headingH1").text().trim();
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText,
				'section_name': sectionName,
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // /plans : Floor Plans		
	}
	
	jQuery(document).on("click","ul li a.footercollapse",function () {
		let linkHeader = jQuery(this).parents().prevAll('h5').first().text();
		let clickText = jQuery(this).text().trim();
		let destinationURL = jQuery(this).attr('href');
		let dataCategory = jQuery(this).attr('data-cat') == "Budget" ? "Price" : jQuery(this).attr('data-cat'); // Residential Properties
		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "footer_interaction",
			'click_text' : clickText,
			'link_header': "Footer",
			'link_sub_header': dataCategory,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
		if(dataCategory != "BHK" && dataCategory != "Price" && dataCategory != "Residential Localities" && dataCategory != "Commercial Localities"){
			let dataAttr = { "clickText": clickText, "projectName": clickText, "Header": "Footer", "subHeader": dataCategory, "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") };
			projectClick(dataAttr);
		}
	}); // Hiiden Footer link

	jQuery(document).on("click","div.slide-out-tab",function () {
		let clickText = jQuery(this).children('span').text(); // click here for Rera details
		let destinationURL = window.location.href;

		//console.log(sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "side_navigation",
			'click_text' : clickText,
			'source_page_url': sourceURL,
			//'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;	
	}); // side_navigation : click here for Rera details

	jQuery(".whoWeAreSec").on("click",".teamDiv a.goldenBorderBtn",function () {
		let linkHeader = jQuery(this).parents().prevAll('h2.headingH1').first().text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': "Guided by visionary leadership",
			'sub_section_name': linkHeader.trim(),
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /our-story


	jQuery(".featuredAwardsSec").on("click",".textDiv a.arrowPlainBtn",function () {
		let linkHeader = jQuery(this).parents().prevAll('h3.tagLine').first().text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': "FEATURED AWARDS", //linkHeader.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: Our Story

	/* *********** Our Impact ************* */
	jQuery(".esgSec").on("click","a#integratedreport ",function () {
		let linkHeader = jQuery(this).parents().prevAll('h1.headingH1').first().text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': linkHeader.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: Our Impact > Creating a positive impact

	jQuery(".expImpactSec").on("click","a.goldenBorderBtn ",function () {
		//let linkHeader = jQuery(this).parents().prevAll('h2.headingH1').first().text();
		let linkHeader = jQuery(".expImpactSec h2.headingH1").text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': linkHeader.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: Our Impact > Environmental Impact

	jQuery(".socialImpactSec").on("click","a.goldenBorderBtn ",function () {
		//let linkHeader = jQuery(this).parents().prevAll('h2.headingH1').first().text();
		let linkHeader = jQuery(".socialImpactSec h2.headingH1").text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		//console.log(linkHeader+" -- "+sourceURL+" -- "+clickText+" -- "+destinationURL); return false;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': linkHeader.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: Our Impact > Social Impact

	jQuery(".esgblog").on("click","a.blogview, a.goldenBorderBtn ",function () {
		let linkHeader = jQuery(".esgblog h2.headingH1").text();
		let clickText = jQuery(this).text().trim();
		let blogName = jQuery(this).attr('data-title').trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({	
			'event': "blog_interaction",
			'click_text': clickText,
			'blog_name': blogName,
			'blog_category': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: Our Impact > Blogs

	jQuery(".brandexdesign_sec").on("click","a",function () {
		let linkHeader = jQuery(".brandexdesign_sec .ourPromiseTextDiv > h1").text();
		let clickText = jQuery(this).find("h5").text();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': linkHeader.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: Brand Experience

	if(window.location.pathname != '/nri' &&  partPath=='worlds-finest-developments'){
		jQuery(".deveSec").on("click","a",function () {
			let linkHeader = jQuery(".deveSec .ourPromiseTextDiv > h2.headingH1").text();
			let clickText = jQuery(this).find("h5").text();
			let destinationURL = jQuery(this).attr('href');
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText.trim(),
				'section_name': linkHeader.trim(),
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // page: Brand Experience
	}


	if(window.location.pathname == '/nri'){
		jQuery("section.bgColorGrey").on("click",".instaSliderDiv a",function () {
			let linkHeader = jQuery("section.bgColorGrey .ourPromiseTextDiv > h2.headingH1").text();
			let clickText = jQuery(this).find(".brandtxtdiv > h5").text();
			let destinationURL = jQuery(this).attr('href');
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText.trim(),
				'section_name': linkHeader.trim(),
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // page: /nri > Discover Life At Our Finest Developments */
	}

/* --------------------------- Blogs ---------------------------  */
	jQuery("section.bloglistSec").on("click",".thumbtxt a.blogview",function () {
		let clickText = jQuery(this).text();
		let blogName = jQuery(this).attr("data-title"); 
		let blogCategory = jQuery(this).attr("data-category"); 
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "blog_interaction",
			'click_text': clickText.trim(),
			'blog_name': blogName.trim(),
			'blog_category': blogCategory.trim(),
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});		
		console.log(window.dataLayer); //return false;
	}); // page: /blogs/Blog-Category > Read More

	jQuery("section.blogSec").on("click",".thumbtxt a.blogview",function () {
		let clickText = jQuery(this).text();
		let blogName = jQuery(this).attr("data-title"); 
		var blogCategory = $(this).closest("section").find("h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "blog_interaction",
			'click_text': clickText.trim(),
			'blog_name': blogName.trim(),
			'blog_category': blogCategory.trim(),
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});		
		console.log(window.dataLayer); //return false;
	}); // page: /blogs > Read More

	jQuery("section#recognitionsmilestones").on("click",".thumbtxt a",function () {
		let clickText = jQuery(this).text().trim();
		let blogName = jQuery(this).closest('.thumbtxt').find('h3').text().trim();
		var blogCategory = jQuery(this).closest("section").find("h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "blog_interaction",
			'click_text': clickText,
			'blog_name': blogName,
			'blog_category': blogCategory,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});		
		console.log(window.dataLayer); //return false;
	}); // page: /blogs #Recognitions & Milestones > Read More

	jQuery("section.blogSec").on("click","a.goldenBorderBtn",function () {
		let clickText = jQuery(this).text();
		var blogCategory = jQuery(this).closest("section").find("h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "blog_interaction",
			'click_text': clickText.trim(),
			'blog_name': "", //blogName.trim(),
			'blog_category': blogCategory.trim(),
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /blogs > View All
	
	if(window.location.pathname == '/blogs'){
		jQuery("section.secodaryNav").on("click",".seconNavSlider ul li a",function () {
			let clickText = jQuery(this).text();
			let destinationURL = jQuery(this).attr('href');
		
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "blog_interaction",
				'click_text': clickText.trim(),
				'blog_name': "", // blogName.trim(),
				'blog_category': clickText.trim(), // blogCategory.trim(),
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // page: /blogs > Navigation

	}
	
	jQuery("section.blog-detail").on("click",".blog-right-col .blogCard a",function () {
		let clickText = jQuery(this).text();
		let blogName = jQuery(this).attr("data-title"); 
		let blogCategory = jQuery(this).attr("data-category"); //jQuery(this).closest("section").find("h2.headingH1").text().trim();
		let linkHeader = jQuery(this).closest("section").find(".ContentText > h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "blog_interaction",
			'click_text': clickText.trim(),
			'link_header': linkHeader.trim(),
			'blog_name': blogName.trim(),
			'blog_category': blogCategory.trim(),
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /blogs > You may also like

	jQuery("section.recentblog").on("click",".blogCard a.goldenLineBtn",function () {
		let clickText = jQuery(this).text();
		let blogName = jQuery(this).attr("data-title"); 
		let blogCategory = jQuery(this).attr("data-category");
		let linkHeader = jQuery(this).closest("section.recentblog").find(".ContentText > h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "blog_interaction",
			'click_text': clickText.trim(),
			'link_header': linkHeader.trim(),
			'blog_name': blogName.trim(),
			'blog_category': blogCategory.trim(),
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /blogs > Recent Blogs

	jQuery("section.recentblog").on("click","a.goldenBorderBtn",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery(this).closest("section").find("h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		if(clickText == "View All"){
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text': clickText,
				'section_name': linkHeader,
				'sub_section_name': "",
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
		}else{
			window.dataLayer.push({
				'event': "blog_interaction",
				'click_text': clickText,
				//'blog_name': "", //blogName.trim(),
				//'blog_category': blogCategory.trim(),
				'link_header': linkHeader.trim(),
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
		}
		console.log(window.dataLayer); //return false;
	}); // page: /blog-single > View All

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% /newsroom %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
	jQuery("section.listDetailsSec").on("click","#newsclick a",function () {
		let clickText = jQuery(this).find("h4").text().trim();
		let blogName = clickText; 
		let blogCategory = jQuery(this).attr("data-category"); 
		let sectionName = jQuery(this).closest("section").find("h2.headingH1").text().trim();
		
		let subSectionName = jQuery(this).closest(".pressDiv").find("h4").text().trim(); 
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text': clickText,
			'section_name': sectionName,
			'sub_section_name': subSectionName,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /newsroom > Press Room </Bm-Test
	
	jQuery("div.pressDiv").on("click","ul li a#pressclick",function () {
		let clickText = jQuery(this).contents().filter(function() { return this.nodeType === 3; }).text().trim();
		var sectionName = jQuery(this).closest("section.listDetailsSec").find("h2.headingH1").text().trim();
		let subSectionName = jQuery("div.pressDiv.newsDiv").find("h4").text().trim();
		let destinationURL = jQuery(this).attr('href');		
		let blogName = clickText;
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({						
			'event': "section_interaction",
			'click_text': clickText,
			'section_name': sectionName,
			'sub_section_name': subSectionName,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});		
		console.log(window.dataLayer); //return false;
	}); // page: /newsroom > Press Releases </Bm-Test
	
	jQuery("div.pressDiv").on("click",".justify-content-start a.goldenBorderBtn",function () {		
		let clickText = jQuery(this).text().trim();
		var sectionName = jQuery(this).closest("section.listDetailsSec").find("h2.headingH1").text().trim();
		let subSectionName = jQuery("div.pressDiv.newsDiv").find("h4").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({						
			'event': "section_interaction",
			'click_text': clickText,
			'section_name': sectionName,
			'sub_section_name': subSectionName,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});		
		console.log(window.dataLayer); //return false;
	}); // page: /newsroom > Press Releases:: All Press Releases </Bm-Test
jQuery("section.listDetailsSec").on("click","a.goldenLineBtn, p a.a",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery(this).closest("section").find("h2.headingH1").text().trim();
		let blogName = jQuery("div.listNewsDetailsDiv").find("h3").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({						
			'event': "section_interaction",
			'click_text': clickText,
			'section_name': linkHeader,
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});		
		console.log(window.dataLayer); //return false; 
	}); // page: /news/xyz.. > News External link
		
	jQuery("section.pt-5.pb-1").on("click","a#pressclickpage",function () {
		let clickText = jQuery(this).find("h3").text().trim();
		let sectionName = jQuery(this).closest("section").find("h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({						
			'event': "section_interaction",
			'click_text': clickText,
			'section_name': sectionName,
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /news | /press-release > Press Release </Br-Test
/* ======================================== END Press ======================================== */

	jQuery("section.termsConditionDiv").on("click","a",function () {
		let linkHeader = jQuery("section.termsConditionDiv h2.headingH1").text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');
		let subHeader = jQuery(this).closest('p').prevAll('h4:first').text().trim();
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': linkHeader.trim(),
			'sub_section_name': subHeader,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /terms-and-conditions > Terms and conditions & Page: /disclaimer > Public Advisory

	
	/* jQuery('form.webform-submission-enquiry-header-form, form.webform-submission-enquiry-form').on('blur', 'input', function () {
	
		window.dataLayer = window.dataLayer || [];
		const $field = jQuery(this);
		const value = $field.val();
		
		// Ignore empty values
		if (jQuery.trim(value) === '') return;
		
		// Prevent duplicate counting
		if (!$field.data('completed')) {

			$field.data('completed', true);
			const fieldName = $field.attr('id'); // $field.attr('name') || $field.attr('id');
			
			if(fieldName == "edit-name"){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : value,
					'form_name': "Enquire",
					'steps_completed': 1
				});
			}
			
			if(fieldName == "edit-email-id"){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : hashValue(value),
					'form_name': "Enquire",
					'steps_completed': 2
				});
			}
			
			
			if(fieldName == 'edit-mobile-number'){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : jQuery('.countrysel span.selcetdcountry').text().trim(),
					'form_name': "Enquire",
					'steps_completed': 3
				});
				
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : jQuery('.citylist span.selcetdcity').text().trim(),
					'form_name': "Enquire",
					'steps_completed': 4
				});
				
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : hashValue(value),
					'form_name': "Enquire",
					'steps_completed': 5
				});	 */
				/* if(jQuery('.countrysel span.selcetdcountry').text().trim() == "India"){
					window.dataLayer.push({
						'event': "otp_initiated",
						'click_text' : hashValue(value)
					});
				} // #Removed * /
			}else if(fieldName == 'edit-otp'){
				if(jQuery('.countrysel span.selcetdcountry').text().trim() == "India"){
					window.dataLayer.push({
						'event': "lead_form_percent_submit",
						'click_text' : value,
						'form_name': "Enquire",
						'steps_completed': 6
					});
				} return false;	
			}
		}

		// Current field details
		const fieldName = $field.attr('name') || $field.attr('id') || 'unknown_field';
			
		// Find next visible input/select/textarea
		const $nextField = $('.getInTouchForm form').find('input, select, textarea').filter(':visible').eq(
				jQuery('.getInTouchForm form').find('input, select, textarea').filter(':visible').index(this) + 1);

		const nextFieldName = $nextField.attr('name') || $nextField.attr('id') || '';

		// Tracking data
		const trackingData = {
			current_field: fieldName,
			entered_value: value,
			moved_to: nextFieldName
		};

		//console.log(window.dataLayer); //return false;
	}); // page: /* > Enquire form steps tracking: input  */
	
	
	jQuery("div.commercial-card").on("click","a.goldenBorderBtn",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery("section.pt-3 .commercialText h2.headingH1").text().trim();
		let subHeader = jQuery(this).closest('.ContentText').find('h5').text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText,
			'section_name': linkHeader,
			'sub_section_name': subHeader,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /commercial > Revolutionizing India's Commercial Landscape
		
	jQuery(".featuredProjectSec.commercial-Featured").on("click","a#comprojectclick, a.goldenBorderBtn",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery("section.commercial-Featured h2.headingH1").text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText,
			'section_name': linkHeader,
			'sub_section_name': "", //subHeader,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /commercial-offices > Leading the way to future-ready workspaces & page: /commercial-retail > Where extraordinary is the norm
	
	jQuery("section.ourStorySec").on("click","a.goldenLineBtn",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery("section.ourStorySec .ContentText > h1.headingH1").text().trim();
		let subHeader = jQuery(this).closest('.ContentText').find('h2.headingH1').text().trim();
		let projectName = jQuery(this).parent('.ourPromiseTextDiv').find('h2.headingH1').text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText,
			'section_name': linkHeader,
			'sub_section_name': subHeader,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
		let dataAttr = { "clickText": clickText.trim(), "projectName": projectName, "Header": linkHeader, "subHeader": subHeader, "sourceURL": sourceURL, "destinationURL": destinationURL.replace(window.location.origin, "") }; 
		projectClickLux(dataAttr);
	}); // page: /luxury-icons > Our Iconic Developments

	if(partPath[1] == "projects"){
		jQuery(".loadDataDiv").on("click","a.goldenLineBtn",function () {
			let clickText = jQuery(this).text().trim();
			let destinationURL = jQuery(this).attr('href');
			let sectionName = "";
			let subSectionName = "";
			
			if(partPath.length === 4){
				sectionName = jQuery(".textListDiv > .ContentText > h2.headingH1:first").text().trim(); //
			}else if(partPath[4] == "amenities"){
				sectionName = jQuery(this).closest('.col-3').find('h6 strong').text().trim();
			}else if(partPath[4] == "gallery"){
				sectionName = jQuery(".galleryTab ul.tabHeading li a.active").text().trim(); // /gallery : Image, Video
				subSectionName = jQuery(this).closest('.ContentText').find('h2.headingH1').text().trim();
			}else{
				sectionName = jQuery(".ContentText h1.headingH1").text().trim();
				subSectionName = jQuery(this).closest('.ContentText').find('h2.headingH1').text().trim();
			}
			
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text' : clickText,
				'section_name': sectionName,
				'sub_section_name': subSectionName,
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // page: /View more > inner pages
	}	

	jQuery(".noBanner").on("click","a.goldenBorderBtn.goback",function () {
		let clickText = jQuery(this).text().trim();
		let linkHeader = jQuery(".thnkudiv .msgdiv h3").text().trim();
		let subHeader = jQuery(this).closest('.ContentText').find('h2.headingH1').text().trim();
		let destinationURL = jQuery(this).attr('href');
		
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText,
			'section_name': linkHeader,
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // page: /thankyou > inner pages

	if(window.location.pathname == '/investor-relations' || window.location.pathname == '/hr/why-the-domus' || window.location.pathname == '/hr/life-at-the-domus' || window.location.pathname == '/hr/explore-career' || window.location.pathname == '/hr/campus-program'){
		jQuery("section.secodaryNav").on("click",".seconNavSlider ul li a",function () {
			let clickText = jQuery(this).text().trim();
			let destinationURL = jQuery(this).attr('href');
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				'event': "section_interaction",
				'click_text': clickText,
				'section_name': clickText,
				'sub_section_name': "",			
				//'blog_name': "", // blogName.trim(),
				//'blog_category': "", // blogCategory.trim(),
				'source_page_url': sourceURL,
				'destination_page_url': destinationURL.replace(window.location.origin, "")
			});
			console.log(window.dataLayer); //return false;
		}); // page: /blogs > Navigation
	}

	var contactInt = false;
	jQuery('.contactUsSec form.webform-submission-get-in-touch-form').on('keypress, click, blur', 'input', function () {
		const $fieldCon = jQuery(this);
		const valueInp = $fieldCon.val(); 
		
		if(contactInt == false){
		window.dataLayer.push({
			'event': "lead_form_initiated",
			'form_name': "Get in touch"
		});
		contactInt = true;
		console.log("Contact Us-ini:", window.dataLayer); //return false;
		}
	}); // contact-us form

	//jQuery('.contactUsSec form.webform-submission-get-in-touch-form').on('blur', 'input', function () {
	jQuery('form.webform-submission-get-in-touch-form').on('blur', 'input', function () {
		const $field2 = jQuery(this);
		const value = $field2.val();
		
		if (jQuery.trim(value) === '') return;
		
		if (!$field2.data('completed')) {

			$field2.data('completed', true);

			const fieldName = $field2.attr('id'); // $field.attr('name') || $field.attr('id');
			
			if(fieldName == "edit-name"){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : value,
					'form_name': "Get in touch",					
					'steps_completed': 1
				});
			}
			
			if(fieldName == "edit-e-mail-id"){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : hashValue(value),
					'form_name': "Get in touch",
					'steps_completed': 2
				});
			}
			
			if(fieldName == "edit-mobile-number"){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : hashValue(value),
					'form_name': "Get in touch",
					'steps_completed': 3
				});
			}
			
			if(fieldName == "edit-message"){
				window.dataLayer.push({
					'event': "lead_form_percent_submit",
					'click_text' : value,
					'form_name': "Get in touch",
					'steps_completed': 6
				});
			}
		}
		console.log(window.dataLayer); //return false;
	}); // page: /contact-us > Contact Us form steps tracking: input

	if(partPath[1] == "contact-us"){
		//# var countrySelGA = false;
		//# var citySelGA = false;

		jQuery("form.webform-submission-get-in-touch-form .countrilist").on("click","ul#countrylst li label",function () {
			let clickText = jQuery(this).text();
			completedSteps = 4;
			window.dataLayer = window.dataLayer || [];
			
			if(contactInt == false){
				window.dataLayer.push({
					'event': "lead_form_initiated",	
					'click_text' : clickText,
					'form_name': "Get in touch"
				});
				contactInt = true;
			}
			
				/* if(countrySelGA == false){
					window.dataLayer.push({
						'event': "lead_form_percent_submit",
						'click_text' : clickText,
						'form_name': "Get in touch",
						'steps_completed': 4,
					});
					countrySelGA = true;
				} */
			console.log(window.dataLayer); //return false;
		}); // page: /contact-us > Contact Us form steps tracking: country
		
		jQuery(".webform-submission-get-in-touch-form .citylist").on("click","ul#citylst li label",function () {
			let clickText = jQuery(this).text();
			
			completedSteps = 5;
			if(contactInt == false){
				window.dataLayer.push({
					'event': "lead_form_initiated",	
					'click_text' : clickText,
					'form_name': "Get in touch"
				});
				contactInt = true;
			}
				/* if(citySelGA == false){
					window.dataLayer = window.dataLayer || [];
					window.dataLayer.push({
						'event': "lead_form_percent_submit",
						'click_text' : clickText,
						'form_name': "Get in touch",
						'steps_completed': 5,
					});
					citySelGA = true;
				} */
			console.log(window.dataLayer); //return false;
		}); // page: /contact-us > Contact Us form steps tracking: city 
		
		jQuery(".webform-submission-get-in-touch-form .formControlsCheck").on("click","label.consenttext", function () {
			const $field = jQuery(this);
			const value = $field.text();
			
			let isChecked = jQuery('.webform-submission-get-in-touch-form input.consentcheck').prop('checked');
			
			// Prevent duplicate counting
			if (!$field.data('completed')) {

				$field.data('completed', true);
				completedSteps++;
			}
			console.log(window.dataLayer); //return false;
		}); // page: /contact-us > Contact Us form steps tracking: consenttext
	}
	
	jQuery(".faqSec ").on("click",".accordionMain h3.accordionHeading.loadData.faqclick, .accordionMain.loadDataDiv h3.accordionHeading.loadData",function () {
		let sectionName = jQuery(this).closest('.faqSec').find('h2.headingH1').text();
		let clickText = jQuery(this).text().trim();
		let projectName = jQuery("div.projecttitle").text().trim();
		let destinationURL = jQuery(this).attr('href');
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "faq_interaction",
			'project_name' : projectName,
			'query_clicked' : clickText,
			'source_page_url': sourceURL
		});	
		console.log(window.dataLayer); //return false;
	}); // OUR PROMISE
	
	jQuery("section.pb-4.pbxs-2").on("click",".accordionMain.loadDataDiv h3.accordionHeading.loadData",function () {
		let linkHeader = jQuery("section.pb-4.pbxs-2 .ContentText h2.headingH1").text();
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': linkHeader.trim(),
			'sub_section_name': "",
			'source_page_url': sourceURL,
			'destination_page_url': "", //destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // /esg-sustainablity-environmental-social-governance: Downloads

	jQuery(".accordionMain.loadDataDiv").on("click","a.impactdownload", function () {
		let sectionName = jQuery("section.pb-4.pbxs-2 .ContentText h2.headingH1").text();
		let subSectioNname = jQuery(this).attr('data-cat');
		let clickText = jQuery(this).text();
		let destinationURL = jQuery(this).attr('href');

		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			'event': "section_interaction",
			'click_text' : clickText.trim(),
			'section_name': sectionName.trim(),
			'sub_section_name': subSectioNname,
			'source_page_url': sourceURL,
			'destination_page_url': destinationURL.replace(window.location.origin, "")
		});
		console.log(window.dataLayer); //return false;
	}); // /esg-sustainablity-environmental-social-governance: Downloads Sub-section
}); // EODom