$(document).ready(function() {
	$('.highlight').hover(function() {
		$(this).stop().animate({backgroundColor: $.Color("#10537B")}, 'slow');
	},function() {
		$(this).stop().animate({backgroundColor: $.Color("#125E8B")}, 'slow');
	}); 
});
