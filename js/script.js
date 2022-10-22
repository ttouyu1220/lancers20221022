$(function() {
	$('#send-btn').click(function() {
		var type = $('#send-type:checked').map(function() {
			return $(this).val();
		}).get();
		var company = $('#send-company').val();
		var name = $('#send-name').val();
		var email = $('#send-email').val();
		var tel = $('#send-tel').val();
		var body = $('#send-body').val();
		if(type != '' && company != '' && name != '' && email != '' && tel != '' && body != ''){
			var fd = new FormData();
			var fd = new FormData($('#send-form').get(0));
			fd.append('type', type);
			fd.append('company', company);
			fd.append('name', name);
			fd.append('email', email);
			fd.append('tel', tel);
			fd.append('body', body);
			$.ajax({	
				url: './sendmail.php',
				type: 'POST',
				data: fd,
				cache: false,
				contentType: false,
				processData: false,
				dataType: 'html'
			}).done(function(data){
				alert("送信が完了しました。");
				location.href = "./index.html"; 
			});
		} else {
			alert('未入力の項目があります。');
		}
	});
});

$(function(){
	$('.j-header_toggle').on('click',function(){
		$('.j-header').toggleClass('open');
		$("body").toggleClass('fixed');
	});
});