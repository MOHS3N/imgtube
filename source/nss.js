(function( $ ) {

	function appendtag(tag,len,active){
       $('body').append('<div class="shower"></div>');
       $('div.shower').append('<div class="screen"></div>');
       $('div.screen').append('<div class="tube"></div>');
       for(var num=0;num<len;num++){
       	$('div.tube').append('<img src="' + tag.eq(num).attr('href')+'" width="950" height="600"/>');
       };

       for(var i=0; i<active;i++){
			$('div.tube > img').eq(i).attr('class','leftout');
			$('div.tube > img').eq(i).attr('style','left : -960px;')
		};

		for(var j=active+1;j<len;j++){
			$('div.tube > img').eq(j).attr('class','rightout');
			$('div.tube > img').eq(j).attr('style','right : -960px;')
		};

		$('div.tube > img').eq(active).attr('class','active');
		$('div.tube > img').eq(active).attr('style','left : 0px; right : 0px;');
     }

    $.fn.nss = function( ) {
    	
        var elems = this;
        return elems.on('click', function(e) {
            e.preventDefault();
            var thisindx = elems.index(this);
            var elemslen = elems.length;
            console.log(thisindx);
            console.log(elems.length);
            appendtag(elems,elemslen,thisindx);
        });

    };
}( jQuery ))