/* �α���,���̵�ã��,��й�ȣã�� �������� bg �ֱ� */
$("#container").addClass("bg").queue(function(){
	$("#footer-top").css({
		marginTop : "-10px"
	});
});


$("#mypageMain .leftMenu > h2").click(function(){
	var state = $(this).next("ul").css("display");
	if (state == "none")
	{	$(this).find("i").css("transform","rotate(0deg)");
		$(this).next("ul").slideDown();
	} else {
		$(this).find("i").css("transform","rotate(-180deg)");
		$(this).next("ul").slideUp();
	}

});


/* ���������� ���� �ִϸ���Ʈ ȿ�� */
$(".fRight .order li > strong").eq(0).delay(500).queue(function(next){
    $(this).addClass("active");
});

$(".fRight .order li > strong").eq(1).delay(600).queue(function(next){
    $(this).addClass("active");
});
$(".fRight .order li > strong").eq(2).delay(700).queue(function(next){
    $(this).addClass("active");
});
$(".fRight .order li > strong").eq(3).delay(800).queue(function(next){
    $(this).addClass("active");
});
$(".fRight .order li > strong").eq(4).delay(900).queue(function(next){
    $(this).addClass("active");
});
$(".fRight .order li > strong").eq(5).delay(1000).queue(function(next){
    $(this).addClass("active");
});
$(".fRight .order li > strong").eq(6).delay(1100).queue(function(next){
    $(this).addClass("active");
});

$(".fRight .msg").delay(1800).queue(function(next){
    $(this).addClass("active");
});



/* ���������� �ֹ�����Ʈ ȿ�� */

$(".myTable td").hover(function(){
	$(this).addClass("active");
	$(this).siblings("td").addClass("active");
},function(){
	$(this).removeClass("active");
	$(this).siblings("td").removeClass("active");
});

$(".main_orderList td").click(function(){
	window.location = $(this).parent().find(".detailUrl").attr("href");
});


var fLeft = $(".information").length;
if (fLeft  == 0)
{
	$(".fLeft").prepend("<div class='admin'><img src='/_images/adminMypage.gif'></div>");
}
$(".fLeft").css("height",$(".fRight").height() + 100);


/* ���� ������ */
setTimeout(function(){
var myleft1 = $("#xans_myshop_bankbook_avail_mileage").text().split("��");
var myleft2 = $("#xans_myshop_bankbook_deposit").text().split("��");

$("#xans_myshop_bankbook_avail_mileage").html(myleft1[0]);
$("#xans_myshop_bankbook_deposit").html(myleft2[0]);

},300);