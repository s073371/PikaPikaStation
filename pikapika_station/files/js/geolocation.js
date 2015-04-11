/* =======================================================================
Geolocation
========================================================================== */
(function($,_) {
	
	var _this, _window, _geo;
	
	(function(){
		
		_.geo   = _this = {};
		_window = $(window);
		
		_geo = navigator.geolocation;
		
	})();
	
	_this.getGeolocation = getGeolocation;
	
	/* -------------------------
	Get Geolocation
	------------------------- */
	function getGeolocation() {
		
		//オプション・オブジェクト
		var option = {
			"enableHighAccuracy" : false,
			"timeout"            : 8000,
			"maximumAge"         : 5000
		};
		
		_geo.getCurrentPosition(success, error, option);
		
		//成功時
		function success(pos){
			//緯度
			test(pos.coords.latitude);
		
			//経度
			test(pos.coords.longitude);
		}
		
		function error(error) {
			
			//エラーコードのメッセージを定義
			var errorMessage = {
				0: "原因不明のエラーが発生しました…。",
				1: "位置情報の取得が許可されませんでした…。",
				2: "電波状況などで位置情報が取得できませんでした…。",
				3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。",
			};
		
			//エラーコードに合わせたエラー内容をアラート表示
			test(errorMessage[error.code]);
			
			return false;
		}
		
		
		return false;
	}
	
	function test(data) {
		console.log(data);
		return false;
	}
	
	return false;
	
})(jQuery,Manager);