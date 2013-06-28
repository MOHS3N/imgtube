(function( $ ) {
    $.fn.nss = function( ) {
    	function appendtag(){
    		$('body').append('
    			<div class="shower">
    			<div class="screen">
    			<div class="closebtn"></div>
    			<div class="backbtn"></div>
    			<div class="forwardbtn"></div>
    			</div>
    			</div>
    		');
    	};
        var elems = this;
        return elems.on('click', function(e) {
            e.preventDefault();
            var thisindx = elems.index(this);
            console.log(thisindx);
            console.log(elems.length);
            appendtag();
        });

    };
}( jQuery ))