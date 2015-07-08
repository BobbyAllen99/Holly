$(document).ready(function() {

$(".fancybox").fancybox({
'transitionIn'  : 'elastic',
'transitionOut' : 'elastic',
'speedIn'   : 600, 
'speedOut'    : 200, 
'overlayShow' : false
});

});

$(".fancybox").fancybox({
openEffect  : 'elastic',
closeEffect : 'elastic',
afterLoad   : function() {
this.inner.prepend( '<h1>1. My custom title</h1>' );
this.content = '<h1>2. My custom title</h1>' + this.content.html();
}

});


