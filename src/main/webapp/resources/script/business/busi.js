jQuery(function () {
	initEvent();
	jQuery('select').chosen({ 'width': '100%', no_results_text: "未找到此选项!" });
	function initEvent(){
		jQuery('#dataTable').delegate('a','click',function(event){
			if(this.id=='business_edit'){
				$("option", jQuery("#city1")).remove();
				$("#city1").trigger("chosen:updated");
				var data=$(this);
				var old = {
						'busiName': data.attr('businessName'),
						'province1': data.attr('provinceId'),
						'city1': data.attr('cityId'),
						'businessId':data.attr('businessId')
					};
					var busiEditDiv = jQuery('#busi_add_dialog');
					var form = jQuery('form', busiEditDiv);
					resetForm(form);
					form.fillForm(['input, select'], old);
					ajax(basePath + '/system/office/selectArea.htm', 'POST', { 'provId': jQuery("#province1").val(),'cityId':0}, function(result) {
						if(result.code == 0) {
							if(result.data) {
								var city = jQuery("#city1");
								$('option:not(:first)', city).remove();
								jQuery.each(result.data, function(index, value) {
									city.append("<option value='"+value.areaId+"'>"+value.areaName+"</option>");
								});
								$("#city1").val(data.attr('cityId'));
								$("#city1").trigger("chosen:updated");
								$("#province1").val(data.attr('provinceId'));
								$("#province1").trigger("chosen:updated");	
							}
						} else {
							layer.alert(result.msg);
						}
					});	
				layer.open({
				  	type: 1,
				  	shift: 5,
			  		title: '商圈修改',
				  	area: '600px',
				  	skin : 'layui-layer-lan layui-layer-no-overflow', //加上边框
				  	content: jQuery('#busi_add_dialog'),
				  	btn : ['修改', '取消'],
				  	yes: function(index, layero) {
						jQuery('form', jQuery('#busi_add_dialog')).submit();
				  	}
				});	
				
				

			}else if(this.id=='business_del'){
				var businessId = $(this).attr('businessId');
				layer.confirm('是否删除商圈？', {
				    btn: ['确定','取消'],
				    skin : 'layui-layer-lan'
				}, function() {
					ajax(basePath + '/system/busi/delBusi.htm', 'POST', {"businessId": businessId}, function(result) {
						if(result.code == 0) {
							layer.msg('删除商圈成功', { icon: 1 });
							jQuery('#dataTable').bootstrapTable('refresh', { url: basePath + '/system/busi/list.htm?timestamp=' + new Date().getTime() + '&pageNumber=1' });
						} else {
							layer.alert(result.msg);
						}
					});
				});
			}
			
		});
	}
	
	jQuery('#search,#reset').on('click', function(event) {
		if(event.target.id == 'search') {
			jQuery('#dataTable').bootstrapTable('refresh', { url: basePath + '/system/busi/list.htm?timestamp=' + new Date().getTime() + '&pageNumber=1' });
		}
	});
	
	jQuery('#busi_add').on('click', function() {
		
		var addOfficeDiv = jQuery('#busi_add_dialog');
		resetForm(jQuery('form', addOfficeDiv));
		$("#province1").val("");
		$("#province1").trigger("chosen:updated");
		$("option", jQuery("#city1")).remove();
		$("#city1").trigger("chosen:updated");
	
		layer.open({
		  	type: 1,
		  	shift: 5,
	  		title: '商圈添加',
		  	area: '600px',
		  	skin : 'layui-layer-lan layui-layer-no-overflow', //加上边框
		  	content: addOfficeDiv,
		  	btn : ['创建', '取消'],
		  	yes: function(index, layero) {
				jQuery('form', addOfficeDiv).submit();
		  	}
		});
	});
}

);
$("#province").on('change', function(){
	ajax(basePath + '/system/office/selectArea.htm', 'POST', { 'provId': jQuery("#province").val(),'cityId':0}, function(result) {
		if(result.code == 0) {
			if(result.data) {
				var city = jQuery("#cityId");
				$('option:not(:first)', city).remove();
				jQuery.each(result.data, function(index, value) {
					city.append("<option value='"+value.areaId+"'>"+value.areaName+"</option>");
				});
				city.trigger('chosen:updated');
			}
		} else {
			layer.alert(result.msg);
		}
	});	
});
$("#province1").on('change', function(){
	ajax(basePath + '/system/office/selectArea.htm', 'POST', { 'provId': jQuery("#province1").val(),'cityId':0}, function(result) {
		if(result.code == 0) {
			if(result.data) {
				var city = jQuery("#city1");
				$('option:not(:first)', city).remove();
				jQuery.each(result.data, function(index, value) {
					city.append("<option value='"+value.areaId+"'>"+value.areaName+"</option>");
				});
				city.trigger('chosen:updated');
				
			}
		} else {
			layer.alert(result.msg);
		}
	});	
});
function changeProv1(){
	jQuery('#city1').empty();
	jQuery('#area').empty();
	
	ajax(basePath + '/system/office/selectArea.htm', 'POST', { 'provId': jQuery("#province1").val(),'cityId':0}, function(result) {
		
		if(result.code == 0) {
			if(result.data) {
				var city=jQuery("#city1");
				city.append("<option value=''>"+"请选择城市"+"</option>");
				
				jQuery.each(result.data, function(index, value) {
	        		city.append("<option value='"+value.areaId+"'>"+value.areaName+"</option>");
				});
			}
		} else {
			layer.alert(result.msg);
		}
	});	
}

