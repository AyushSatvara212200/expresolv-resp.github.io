$(document).ready(function () {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'right',
        contain: true,
        prevNextButtons: false,
        fade: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: false,
    });
});

$(document).ready(function () {
    $('.carousel-1').flickity({
        // options
        cellAlign: 'right',
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 2500,
        pauseAutoPlayOnHover: false,
        pageDots: false
    });
});

$(document).ready(function () {
    $('.cust-carousel').flickity({
        // options
        cellAlign: 'right',
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 2500,
        pauseAutoPlayOnHover: false,
        pageDots: false,
    });
});

$(document).ready(function () {
    $("#menu-icon").click(function () {
        $('#menu-toggle').slideToggle("slow").css("display", "flex");
    })
});