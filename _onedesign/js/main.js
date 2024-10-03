/* 메인 비주얼 */
var bodyH =  window.innerHeight - 0;
$('.mainVisual .slider').height(bodyH);

setTimeout(function(){
$('.visualLayer').addClass('active');
},50);


$(window).scroll(function () {
	var scroll = $(this).scrollTop();
	var x = $(".bnGallery_wrap").position();
	if ( 0 < scroll  ) {
		$('.visualLayer').addClass('hide');
	} else if ( 0 == scroll  ) {
		$('.visualLayer').removeClass('hide');
	}
});