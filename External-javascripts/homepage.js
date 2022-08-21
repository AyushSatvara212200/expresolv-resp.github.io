$(document).ready(function () {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'right',
        contain: true,
        prevNextButtons: false,
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

$(document).ready(function () {
    $('#products').click(function () {
        $('#product-toggle').slideToggle().css("display", "flex");
        return false;
    })
    $(document).click(function () {
        $('#product-toggle').slideUp();
    })
});

$(document).ready(function () {
    $('#gmail-icon').on('click', function () {
        window.location.href = "mailto:info@expresolv.com?subject=Subject&body=message%20goes%20here";
    });
});
$(document).ready(function () {
    $('#phone-icon').on('click', function () {
        window.location = "tel:9426682674"
    });
});

$(document).ready(function () {
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })
});