// Using an object literal for a jQuery feature
var myFeature = {
    init: function () {
        $("#respo_menu").click(this.openNav);
        this.loadImages();
        this.showFullscreen();
        
    },
    openNav: function () {
        $("header nav").slideToggle();
    },
    loadImages: function () {
        $.getJSON('images.json', function (images) {
            $.each(images, function (index, image) {
                var newSrc = image.replace(/\.\w+$/, '.png');
                $('.gallery').append(`<img src="media/compressed/${image}" data-target="media/${newSrc}" alt="One sketch shown on website">`);
            });
        });
    },

    showFullscreen: function () {
        $('.gallery').on('click', 'img', function () {
            var targetSrc = $(this).data('target');
            $('#fullscreen_img').attr('src', targetSrc);
            $('.fullscreen').fadeIn();
        });

        $('.fullscreen').click(function () {
            $('.fullscreen').fadeOut();
        });
    }
};

$(document).ready(function () {
    myFeature.init();
});
