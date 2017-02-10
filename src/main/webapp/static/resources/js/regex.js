
/**
 * 验证身份证号码
 * 
 * @returns
 */
String.prototype.cardNo = function() {
	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
	return (reg.test(this));
}


/**
 * 邮箱验证
 * 
 */
String.prototype.email = function() {
	var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return (reg.test(this));
}


/**
 * 手机号验证
 * 
 */
String.prototype.phone = function() {
	var reg = /^(((1[0-9]{2})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	return (reg.test(this));
}

