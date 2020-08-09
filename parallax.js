$(window).scroll(function() {
    parallax();
    })
    
    function parallax() {
    
        var wScroll = $(window).scrollTop();
    
        $('#landingpage').css('background-position', 'center ' + (wScroll*0.7) + 'px')
    }