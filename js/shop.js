// kéo xuống khoảng cách 500px thì xuất hiện nút Top-up
var offset = 400;
// thời gian di trượt 0.75s ( 1000 = 1s )
var duration = 700;
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration); else
            $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});

window.addEventListener('scroll', reveal);
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');

            for (var i = 0; i < reveals.length; i++) {
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active')
                }
                else {
                    reveals[i].classList.remove('active')
                }
            }
        }