$(document).ready(function () {
    $(".nav-link").click(function (event) {
        event.preventDefault()
        var gato = this.hash;
        $("html").animate({
                scrollTop: $(gato).offset().top,
            },
            800
        );
    });
});

$('[data-toggle="tooltip"]').tooltip()

$(function () {
    $('[data-toggle="popover"]').popover()
  })