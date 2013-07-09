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
     	ref(index,len);
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
        // remove attr(class & style)
        $('div.tube > img').removeAttr('class');
        $('div.tube > img').removeAttr('style');

        $('div.shower').css({'display':'none'});
      });
    });
      // forward btn clicked.
    $('div.forwardbtn').on('click',function(){
      // It was the last picture.
      // View first photo back to animation.
      if(index==len-1){
        $('div.tube > img').eq(0).attr('class','rightout');
        $('div.tube > img').eq(0).attr('style','right : -960px');
        $('div.tube > img').eq(0).css({
          'z-index':'1'
        });
       $('div.tube > img').eq(0).animate({
        'right':'0px'
       },400,'linear',function(){
        $('div.tube > img').eq(0).attr('class','active');
        index=0;
        ref(index,len);
       })
       // If the last picture was not
      }else{


      index++;

      $('div.tube > img').eq(index).stop().animate({
        'right':'0px'
      },400,'linear',function(){
        ref(index,len);
      });
      }
    });
    // backbtn clicked.
    $('div.backbtn').on('click',function(){
      //It was the frist picture.
     if(index<=0){
     // $('div.tube > img').attr('style','z-index : 0');
      $('div.tube > img').eq(len-1).attr('class','leftout');
      $('div.tube > img').eq(len-1).attr('style','left : -960px');
      $('div.tube > img').eq(len-1).css({'z-index':'1'});
      $('div.tube > img').eq(len-1).stop().animate({
          'left':'0px'
      },400,'linear',function(){
        $('div.tube > img').eq(len-1).attr('class','active');
        index=len-1;
        ref(index,len);
      });
     }else{

      index--;

      $('div.tube >img').eq(index).css({
      'z-index':'15'
    })
      $('div.tube > img').eq(index).stop().animate({
        'left':'0px'
      },400,'linear',function(){
        ref(index,len);
      })

     }
    })
    
    //----------//
   };
   //------------//
   function ref(action,total){
    for(var lastaction=0;lastaction<action;lastaction++){
      $('div.tube > img').eq(lastaction).attr('class','leftout');
      $('div.tube > img').eq(lastaction).attr('style','left : -960px;')
    };
    for(var nextaction=action+1;nextaction<total;nextaction++){
      $('div.tube > img').eq(nextaction).attr('class','rightout');
      $('div.tube > img').eq(nextaction).attr('style','right : -960px;')
    };
    $('div.tube > img').eq(action).attr('class','active');
    $('div.tube > img').eq(action).attr('style','left : 0px; right : 0px;');
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