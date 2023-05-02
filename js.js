// создаю начальный счетчик и вкл функцию
let slideInd = 1;
photoSlides(slideInd);

// функеция кнопки отмотки назад
function prevPhoto(n) {
    photoSlides(slideInd -= 1);
}
// функция кнопки отмотки вперед
function nextPhoto(n) {
    photoSlides(slideInd += 1);
}
// функция индикатора перемонти
function clickDot(n) {
    photoSlides(slideInd = n);
}

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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideInd - 1].style.display = "block";
    dots[slideInd - 1].className += " active";
}





