document.addEventListener('DOMContentLoaded', function () {

    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        cover: true,
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        autoplay  : true,        // Enable auto-scroll
        interval  : 2000,        // Auto-scroll interval in milliseconds (2 seconds)
        pauseOnHover: false,
    }
    );
    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 100,
        fixedHeight: 100,
        gap: 10,
        rewind: true,
        pagination: true,
        isNavigation: true,
    });
    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});