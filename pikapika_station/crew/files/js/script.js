(function($){
	
	window.Manager = {};
	var _hash;
	
	$(window).load(function(){
		
		/*
		your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します
		ローカルの場合ポート番号443を付けないと動かない
		*/
		
		_hash = String(location.href).split("?crew=")[1];
		var _milkcocoa = new MilkCocoa("https://io-hi82jdvo6.mlkcca.com:443");
		
		milkcocoa(_milkcocoa);
		
		return false;
		
	});
	
	Manager.init = function() {
		
		_loadData = Manager.loadData;
		
		return false;
		
	};
	
	/* =======================================================================
	milkcocoa
	========================================================================== */
	function milkcocoa(cocoa) {
		
		var chatDataStore = cocoa.dataStore(_hash);
		
		getData(chatDataStore);
		
		var textArea = $("#msg");
		var result   = $("#result");
		var greeting = $("#greeting").find("li");
			
		greeting.on('click', clickEvent);
			
		function clickEvent(){
			var text = $(this).text();
			sendText(text);
		}
		
		function sendText(text){
			chatDataStore.push({message : text},function(data){
				//$BAw?.40N;(B
			});
		}
		
		chatDataStore.on("push",function(data){
			addText(data.value.message);
		});
		
		function addText(text){
			var msgDom = "";
			msgDom     = '<div class="guest comment"><p>' + text + '</p></div>';
			result.prepend(msgDom, result.firstChild);
			result.find(".comment:first-child").css({"opacity":0}).show().stop().animate({
					"opacity" : 1,
					"margin-right" : 0
				}, 300);
		}
		
		return false;
		
	}
	
	function getData(ds) {
		
		var result = $("#result");
		var html   = "";
		
		ds.query({}).done(function(e) {
			
			var length = e.length;
			
			if(length == 0) return false;
			
			for (var i = length - 1; i > length - 12; i--) {
				var id  = e[i].id;
				var txt = e[i].message;
				
				html += '<div class="guest comment"><p>' + txt + '</p></div>';
			}
			result.append(html);
			showData();
			
		});
		
		function showData() {
			var target = result.find(".comment");
			var length = target.length;
			
			target.css({"opacity":0}).show();
			
			for(var i = 0; i < length; i++) {
				target.eq(i).stop().delay(50*i).animate({
					"opacity" : 1,
					"margin-right" : 0
				}, 300);
			}
		}
		
		return false;
	}
	
	return false;
	
})(jQuery);