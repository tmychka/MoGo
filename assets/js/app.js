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

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this)
        const blockId = $this.data('scroll');
        const blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active")
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffset
        }, 700)
    })

});