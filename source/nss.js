(function( $ ) {
	// this function is create main slider plugin tag.
	function appendtag(tag,len){
       $('body').append('<div class="shower"></div>');
       $('div.shower').append('<div class="screen"></div>');
       $('div.screen').append('<div class="tube"></div>');
       $('div.screen').append('<div class="closebtn"></div>');
       $('div.screen').append('<div class="backbtn"></div>');
       $('div.screen').append('<div class="forwardbtn"></div>');

       // this for is create slider Image.
       for(var num=0;num<len;num++){
       	$('div.tube').append('<img src="' + tag.eq(num).attr('href')+'" width="950" height="600"/>');
       };
     };

     // this function is set CSS position and Manage Slider Animation.
     // this function is Two input.
     // index = $(this).index().
     // len = this.length.
     function setslide(index,len){
     	// this for is add class img tag befor $(this).index() And set style.
     	for(var i=0; i<index;i++){
			$('div.tube > img').eq(i).attr('class','leftout');
			$('div.tube > img').eq(i).attr('style','left : -960px;')
		};
		// this for is add class img tag after $(this).index() and set style.
		for(var j=index+1;j<len;j++){
			$('div.tube > img').eq(j).attr('class','rightout');
			$('div.tube > img').eq(j).attr('style','right : -960px;')
			
		};
		// this code is add class active for selected img (this), and set Style.
		$('div.tube > img').eq(index).attr('class','active');
		$('div.tube > img').eq(index).attr('style','left : 0px; right : 0px;');

		// start base animate of this plugin
		$('div.shower').css({'display':'block'});
		$('div.shower').stop().animate({
			'opacity':'1'
		},500)
    //Close btn clicked.
		$('div.closebtn').on('click',function(){
      $('div.shower').stop().animate({
        'opacity':'0'
      },500,'linear',function(){

        $('div.tube > img').removeAttr('class');
        $('div.tube > img').removeAttr('style');

        $('div.shower').css({'display':'none'});
      });
    });
    
    
   };

    $.fn.nss = function( ) {
    	//start plugin :)
		// elems = all <a> tag rel=group
        var elems = this;
        // this var Checked for Frist Time Load plugin
        var firstLoad="yes";


        return elems.on('click', function(e) {
            e.preventDefault();
            // thisindx is $('a[rel="group"]')index(this);
            var thisindx = elems.index(this);
            // elems is all $('a[rel="group"]').length
            var elemslen = elems.length;
            console.log(thisindx);
            console.log(elems.length);
            if(firstLoad=="yes"){
            	// if frist Time Load plugin run function appenttag() and setslide();
            	// appendtag for generat plugin tag.
            	 appendtag(elems,elemslen);
            	 setslide(thisindx,elemslen);
            	 firstLoad="no";
            	 console.log(firstLoad);
            }else{
            	// if not frist load plugin , not re generat plugin tag
            	setslide(thisindx,elemslen);
            	console.log(firstLoad);
            }
           
        });


        return this;
    };
}( jQuery ))