// 할인가가 있을때 소비자가 안나오게

$(".xans-product-detail .infoArea .prdInfo .optTit").each(function(){	
	var title = $(this).find("span").text();
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

if ($(".salePrice").length != 0)
{ 
	$(".prdInfo td span").each(function(){
		var text = $(this).text();
		if ( text == "소비자가")
		{
			$(this).parents("tr").remove();
		}
		
	});
		
}

setInterval(function(){
	$(".ec-base-table .view .ec-base-button .gLeft img").attr("src","/_images/btnDetail_board_modify.gif");
},100);




// 상품상세 버튼 트랜지션 삭제
setTimeout(function(){
$(".infoInner .btn_dark,.infoInner .btn_white,.infoInner .btn_point,.infoInner .btn_gray").removeClass("transition2s");
},100)


/* 탭영역 없을때 탭에서도 안나오게 처리 */

var relatedLen = $("#prdRelated").length;
var eventTabH = $(".eventArea .event").height();
var addTabLen = $(".productSet").length;

if ( relatedLen == 0 ){
	$(".tabRelation").remove();
}
 if ( eventTabH < 10 ){
	$(".eventTab").remove();
}
 if ( addTabLen == 0 ){
	$(".addTab").remove();
}

/* 탭메뉴 클릭시 위치이동*/

$(".tabNav .menu > li").click(function(){
	var idx = $(this).index();
	var tabNavS = $(".tabNav").eq(idx).offset();
	if (idx > 0)
	{
		$('html, body').animate({scrollTop: tabNavS.top - 50 },"swing");
	} else {
		$('html, body').animate({scrollTop: tabNavS.top - 150 },"swing");
	}	
});




//상세이미지 확대버튼
$('.xans-product-detail .imgArea .keyImg .btnThumb.zoom').hover(function(){
	$(this).html('확대');
},function(){
	$(this).html('<i class="xi-search"></i>');
});

//상세이미지 메일버튼
$('.xans-product-detail .imgArea .keyImg .btnThumb.mail').hover(function(){
	$(this).html('메일');
},function(){
	$(this).html('<i class="xi-mail-o"></i>');
});

