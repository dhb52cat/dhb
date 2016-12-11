/**
 * form表单序列化
 * 
 * @return {}
 */
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (this.value && $.trim(this.value) != '') {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = $.trim(this.value || '');
			}
		}
	});

	return o;
}

/**
 * 自动填充表单
 */
$.fn.fillForm = function(array, data) {
	for (var i = 0, len = array.length; i < len; i++) {
		$.each($(array[i], this), function(index, item) {
			var obj = $(item);
			if(obj.attr('id') && data) {
				setValue(array[i], obj, data[obj.attr('id')]);
			} else if(obj.attr('name') && data) {
				setValue(array[i], obj, data[obj.attr('name')]);
			} else {
				setValue(array[i], obj, '');
			}
		});
	}

	function setValue(type, obj, value) {
		obj.val(value);
		/*
		 * if(type == 'input' || type == 'select') { obj.val(value); } else
		 * if(type == 'textarea') { obj.text(value); }
		 */
	}
}

/**
 * 表单重置
 * 
 * @param form
 * @param cfgKeyValidator
 * @returns
 */
function resetForm(form, cfgKeyValidator) {
	if (cfgKeyValidator) {
		cfgKeyValidator.resetForm();
	}
	$(form).get(0).reset();
	$(".form-group", form).removeClass("has-success has-error");
}

function ajax(url, method, data, success, error) {
	jQuery.ajax({
		url : url,
		dataType : 'json',
		data : data,
		type : method,
		success : success,
		error : error
	});
}
