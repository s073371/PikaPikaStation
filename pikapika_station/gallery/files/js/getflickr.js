/* =======================================================================
Getflickr
========================================================================== */
(function($,_) {
	
	var _this, _window, _target;
	
	(function(){
		
		_.getflickr = _this = {};
		_window     = $(window);
		_target     = $("#gallery");
		
	})();
	
	_this.getFlickr = getFlickr;
	
	/* -------------------------
	Get Flickr
	------------------------- */
	function getFlickr(key, id) {
		
		$.ajax({
        type : 'GET',
        url  : 'https://www.flickr.com/services/rest/',
        data : {
            format   : 'json',
            method   : 'flickr.photos.search', // 必須 :: 実行メソッド名 
            api_key  : key, // 必須 :: API Key
            user_id  : id, // 任意 :: userID
            per_page : '50', // 任意 :: 1回あたりの取得件数
        },
        dataType : 'jsonp',
        jsonp : 'jsoncallback', // Flickrの場合はjsoncallback
        success : _getFlickrPhotos // 通信が成功した場合の処理
    });
		
		function _getFlickrPhotos(data){
			var dataStat  = data.stat;
			var dataTotal = data.photos.total;
			
			if(dataStat == 'ok'){
				var htmlSrc = "";
				var length  = data.photos.photo.length;
				
				for(var i = 0; i < length; i++) {
					var photo      = data.photos.photo[i];
					var itemFarm   = photo.farm;
					var itemServer = photo.server;
					var itemOwner  = photo.owner;
					var itemID     = photo.id;
					var itemSecret = photo.secret;
					var title      = photo.title;
					
					var itemPath   = 'https://farm' + itemFarm + '.static.flickr.com/' + itemServer + '/' + itemID + '_' + itemSecret + '_m.jpg';
					var flickrSrc  = '<img src="' + itemPath + '" alt="' + title + '" width="200" height="200">';
					var itemLink   = 'https://www.flickr.com/photos/'+ itemOwner +'/' + itemID + '/';
					htmlSrc       += '<div class="item"><a href="' + itemLink + '" target="_blank">' + flickrSrc + '</a></div>';
				}
				
				_target.append(htmlSrc);
				showItems(length);
			}
			return false;
		}
		
		/* -------------------------
		Show Items
		------------------------- */
		function showItems(num) {
			
			var photo = _target.find(".item");
			
			for(var i = 0; i < num; i++) {
				
				photo.eq(i).show().stop().delay(15 * i).animate({
					'opacity' : 1,
					'top'    : 0
				});
				
			}
			
			return false;
		}
		
		
		return false;
	}
	
	return false;
	
})(jQuery,Manager);