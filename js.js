'use strict'
let slideInd = 1;



function photoSlides(n) {
    let i;
    let slides = document.getElementsByClassName("friend");
    let dots = document.getElementsByClassName("dot");
    if (n < 1) {
        slideInd = slides.length
    }
    else if (n > slides.length) {
        slideInd = 1
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideInd-1].style.display = 'block';
    dots[slideInd-1].className += 'active';

}

photoSlides(slideInd);

function clickDot(n) {
    photoSlides(slideInd = n);
}

function changePhoto(n) {
    photoSlides(slideInd += n);
}
