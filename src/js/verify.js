$(function(){
			var flagTel = false, flagPsd = false;
			var $logTel = $('#username'),
					$logPsd = $('#password'),
					$telError = $('#tel-error'),
					$psdError = $('#psd-error');
					var $regTel = $('#regName'),
					$regPsd = $('#regPsd');
			//登录验证		
			verTel($logTel, $telError);
			verPsd($logPsd, $psdError);

			//登录提交表单
			$('#login-btn').on('click', function(){
				alert(flagTel && flagPsd)
				alert(flagTel)
				alert(flagPsd)
				if(flagTel && flagPsd){
					alert('success')				
				}
			});
			
			//注册验证
			verTel($regTel, $telError);
			verPsd($regPsd, $psdError);
			//注册提交表单
			$('#reg-btn').on('click', function(){
					if(flagTel && flagPsd){
						alert('success');
						
					}else{
						if(!flagTel && !flagPsd){
							$regTel.addClass('val-error');
							$regPsd.addClass('val-error');
							if(typeof($tel) == "undefined"){
								$telError.show().text("手机号不能为空!");
							}
							if(typeof($psd) == "undefined"){
								$psdError.show().text("密码不能为空!");	
							}										
						}else if(!flagTel){
							$regTel.addClass('val-error');
						}else{
							$regPsd.addClass('val-error');
						}

					}

			});

			//封装手机验证
			function verTel(inputObj, msgObj){
				inputObj.bind('input propertychange', function() {
					var telReg = /^13[0-9]{1}[0-9]{8}|^18[0-9]{1}[0-9]{8}|^15[0-9]{1}[0-9]{8}|^17[0-9]{1}[0-9]{8}$/;
					$tel = inputObj.val();			
					inputObj.removeClass('val-success');
					inputObj.addClass('val-error');
					if($tel == null || $tel == ''){//判断是否为空
						msgObj.show().text("手机号不能为空!");
					}else if(!telReg.test($tel)){
						msgObj.show().text("手机号不正确!");			
					}else{
						inputObj.removeClass('val-error');
						inputObj.addClass('val-success');
						msgObj.hide();
						flagTel = true;	
				
					}

					
				})//手机验证结束
			}	

			//封装密码验证
			function verPsd(inputObj, msgObj){
				inputObj.bind('input propertychange', function() {
					$psd = inputObj.val();
					inputObj.removeClass('val-success');
					inputObj.addClass('val-error');
					if($psd == null || $psd == ''){
						msgObj.show().text("密码不能为空!");
					}else if($psd.length < 6){
						msgObj.show().text("密码长度要大于6个字符");
					}else{
						inputObj.removeClass('val-error');
						inputObj.addClass('val-success');
						msgObj.hide();
						flagPsd = true;				
					}

					
				})//密码验证结束
			}	

		});



		