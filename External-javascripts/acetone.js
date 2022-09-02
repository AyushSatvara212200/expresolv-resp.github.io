$(document).ready(function () {
    $("#menu-icon").click(function () {
        $('#menu-toggle').slideToggle("slow").css("display", "flex");
    })
});

$(document).ready(function () {
    $("#products-mb").click(function () {
        $('#product-mb-dropdown').slideToggle("slow").css("display", "flex");
    })
});


$(document).ready(function () {
    $('#products').click(function () {
        $('#product-toggle').slideToggle().css("display", "flex");
        // return false;
    })
    // $(document).click(function () {
    //     $('#product-toggle').slideUp();
    // })
});

$(document).ready(function () {
    $('#gmail-icon').on('click', function () {
        window.location.href = "mailto:info@expresolv.com?subject=Subject&body=message%20goes%20here";
    });
});
$(document).ready(function () {
    $('#phone-icon').on('click', function () {
        window.location = "tel:9426082674"
    });
});

$(document).ready(function () {
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })
});
$(document).ready(function () {
    $("#pointer").click(function(){
        $("#gp-slider-usp").toggle("fast").css("z-index","1");
        $("#pointer").css("z-index","2");

    })
    $(document).mouseup(function (e) {
        var container = $("#gp-slider-usp");
        if(!container.is(e.target) && 
        container.has(e.target).length === 0) {
            container.hide();
            $("#pointer").css("z-index","0");
        }
      
    });
});
$(document).ready(function () {
    $("#pointer1").click(function(){
        $("#gp-slider-phur").toggle("fast").css("z-index","1");
        $("#pointer1").css("z-index","2");
    })
    $(document).mouseup(function (e) {
        var container = $("#gp-slider-phur");
        if(!container.is(e.target) && 
        container.has(e.target).length === 0) {
            container.hide();
            $("#pointer1").css("z-index","0");
        }
    });
});
$(document).ready(function () {
    $("#pointer2").click(function(){
        $("#gp-slider-bp").toggle("fast").css("z-index","1");
        $("#pointer2").css("z-index","2");
    })
    $(document).mouseup(function (e) {
        var container = $("#gp-slider-bp");
        if(!container.is(e.target) && 
        container.has(e.target).length === 0) {
            container.hide();
            $("#pointer2").css("z-index","0");
        }
    });
});
