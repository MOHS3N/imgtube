(function( $ ) {
    $.fn.nss = function( ) {
        var elems = this;
        return elems.on('click', function(e) {
            e.preventDefault();
            var thisindx = elems.index(this);
            console.log(thisindx);
        });
    };
}( jQuery ))