$(window).scroll(function () {
	var scroll = $(this).scrollTop();
	if (  scroll > 100 ) {
		$('.btnAll').addClass('active');
		$('.scrollBtn').fadeIn();
	} else {
		$('.btnAll').removeClass('active');
		$('.scrollBtn').fadeOut();
	}
});



/* �ߺз� ���� �޴�  �ߺз��ڽ� ����ȵǰ�*/
setTimeout(function(){
$('#header .category > ul > li.cate1').each(function(){     
    var subLenss = $(this).find('.sub-category li').length;        
    if ( subLenss < 1){ 
        $(this).find('.sub-category').remove();	
    }
});
},300);
    

/* �ϴ�Ŭ�� */
$('#footer .bgFoot i').click(function(){
	$('#footer .bgFoot div').fadeIn();
	$('html, body').animate({scrollTop: $(document).height()},"swing");
});

/* �Խ��� Ÿ��Ʋ ������ �ڽ� �ȳ����� */

if ($('.boardTitle2 img').length < 1)
{
	$('.boardTitle2').hide();
}

var aa = (window.location.href);

if (aa.match('/myshop/wish_list.html')){
	$(".ec-base-table .message2 h3").delay(400).animate({paddingTop:70,opacity:1},700);
	$(".ec-base-table .message2 h4").delay(1300).animate({paddingTop:23,opacity:1},800);
} else if (aa.match('/order/basket.html'))
{
	$(".ec-base-table .message2 h3").delay(400).animate({paddingTop:70,opacity:1},700);
	$(".ec-base-table .message2 h4").delay(1300).animate({paddingTop:23,opacity:1},800);

}



/* �������̹��� */
var pageBtn = $('.ec-base-paginate > a').length;
if( pageBtn == 4)
{
	$('.ec-base-paginate > a').eq(0).children('img').attr('src','/_images/page-first.png');
	$('.ec-base-paginate > a').eq(1).children('img').attr('src','/_images/page-prev.png');
	$('.ec-base-paginate > a').eq(2).children('img').attr('src','/_images/page-next.png');
	$('.ec-base-paginate > a').eq(3).children('img').attr('src','/_images/page-last.png');

	$('.ec-base-paginate > a').eq(0).css('display','none');
	$('.ec-base-paginate > a').eq(3).css('display','none');
}
else if( pageBtn == 2 )
{
	$('.ec-base-paginate > a').eq(0).children('img').attr('src','/_images/page-prev.png');
	$('.ec-base-paginate > a').eq(1).children('img').attr('src','/_images/page-next.png');
}


/* ��ü�޴����� */

$('.btnAll').click(function(){
	var state = $('#hideMenu').css('opacity');
	if (state != 1)
	{
		$('#hideMenu').addClass('active');
		$('.btnAll').addClass('open');
	} else {
		$('#hideMenu').removeClass('active');
		$('.btnAll').removeClass('open');
	}	
});