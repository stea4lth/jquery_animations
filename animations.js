// NOT USING ANIMATIONS

	//lockAnimation()
	//thumbAnimation()
	//wifiAnimation()
	function wifiAnimation(){
		var $wifi = $('[class="fa fa-wifi"]');
		if($wifi.length){
			var $btn = $wifi.parent().parent()
			$btn.hover(function(){
				$wifi.addClass('pulse')
			}, function(){
				$wifi.removeClass('pulse')
			});
		}
	}
	function thumbAnimation(){
		var $thumb = $('.thumb');
		if($thumb.length){
			var $btn = $thumb.parent()
			$btn.hover(function(){
				$thumb.addClass('hatch')
			}, function(){
				$thumb.removeClass('hatch')
			});
		}
	}
	function lockAnimation(){
		var $lock = $('[class="fa fa-lock"]');
		if($lock.length){
			var $btn = $lock.parent().parent()
			$btn.hover(function(){
				$lock.removeClass('fa-lock').addClass('fa-unlock pulse');
			}, function(){
				$lock.removeClass('fa-unlock pulse').addClass('fa-lock');
			});
		}
	}
