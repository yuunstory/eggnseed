$('.ec-base-button img').each(function(){
	var imgSrc = $(this).attr('src');
	if (imgSrc.match('//img.echosting.cafe24.com/skin/base_ko_KR/order/btn_option_add.gif')){
		$(this).attr('src','/_images/btnBasket_layer_1.gif');
	} else if (imgSrc.match('//img.echosting.cafe24.com/skin/base_ko_KR/order/btn_option_modify.gif')){
		$(this).attr('src','/_images/btnBasket_layer_2.gif');
	}
});

