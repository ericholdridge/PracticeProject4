$('#burger').on('click', function () {
    $('.menu').fadeToggle(300);
    $('.menu').css('display', 'flex');
    $('.menu-right').fadeToggle(300);
});

$(window).resize(function () {
    if ($(window).outerWidth() <= 860) {
        $(".menu").css("display", "none")
        $(".menu-right").css("display", "none")
    } else {
        $(".menu").css("display", "flex")
        $(".menu-right").css("display", "flex")
    }
});

$('.menu a').on('click', function () {
    if ($(window).outerWidth() <= 860) {
        if ($('.menu').css('display') == 'flex') $('.menu').slideUp('slow');
        if ($('.menu-right').css('display') == 'block') $('.menu-right').toggle();
    }
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        1300,
        'linear'
    )
});