$(document).ready(function() {
    var btnMenu = $('#btnMenu');
    var menu = $('#menu');
    
    btnMenu.on('click', function(e){
        e.preventDefault();
        menu.slideToggle(500);
    })

})