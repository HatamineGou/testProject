$(function(){
	$('.mainvisual-bg').stop().animate({'background-position':'+=' + '-1800' + 'px'},360000);
	setInterval(function(){
		$('.mainvisual-bg').stop().animate({'background-position':'+=' + '-1800' + 'px'},360000);
	},360000);
});