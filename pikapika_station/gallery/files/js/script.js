(function($){
	
	window.Manager = {};
	
	var fileName = ["getflickr"];
	var src      = "files/js/";
	
	for(var i = 0; i < fileName.length; i++) {
		writeJS(fileName[i], src);
	}
	
	$(window).load(function(){
		
		Manager.init();
		_getflickr.getFlickr('75e502a0b0d64a841264f9e672414eeb', '65541944@N07');
		
		return false;
		
	});
	
	Manager.init = function() {
		
		_getflickr = Manager.getflickr;
		
		return false;
		
	};
	
	/* =======================================================================
	Write JS
	========================================================================== */
	function writeJS(fileName,src) {
		
		document.write('<script src="' + src + fileName + '.js"></script>');
		return false;
		
	}
	
	return false;
	
})(jQuery);