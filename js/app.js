


$(document).ready(() => {



    $(window).scroll(function () {

        let x = $(window).scrollTop();

        if (x >= window.innerHeight) {
            $('.navbar').css({
                "background": "darkgray"
            }
            )

            $('.arow').fadeIn(1000);

        } else {
            $('.navbar').css({
                "background": "black"
            })
            $('.arow').fadeOut(1000);

        }
    });

    $('.arow').click(function(){
        $(window).scrollTop(0);
    })


})


