/* 검색 */

$('.xans-layout-searchheader #keyword').attr('placeholder','상품을 검색하세요');




/* 칼라칩위치, 흰색보더주기 */
$('.ec-base-product .spec li .color').parent('li').addClass('colorchip');

$('.ec-base-product .spec li .chips').each(function(){
	var atitle = $(this).attr('title');
	if ( atitle == '#FFFFFF') {
		$(this).addClass('white');
	} 
});

// 상품설명 li에 항목명에 따른 클래스값추가
$(".prdList li li").each(function(){	
	var title = $(this).find("strong.title").text();
	if (title.match('할인가') || title.match('할인판매가')){
		$(this).addClass("salePrice");
	} else if (title.match('판매가'))
	{	
		$(this).addClass("price");
	} else if (title.match('소비자가'))
	{	
		$(this).addClass("customPrice");
	} else if (title.match('간략설명'))
	{	
		$(this).addClass("subName");
	}
});

// 버튼 이미지 출력되지 않을 경우 버튼영역 없애기
$('.button .btn_thumb').each(function(){
	var listBtn_imgLen = $(this).find('img').length;
	if (listBtn_imgLen == 0)
	{
		$(this).remove();
	}
});


// 상품클릭시
$(".ec-base-product .prdList > li .description").click(function(){
window.location = $(this).find("a").attr("href");
});




// 하위의 하위분류 있을 경우
$('.xans-product-menupackage .menuCategory > li').each(function(){
	if( $(this).children('ul').length > 0 ) {
		$(this).css('width', '210px').append('<i class="xi-angle-down-min"></i>');
		$('.xans-product-menupackage .menuCategory > li').css({width:'210px'});
	}
});


