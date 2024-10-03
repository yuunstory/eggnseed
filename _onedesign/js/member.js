/* 보안메세지 */
$(".security div").first().html("<i class=xi-shield-checked></i> 현재, 보안시스템 가동중 입니다.");


/* 비회원시 로그인 디자인변경을 위한 addClass */
var non = $(".noLogin").length;
if (non == 1)
{
	$("#container").addClass("nologinwrap");
	/* 로그인 애니메이트 */
	$(".loginwrap").delay(400).animate({opacity:1,marginLeft:0},800);
	$(".noLogin").delay(700).animate({opacity:1,marginRight:0},800);
	$(".nologinwrap .snsArea").delay(1200).animate({opacity:1,paddingTop:50},1200);


} else {
	/* 로그인 애니메이트 */
	$(".loginwrap").delay(400).animate({opacity:1,marginTop:0},800);
	$(".snsArea ").delay(1200).animate({opacity:1,marginTop:20},800);
}



/* 하단여백없애기 */
$("#footerTop").css("marginTop","0");

