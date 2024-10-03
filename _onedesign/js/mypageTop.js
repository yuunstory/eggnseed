
$('.headerMyshop .subMenu ul li').clone().prependTo(".mypageTop ul");
$('.headerCommu .subMenu ul li').clone().prependTo(".commuTop ul");



setTimeout(function(){
$("#order_search_btn").attr("src","/_images/btn_05_view.gif");
$(".mypageTop li a").each(function(){
	var h3bName = $(".titleArea_2 h2 b").text();
	var thisName = $(this).text();
	if ( thisName == h3bName )
	{	
		$(".mypageTop li").removeClass("selected");
		$(this).parent().addClass("selected");
	}
});

$(".commuTop li a").each(function(){
	var h3bName2 = $(".titleArea_2 h2 b").text();
	var thisName2 = $(this).text();
	if ( thisName2 == h3bName2 )
	{	
		$(".commuTop li").removeClass("selected");
		$(this).parent().addClass("selected");
	}
});

},100);

