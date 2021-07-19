$(function() {

    const header = $('#header')
    const introH = $('#intro').innerHeight()
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset)

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset)
    })

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

});