
//get photorank media url for customer
$.getJSON('https://photorankapi-a.akamaihd.net/?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2', function (json) {
    var mediaURL = json.data._embedded.customer._embedded['media:photorank']._links.self.href;

    //get media and properties
    $.getJSON(mediaURL, function (json) {
        $.each(json.data._embedded.media, function (key, value) {
            $('#carousel').append("<div class='img-container'><a data-lightbox='UGC' href=" + value.images.original + " data-title='" + value.original_source + "'><img src=" + value.images.normal + "><span>" + value.caption + "</span></a></div>");
        });
        $('.multiple-items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 1160,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 940,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    });
});

//lightbox settings
lightbox.option({
    'albumLabel': '',
    'wrapAround': true
});