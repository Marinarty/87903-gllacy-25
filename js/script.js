document.addEventListener("DOMContentLoaded", function (event) {
    ymaps.ready(init);
    var map;
    function init() {
        map = new ymaps.Map("map", {
            center: [59.938076, 30.329176],
            zoom: 16,
            controls: []
        });
        var placemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/pin.svg",
            iconImageSize: [80, 140]
        });
        map.geoObjects.add(placemark);
    }
});

var link = document.querySelector(".contact-info__contact-form");
var popup = document.querySelector(".modal__background");
var close = popup.querySelector(".modal__close");
var form = popup.querySelector(".feedback__form");
var email = popup.querySelector(".feedback__email");
var text = popup.querySelector(".feedback__user-text");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__background--show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__background--show");
    email.classList.remove("email-error");
    text.classList.remove("text-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal__background--show")) {
            popup.classList.remove("modal__background--show");
            email.classList.remove("email-error");
            text.classList.remove("text-error");
        }
    }
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!email.value) {
        email.classList.add("email-error");
    } else {
        email.classList.remove("email-error");
    }
    if (!text.value) {
        text.classList.add("text-error");
    } else {
        text.classList.remove("text-error");
    }
    if (email.value && text.value) {
        popup.classList.remove("modal__background--show");
    }
});