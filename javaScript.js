$(document).ready(function () {
    $("#respo").click(slideInAndOut);

    for (let i = 0; i <= 17; i++) {
        $('.img_grid').append(`<img src="img_small/sketch${i}.jpg" id="img${i}">`);
    }

    $(".img_grid img").on("click", function () {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            this.requestFullscreen();
        } else {
            // Exit fullscreen
            document.exitFullscreen();
        }
    });

    $("a[href^='#']").click(function (e) {
        e.preventDefault(); // prevent default jump
        var target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 200); // smooth scroll in 800ms
        }
    });

    $("a").on("touchstart", function () {
        $(this).addClass("link_hover_effect");
      });
    
    $("#donation_button").on("touchstart", function () {
        $(this).addClass("");
    });
});

function slideInAndOut() {
    $("nav a").slideToggle(1000);}




