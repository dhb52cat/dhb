
jQuery(function () {
	validate();
});

function validate() {

	$.validator.setDefaults({
		highlight : function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass(
				'has-error');
		},
		success : function(element) {
			element.closest('.form-group').removeClass('has-error').addClass(
				'has-success');
		},
		errorElement : "span",
		errorPlacement : function(error, element) {
			// 隐藏错误信息
			if (element.is(":radio") || element.is(":checkbox")) {
				error.appendTo(element.parent().parent().parent());
			} else {
				error.appendTo(element.parent());
			}
		},
		errorClass : "help-block m-b-none",
		validClass : "help-block m-b-none"
	});
	
	jQuery('form', '#busi_add_dialog').validate({
		rules: {
			busiName: 'required'
		},
		messages: {
			busiName: '<span>'
		},
		submitHandler: function(form) {
			var param = $(form).serializeObject();
			ajax(basePath + '/system/busi/add.htm', 'POST', param, function(result) {
				if(result.code == 0) {
					layer.msg('商圈添加成功', { icon: 1 });
					layer.closeAll();
					jQuery('#dataTable').bootstrapTable('refresh', { url: basePath + '/system/busi/list.htm?timestamp=' + new Date().getTime() + '&pageNumber=1'});
				} else {
					layer.alert(result.msg);
				}
			});
		}
	});
}