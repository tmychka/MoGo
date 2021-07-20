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

        $this.addClass("active")
        $("#nav a").removeClass("active")
        $("#nav").removeClass("active")
        $("#nav_toggle").removeClass("active")

        $("html, body").animate({
            scrollTop: blockOffset
        }, 700)
    })

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    })

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this)
        const blockId = $this.data('collapse');

        $this.toggleClass("active");  
    })


    $("[data-slider]").slick({
        Infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});