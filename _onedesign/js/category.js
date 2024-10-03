/**
 * 카테고리 마우스 오버 이미지
 * 카테고리 서브 메뉴 출력
 */

$(document).ready(function(){

    var methods = {
        aCategory    : [],
        aSubCategory : {},

        get: function()
        {
             $.ajax({
                url : '/exec/front/Product/SubCategory',
                dataType: 'json',
                success: function(aData) {
					
                    if (aData == null || aData == 'undefined') return;
                    for (var i=0; i<aData.length; i++)
                    {
                        var sParentCateNo = aData[i].parent_cate_no;

                        if (!methods.aSubCategory[sParentCateNo]) {
                            methods.aSubCategory[sParentCateNo] = [];
                        }

                        methods.aSubCategory[sParentCateNo].push( aData[i] );
                    }



                }
            })
        },

        getParam: function(sUrl, sKey) {

            var aUrl         = sUrl.split('?');
            var sQueryString = aUrl[1];
            var aParam       = {};

            if (sQueryString) {
                var aFields = sQueryString.split("&");
                var aField  = [];
                for (var i=0; i<aFields.length; i++) {
                    aField = aFields[i].split('=');
                    aParam[aField[0]] = aField[1];
                }
            }
            return sKey ? aParam[sKey] : aParam;
        },

        getParamSeo: function(sUrl) {
            var aUrl         = sUrl.split('/');
            return aUrl[3] ? aUrl[3] : null;
        },

        show: function(overNode, iCateNo) {

        

            var aHtml = [];
            aHtml.push('<ul>');
            $(methods.aSubCategory[iCateNo]).each(function() {
                aHtml.push('<li><a href="'+this.link_product_list+'" class="transition2s">'+this.name+'</a></li>');
            });
            aHtml.push('</ul>');

			
            var offset = $(overNode).offset();

			
			$('<div class="sub-category"></div>')
				.appendTo(overNode)
				.html(aHtml.join(''))
				.find('li').mouseover(function(e) {
					$(this).addClass('over');
				}).mouseout(function(e) {
					$(this).removeClass('over');
				});
			

        },

        close: function() {
			$('.sub-category').remove();
			$('.category li').removeClass('first');
        }
    };

    methods.get();



(function($) {
	$(function() {
		$('.xans-layout-category li.cate1').each(function(e) {

			var $this = $(this).addClass('on'),
			iCateNo = Number(methods.getParam($this.find('a').attr('href'), 'cate_no'));
			if (!iCateNo) {
				iCateNo = Number(methods.getParamSeo($this.find('a').attr('href')));
			}
			if (!iCateNo) {
				return;
			}

			$(this).children('a').addClass('cName').prepend('<span class="bg"></span>');

			setTimeout(function () {
				methods.show($this, iCateNo);
			},200);

			//asdf
			


			setTimeout(function () {
			
			$(".logoArea_left > .category > .position > li > .sub-category").each(function() {
				var sublen = $(this).find("li").length;
				if (sublen > 0)
				{
					/*
					var st = $(this).parent().find(".st");				
					st.prependTo(this);
					*/

					var cc1 = - ($(this).width() / 2);
					var cc2 = $(this).parent().width() / 2;
					$(this).css("left",cc1 + cc2);
				} else {
					$(this).remove();
				}

			});
			},210);	

			
			

			},function(){		
				$(this).removeClass('on');
				methods.close();
			});
		}); 		
		$("#btn-allCate").click(function(){
			$(".allCate_con ul").remove();
			var cateClone = $(".category > ul").clone();
			cateClone.prependTo(".allCate_con");
			$(".allCate_con > .position > li").eq(0).remove();
			$(".allCate_con .st").remove();
			$(".allCate_con .cate1 .cName").prepend("<i class='xi-angle-right-min'></i>");
			$(".allCate_con .cate1 .sub-category > ul > li").prepend("<i class='xi-angle-right-min'></i>");
		});
		$("#allCate .sub-category > ul > li").click(function(){
			window.location = $(this).find("a").attr("href");
		});
	})(jQuery);
});






setTimeout(function () {
	$(".category > .position > li > .sub-category").each(function(){
		var st = $(this).find(".st")
		var stlen = st.length;
		if (stlen > 0)
		{			
			var thisW = $(this).width();
			var thisH = $(this).height();
			var stW = st.width() + thisW;
			var stW2 = stW + 80;		
			$(this).css("width",stW2);
			var stH = st.height();
			var stH2 = stH + 0;
			if (stH > thisH)
			{	
				$(this).css("height",stH2);
			}
		}
	});
},300);	



$('#header .category > ul > li.etc').each(function(){
	var etcDisplay = $(this).css('display');
	if (etcDisplay=='none')
	{
		$(this).remove();
	}
});
