    var header = $('#wrap .menu-wrapper');
        if (header.offset().top !== 0) {
            header.addClass('shadow');
        }
        $(window).scroll(function (e) {
            console.log(header.offset())
            if (header.offset().top !== 0) {
                if (!header.hasClass('shadow')) {
                    header.addClass('shadow');
                }
            } else {
                header.removeClass('shadow');
            }
        });