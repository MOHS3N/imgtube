(function( $ ) {

	function appendtag(tag,len){
       $('body').append('<div class="shower"></div>');
       $('div.shower').append('<div class="screen"></div>');
       $('div.screen').append('<div class="tube"></div>');
       $('div.screen').append('<div class="closebtn"></div>');
       $('div.screen').append('<div class="backbtn"></div>');
       $('div.screen').append('<div class="forwardbtn"></div>');
       for(var num=0;num<len;num++){
       	$('div.tube').append('<img src="' + tag.eq(num).attr('href')+'" width="950" height="600"/>');
       };
     };

     function setslide(index,len){
     	for(var i=0; i<index;i++){
			$('div.tube > img').eq(i).attr('class','leftout');
			$('div.tube > img').eq(i).attr('style','left : -960px;')
		};

		for(var j=index+1;j<len;j++){
			$('div.tube > img').eq(j).attr('class','rightout');
			$('div.tube > img').eq(j).attr('style','right : -960px;')
			
		};

		$('div.tube > img').eq(index).attr('class','active');
		$('div.tube > img').eq(index).attr('style','left : 0px; right : 0px;');

		$('div.shower').css({'display':'block'});
		$('div.shower').stop().animate({
			'opacity':'1'
		},500)

		$('div.closebtn').click(function(){
			$('div.shower').stop().animate({
				'opacity':'0'
			},500,'linear',function(){
				$('div.shower').css({'display':'none'});
			})

		})
     };

    $.fn.nss = function( ) {
    	
        var elems = this;
        var firstLoad="yes";

        return elems.on('click', function(e) {
            e.preventDefault();

            var thisindx = elems.index(this);
            var elemslen = elems.length;
            console.log(thisindx);
            console.log(elems.length);
            if(firstLoad=="yes"){
            	 appendtag(elems,elemslen);
            	 setslide(thisindx,elemslen);
            	 firstLoad="no";
            	 console.log(firstLoad);
            }else{
            	setslide(thisindx,elemslen);
            	console.log(firstLoad);
            }
           
        });


        return this;
    };
}( jQuery ))