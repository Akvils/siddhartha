$(document).ready(function(){
	$('article').fadeIn(4000);
	$('#parts').fadeOut(10000);
	$('nav').slideDown(3000);//.delay(10000).slideUp(5000)
	$('.contents').fadeIn(2000);	
});

$(window).load(function(){
	/*$('.contents').hover(function(){
		$('nav').slideDown(3000).delay(10000).slideUp(5000);
	});*/

	$('.contents').click(function(){
		$('nav').slideToggle(3000);
	});
});
	

