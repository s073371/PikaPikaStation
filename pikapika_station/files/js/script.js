(function($){
	
	window.Manager = {};
	
	var fileName = ["geolocation", "common/menu"];
	var src      = "files/js/";
	
	for(var i = 0; i < fileName.length; i++) {
		writeJS(fileName[i], src);
	}
	
	$(document).ready(function(){
		
		Manager.init();
		
		//Geolocation APIに対応している
		if(navigator.geolocation){
		  _geo.getGeolocation();
		} else {
			//現在位置を取得できない場合の処理
			console.log("あなたの端末では、現在位置を取得できません。");
		}
		transformicons.add(".tcon");
		
		return false;
		
	});
	
	Manager.init = function() {
		
		_geo = Manager.geo;
		
		return false;
		
	};
	
	/* =======================================================================
	Write JS
	========================================================================== */
	function writeJS(fileName,src) {
		
		document.write('<script src="' + src + fileName + '.js" charset="UTF-8"></script>');
		return false;
		
	}
	
	return false;
	
})(jQuery);