/* ���ȸ޼��� */
$(".security div").first().html("<i class=xi-shield-checked></i> ����, ���Ƚý��� ������ �Դϴ�.");


/* ��ȸ���� �α��� �����κ����� ���� addClass */
var non = $(".noLogin").length;
if (non == 1)
{
	$("#container").addClass("nologinwrap");
	/* �α��� �ִϸ���Ʈ */
	$(".loginwrap").delay(400).animate({opacity:1,marginLeft:0},800);
	$(".noLogin").delay(700).animate({opacity:1,marginRight:0},800);
	$(".nologinwrap .snsArea").delay(1200).animate({opacity:1,paddingTop:50},1200);


} else {
	/* �α��� �ִϸ���Ʈ */
	$(".loginwrap").delay(400).animate({opacity:1,marginTop:0},800);
	$(".snsArea ").delay(1200).animate({opacity:1,marginTop:20},800);
}



/* �ϴܿ�����ֱ� */
$("#footerTop").css("marginTop","0");

