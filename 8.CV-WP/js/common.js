$(document).ready(function () {
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}

	heightDetect();

	$(window).resize(function () {
		heightDetect();
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	
//	$(".animation-1").animated("flipInY", "flipOutY");
//	$(".animation-2").animated("fadeInLeft", "fadeOutLeft");
//	$(".animation-3").animated("fadeInRight", "fadeOutRight");
//	
//	$(".right .cv_item").animated("fadeInLeft", "fadeOutLeft");
//	$(".left .cv_item").animated("fadeInRight", "fadeOutRight");
	
	// если делать "возвратную анимацию", то появляется странный отступ справа у всего документа
	
	$(".animation-1").animated("flipInY");
	$(".animation-2").animated("fadeInLeft");
	$(".animation-3").animated("fadeInRight");
	
	$(".right .cv_item").animated("fadeInLeft");
	$(".left .cv_item").animated("fadeInRight");

	$(window).load(function () {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});

	$(".toggle_mnu, .menu_item").click(function () {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacity");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacity");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});

	$(".top_mnu ul a").click(function () {
		$(".top_text").removeClass("h_opacity");
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".popup").magnificPopup({type:"image"});

	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	
	var mixer = mixitup(".portfolio_table");

	$(".portfolio_popup").magnificPopup({
	  type:'inline',
	  midClick: true
	});
	
	$(".portfolio_item").each(function(i){
		$(this).find(".portfolio_popup").attr("href", '#portfolio_descr-' + i);
		$(this).find(".portfolio_descr").attr("id", 'portfolio_descr-' + i);
	});
	
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
	
	$(".top_mnu a[href*='#']").mPageScroll2id();

});