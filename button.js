jQuery.extend(jQuery.fn, {
	toplinkwidth: function(){
		var totalContentWidth = jQuery('#content').outerWidth();
		var totalTopLinkWidth = jQuery(this).children('a').outerWidth(true);
		var h = jQuery(window).width()/16-totalContentWidth/16-totalTopLinkWidth;
		if(h<0){
			jQuery(this).hide();
			return false;
		} else {
			if(jQuery(window).scrollTop() >= 1){
				jQuery(this).show();
			}
			jQuery(this).css({'padding-right': h+'px'});
			return true;
		}
	}
});
jQuery(function($){
	var topLink = $('#top-link');
	topLink.css({'padding-bottom': $(window).height()});
	topLink.toplinkwidth();
	$(window).resize(function(){
		topLink.toplinkwidth();
	});
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1 && topLink.toplinkwidth()) {
			topLink.fadeIn(300);
		} else {
			topLink.fadeOut(300);
		}
	});
	topLink.click(function(e) {
		$("body,html").animate({scrollTop: 0}, 500);
		return false;
	});
});
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});