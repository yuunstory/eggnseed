/* �α���,���̵�ã��,��й�ȣã�� �������� bg �ֱ� */
$("#container").addClass("bg").queue(function(){
	$("#footer-top").css({
		marginTop : "-10px"
	});
});


/******* placeholder �ٲٱ� *********/

/* ���̵�ã�� */
$('.findId input[name="name"]').attr('placeholder',' �̸��� �Է��� �ּ���');
$('.findId input[name="email"]').attr('placeholder',' �̸����� �Է��� �ּ���');
$('.findId input[name="mobile1"]').attr('placeholder',' XXX');
$('.findId input[name="mobile2"]').attr('placeholder',' XXXX');
$('.findId input[name="mobile3"]').attr('placeholder',' XXXX');

/* ��й�ȣã�� */
$('.findPw input[name="member_id"]').attr('placeholder',' ���̵� �Է��� �ּ���');
$('.findPw input[name="name"]').attr('placeholder',' �̸��� �Է��� �ּ���');
$('.findPw input[name="email"]').attr('placeholder',' �̸����� �Է��� �ּ���');
$('.findPw input[name="mobile1"]').attr('placeholder',' XXX');
$('.findPw input[name="mobile2"]').attr('placeholder',' XXXX');
$('.findPw input[name="mobile3"]').attr('placeholder',' XXXX');

/* ȸ������������*/
$('.memberJoin input[name="member_id"]').attr('placeholder',' ���̵� (�����ҹ���/����, 4~16��)');
$('.memberJoin input[name="passwd"]').attr('placeholder',' ��й�ȣ');
$('.memberJoin input[name="user_passwd_confirm"]').attr('placeholder',' ��й�ȣ Ȯ��');
$('.memberJoin input[name="hint_answer"]').attr('placeholder',' ��й�ȣ ã��� ���Ǵ� �亯�Դϴ�');

$('.memberJoin input[name="name_en"]').attr('placeholder',' �̸�(����)');
$('.memberJoin input[name="postcode1"]').attr('placeholder',' �����ȣ');
$('.memberJoin input[name="addr1"]').attr('placeholder',' �⺻�ּ�');
$('.memberJoin input[name="addr2"]').attr('placeholder',' �������ּ�');
$('.memberJoin input[name="email1"]').attr('placeholder',' �̸���');
$('.memberJoin input[name="cname"]').attr('placeholder',' ��ȣ��');
$('.memberJoin input[name="cssn"]').attr('placeholder',' ����ڹ�ȣ');
$('select#hint').prepend("<option>��й�ȣ ã��� ������ �������ּ���</option>");
$('.memberJoin input[name="bank_account_owner"]').attr('placeholder',' ������');
$('.memberJoin input[name="bank_account_no"]').attr('placeholder',' ���¹�ȣ');
/* ���̵���ã�� */
$('input[name="new_passwd"]').attr('placeholder',' ���ο� ��й�ȣ �Է�');
$('input[name="new_passwd_confirm"]').attr('placeholder',' ��й�ȣ Ȯ��');






setTimeout(function(){
$('select#hint option:eq(0)').attr("selected","selected");
$('.memberJoin input[name="name"]').attr('placeholder',' �̸�');

},100);

$(".addname").prepend("<i class='xi-angle-right-min'></i> ");

