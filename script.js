
//get photorank media url for customer
$.getJSON('https://photorankapi-a.akamaihd.net/?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2', function (json) {
    var mediaURL = json.data._embedded.customer._embedded['media:photorank']._links.self.href;

    //get media and properties
    $.getJSON(mediaURL, function (json) {
        $.each(json.data._embedded.media, function (key, value) {
            $('#carousel').append("<div class='img-container'><a data-lightbox='UGC' href=" + value.images.normal + " data-title='" + value.original_source + "'><img src=" + value.images.normal + "><span>" + value.caption + "</span></a></div>");
        });
        $('.multiple-items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2
        });
    });
});

//lightbox settings
lightbox.option({
    'albumLabel': '',
    'wrapAround': true
});