import $ from 'jquery';
import 'bootstrap';
import "../scss/custom.scss";

$('.carousel').carousel({
    interval: 2000,
});

// move carousel slide by use set control flow via `data-slide` and selecting carousel via `href`.
// Recommended that href should be id to select more specificly.
$('.carousel a.carousel-control').click((evt) => {
    evt.preventDefault();
    let ctrl = $(this);
    $(`${ctrl.attr('href')}.carousel`).carousel(ctrl.attr('data-slide'));
});
