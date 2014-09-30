$(document).ready(function(){

	var passwordConfirm = $("#pass2");

	passwordConfirm.hide();
	$("#postuler").on('click', function (e) { 
		passwordConfirm.show();
		e.preventDefault();
		$(this).val("Yola");
		$(this).off();
	});
});
