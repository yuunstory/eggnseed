/* 로그인,아이디찾기,비밀번호찾기 페이지등 bg 넣기 */
$("#container").addClass("bg").queue(function(){
	$("#footer-top").css({
		marginTop : "-10px"
	});
});


/******* placeholder 바꾸기 *********/

/* 아이디찾기 */
$('.findId input[name="name"]').attr('placeholder',' 이름을 입력해 주세요');
$('.findId input[name="email"]').attr('placeholder',' 이메일을 입력해 주세요');
$('.findId input[name="mobile1"]').attr('placeholder',' XXX');
$('.findId input[name="mobile2"]').attr('placeholder',' XXXX');
$('.findId input[name="mobile3"]').attr('placeholder',' XXXX');

/* 비밀번호찾기 */
$('.findPw input[name="member_id"]').attr('placeholder',' 아이디를 입력해 주세요');
$('.findPw input[name="name"]').attr('placeholder',' 이름을 입력해 주세요');
$('.findPw input[name="email"]').attr('placeholder',' 이메일을 입력해 주세요');
$('.findPw input[name="mobile1"]').attr('placeholder',' XXX');
$('.findPw input[name="mobile2"]').attr('placeholder',' XXXX');
$('.findPw input[name="mobile3"]').attr('placeholder',' XXXX');

/* 회원가입페이지*/
$('.memberJoin input[name="member_id"]').attr('placeholder',' 아이디 (영문소문자/숫자, 4~16자)');
$('.memberJoin input[name="passwd"]').attr('placeholder',' 비밀번호');
$('.memberJoin input[name="user_passwd_confirm"]').attr('placeholder',' 비밀번호 확인');
$('.memberJoin input[name="hint_answer"]').attr('placeholder',' 비밀번호 찾기시 사용되는 답변입니다');

$('.memberJoin input[name="name_en"]').attr('placeholder',' 이름(영문)');
$('.memberJoin input[name="postcode1"]').attr('placeholder',' 우편번호');
$('.memberJoin input[name="addr1"]').attr('placeholder',' 기본주소');
$('.memberJoin input[name="addr2"]').attr('placeholder',' 나머지주소');
$('.memberJoin input[name="email1"]').attr('placeholder',' 이메일');
$('.memberJoin input[name="cname"]').attr('placeholder',' 상호명');
$('.memberJoin input[name="cssn"]').attr('placeholder',' 사업자번호');
$('select#hint').prepend("<option>비밀번호 찾기시 질문을 선택해주세요</option>");
$('.memberJoin input[name="bank_account_owner"]').attr('placeholder',' 예금주');
$('.memberJoin input[name="bank_account_no"]').attr('placeholder',' 계좌번호');
/* 아이디비번찾기 */
$('input[name="new_passwd"]').attr('placeholder',' 새로운 비밀번호 입력');
$('input[name="new_passwd_confirm"]').attr('placeholder',' 비밀번호 확인');






setTimeout(function(){
$('select#hint option:eq(0)').attr("selected","selected");
$('.memberJoin input[name="name"]').attr('placeholder',' 이름');

},100);

$(".addname").prepend("<i class='xi-angle-right-min'></i> ");

