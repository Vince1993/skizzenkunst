// Using an object literal for a jQuery feature
var myFeature = {
    init: function () {
        $("#respo_menu").click(this.openNav);
        this.loadImages();

        $(".gallery").on("click", "img", function (event) {
            const image = event.currentTarget;
            myFeature.openFullscreen(image);
        });

        $(".fullscreenImg").click(this.closeFullscreen);
         
        // Hide image when fullscreen exits
        $(document).on("fullscreenchange webkitfullscreenchange msfullscreenchange", function () {
            if (!document.fullscreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) {
                $(".fullscreenImg img").remove();
            }
        });
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

    openFullscreen: function (image) {
        {
            let new_src = $(image).attr('data-target');

            $('.fullscreenImg').append('<img class="full" src=' + new_src + ' alt="One sketch shown on website">');

            let $elem = $('.fullscreenImg img')[0]; 
             // Check if currently in fullscreen
            let isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

            if (!isFullscreen) 
            {
                if ($elem.requestFullscreen) {$elem.requestFullscreen();} 
                else if ($elem.webkitRequestFullscreen) {$elem.webkitRequestFullscreen();} 
                else if ($elem.msRequestFullscreen) {$elem.msRequestFullscreen();}
            } 
            if(isFullscreen)
            {

            if (document.exitFullscreen) { document.exitFullscreen(); }
            else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
            else if (document.msExitFullscreen) { document.msExitFullscreen(); }
    
        }   
        }
    },

    closeFullscreen : function(){
        
            if (document.exitFullscreen) { document.exitFullscreen(); }
            else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
            else if (document.msExitFullscreen) { document.msExitFullscreen(); }
        
        $(".fullscreenImg img").remove();
        }

};

$(document).ready(function () {
    myFeature.init();});
